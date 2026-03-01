import { useEffect, useRef } from 'react'
import { Box } from '@mui/material'

// ── Mobile-aware tuning ───────────────────────────────────────────────
const isMobile = () => window.innerWidth < 768

// Particle colours (dark-mode only)
const CORE_COLOR  = '#A3B18A'   // bright star dot
const GLOW_COLOR  = '#1B4332'   // shadow bloom

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const mobile = isMobile()
    const COUNT        = mobile ? 30 : 62
    const CONNECT_DIST = mobile ? 0  : 130   // skip lines on mobile (too expensive)
    const SPEED        = 0.42
    const PARALLAX     = mobile ? 0  : 22    // px of camera parallax

    // Resize helper — sets canvas physical and logical size
    let W = 0, H = 0
    const resize = () => {
      const parent = canvas.parentElement
      W = parent ? parent.clientWidth  : window.innerWidth
      H = parent ? parent.clientHeight : window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width  = W * dpr
      canvas.height = H * dpr
      canvas.style.width  = `${W}px`
      canvas.style.height = `${H}px`
      ctx.scale(dpr, dpr)
    }
    resize()

    // ── Particles ───────────────────────────────────────────────────────
    interface Particle { x: number; y: number; vx: number; vy: number }
    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
    }))

    // ── Mouse parallax ──────────────────────────────────────────────────
    const mouse = { tx: 0, ty: 0, cx: 0, cy: 0 }
    const onMouseMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth  - 0.5) * PARALLAX
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * PARALLAX
    }
    if (!mobile) window.addEventListener('mousemove', onMouseMove, { passive: true })

    // ── Page-visibility pause ───────────────────────────────────────────
    let hidden = false
    const onVisibility = () => { hidden = document.hidden }
    document.addEventListener('visibilitychange', onVisibility)

    // ── Animation loop ──────────────────────────────────────────────────
    let rafId: number
    const drawDot = (x: number, y: number) => {
      // Outer glow
      ctx.beginPath()
      ctx.arc(x, y, 6, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(27,67,50,0.09)'
      ctx.fill()
      // Bright core
      ctx.beginPath()
      ctx.arc(x, y, 1.6, 0, Math.PI * 2)
      ctx.fillStyle = CORE_COLOR
      ctx.shadowColor = GLOW_COLOR
      ctx.shadowBlur  = 10
      ctx.fill()
      ctx.shadowBlur = 0
    }

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      if (hidden) return

      // Smooth parallax lerp
      mouse.cx += (mouse.tx - mouse.cx) * 0.06
      mouse.cy += (mouse.ty - mouse.cy) * 0.06
      const ox = mouse.cx
      const oy = mouse.cy

      ctx.clearRect(0, 0, W, H)

      // ── Lines ──────────────────────────────────────────────────────────
      if (CONNECT_DIST > 0) {
        for (let i = 0; i < COUNT; i++) {
          for (let j = i + 1; j < COUNT; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < CONNECT_DIST) {
              const alpha = (1 - dist / CONNECT_DIST) * 0.55
              ctx.beginPath()
              ctx.moveTo(particles[i].x + ox, particles[i].y + oy)
              ctx.lineTo(particles[j].x + ox, particles[j].y + oy)
              ctx.strokeStyle = `rgba(96,108,56,${alpha})`
              ctx.lineWidth = 0.8
              ctx.stroke()
            }
          }
        }
      }

      // ── Dots + move ────────────────────────────────────────────────────
      for (let i = 0; i < COUNT; i++) {
        const p = particles[i]
        drawDot(p.x + ox, p.y + oy)

        p.x += p.vx
        p.y += p.vy
        // Wrap around edges (smoother than bouncing on mobile)
        if (p.x < -10)    p.x = W + 10
        if (p.x > W + 10) p.x = -10
        if (p.y < -10)    p.y = H + 10
        if (p.y > H + 10) p.y = -10
      }
    }
    animate()

    // ── Resize ─────────────────────────────────────────────────────────
    const onResize = () => {
      resize()
      for (const p of particles) {
        p.x = Math.random() * W
        p.y = Math.random() * H
      }
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        maskImage:
          'radial-gradient(ellipse 52% 58% at 50% 50%, transparent 0%, transparent 18%, black 68%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 52% 58% at 50% 50%, transparent 0%, transparent 18%, black 68%)',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </Box>
  )
}

