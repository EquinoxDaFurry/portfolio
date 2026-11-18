const technologies = [
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", slug: "css3", color: "1572B6" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "Java", slug: "java", color: "ED8B00" },
  { name: "Rust", slug: "rust", color: "000000" },
  { name: "Kotlin", slug: "kotlin", color: "7F52FF" },
  { name: "Vulkan", slug: "vulkan", color: "AC162C" },
  { name: "GLSL", slug: null, color: null }
];

function makeTechItem(tech) {
  const item = document.createElement("span");
  item.className = "tech-item";
  if (tech.slug) {
    const img = document.createElement("img");
    img.src = `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`;
    img.alt = "";
    img.loading = "lazy";
    img.onerror = () => {
      img.remove();
      const fallback = document.createElement("span");
      fallback.className = "text-icon";
      fallback.textContent = tech.name.slice(0, 2).toUpperCase();
      item.prepend(fallback);
    };
    item.append(img);
  } else {
    const fallback = document.createElement("span");
    fallback.className = "text-icon";
    fallback.textContent = "GL";
    item.append(fallback);
  }
  const label = document.createElement("span");
  label.textContent = tech.name;
  item.append(label);
  return item;
}

document.querySelectorAll("[data-ticker-set]").forEach((set) => {
  technologies.forEach((tech) => set.append(makeTechItem(tech)));
});
