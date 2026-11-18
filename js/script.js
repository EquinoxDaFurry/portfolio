const technologies = [
  { name: "HTML", slug: "html5", color: "E34F26" },
  { name: "CSS", slug: "css3", color: "1572B6" },
  { name: "JavaScript", slug: "javascript", color: "B59B00" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "Java", slug: "openjdk", color: "ED8B00" },
  { name: "Rust", slug: "rust", color: "78675A" },
  { name: "Kotlin", slug: "kotlin", color: "7F52FF" },
  { name: "Vulkan", slug: "vulkan", color: "AC162C" },
  { name: "GLSL", slug: null }
];

function createTechnology(technology) {
  const item = document.createElement("span");
  item.className = "tech-item";

  if (technology.slug) {
    const logo = document.createElement("img");
    logo.src = `https://cdn.simpleicons.org/${technology.slug}/${technology.color}`;
    logo.alt = "";
    logo.loading = "eager";
    logo.onerror = () => {
      logo.remove();
      const fallback = document.createElement("span");
      fallback.className = "tech-fallback";
      fallback.textContent = technology.name.slice(0, 2).toUpperCase();
      item.prepend(fallback);
    };
    item.append(logo);
  } else {
    const fallback = document.createElement("span");
    fallback.className = "tech-fallback";
    fallback.textContent = "GL";
    item.append(fallback);
  }

  const label = document.createElement("span");
  label.textContent = technology.name;
  item.append(label);
  return item;
}

const groups = document.querySelectorAll("[data-ticker-group]");
groups.forEach((group) => {
  technologies.forEach((technology) => {
    group.append(createTechnology(technology));
  });
});

// If the browser requests reduced motion, keep the list still and readable.
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
function updateTickerMotion() {
  document.querySelector(".ticker-track")?.classList.toggle("motion-reduced", motionPreference.matches);
}
motionPreference.addEventListener?.("change", updateTickerMotion);
updateTickerMotion();
