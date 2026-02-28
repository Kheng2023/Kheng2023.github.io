// Update the year in the footer dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// --- Greeting Logic ---
const greetingElement = document.getElementById("greeting");

// Only run this code IF the element actually exists
if (greetingElement) {
  const currentHour = new Date().getHours();
  let greetingText;

  if (currentHour < 12) {
    greetingText = "Good morning,";
  } else if (currentHour < 18) {
    greetingText = "Good afternoon,";
  } else {
    greetingText = "Good evening,";
  }

  greetingElement.textContent = greetingText;
}

// --- 2. Work Experience Accordion ---
function setupAccordions() {
  // Find all work items
  const workItems = document.querySelectorAll(".work-item");

  workItems.forEach((item) => {
    // Find the "header" (the details part)
    const header = item.querySelector(".work-details");

    // Find the visible toggle button (we add it next to the details)
    const toggle = item.querySelector(".work-toggle");

    function updateToggle() {
      if (!toggle) return;
      if (item.classList.contains("expanded")) {
        toggle.textContent = "hide -";
        toggle.setAttribute("aria-expanded", "true");
      } else {
        toggle.textContent = "click to expand +";
        toggle.setAttribute("aria-expanded", "false");
      }
    }

    // Add a click listener to the header to toggle
    if (header) {
      header.addEventListener("click", () => {
        item.classList.toggle("expanded");
        updateToggle();
      });
    }

    // Add a click listener to the explicit toggle button
    if (toggle) {
      toggle.addEventListener("click", (e) => {
        // Prevent the click from also triggering the header listener
        e.stopPropagation();
        item.classList.toggle("expanded");
        updateToggle();
      });
      // set initial state
      updateToggle();
    }
  });
}

// Run the function
setupAccordions();
