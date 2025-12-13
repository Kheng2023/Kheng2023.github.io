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

// --- 1. Auto-Generated Sticky Navigation ---
function generateResumeNav() {
  // Check if we are on the resume page by looking for the 'resume-section' class
  // If not, stop the function so we don't cause errors on other pages
  if (!document.querySelector(".resume-section")) return;

  // Create the nav element
  const nav = document.createElement("nav");
  nav.id = "resume-nav";

  // Find all sections with an ID (Profile, Projects, etc.)
  const sections = document.querySelectorAll("section.resume-section[id]");

  // Loop through each section to create a link
  sections.forEach((section) => {
    // Get the ID (e.g., "work-experience") and the Title (e.g., "Work Experience")
    const sectionId = section.id;
    const sectionTitle = section.querySelector("h2").textContent;

    // Create the link
    const link = document.createElement("a");
    link.href = `#${sectionId}`;
    link.textContent = sectionTitle;

    // Add link to the nav bar
    nav.appendChild(link);
  });

  // Insert the nav bar right after the header (before the main content)
  const header = document.querySelector("header");
  header.parentNode.insertBefore(nav, header.nextSibling);
}

// Run the function
generateResumeNav();

// --- 2. Work Experience Accordion ---
function setupAccordions() {
  // Find all work items
  const workItems = document.querySelectorAll(".work-item");

  workItems.forEach((item) => {
    // Find the "header" (the details part)
    const header = item.querySelector(".work-details");

    // Add a click listener
    header.addEventListener("click", () => {
      // Toggle the 'expanded' class on the parent item
      item.classList.toggle("expanded");
    });
  });
}

// Run the function
setupAccordions();
