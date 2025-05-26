const stories = document.querySelectorAll(".story");
const storyViewer = document.getElementById("storyViewer");
const storyContent = document.getElementById("storyContent");
const storyProgress = document.getElementById("storyProgress");

const storyImages = [
  "https://source.unsplash.com/random/600x800?sig=1",
  "https://source.unsplash.com/random/600x800?sig=2",
  "https://source.unsplash.com/random/600x800?sig=3",
];

let currentStoryIndex = 0;
let storyTimer;

function showStory(index) {
  storyViewer.style.display = "flex";
  storyContent.innerHTML = `<img src="${storyImages[index]}" alt="Story">`;
  storyProgress.style.animation = "none";
  void storyProgress.offsetWidth; // trigger reflow
  storyProgress.style.animation = "progressBar 5s linear forwards";

  clearTimeout(storyTimer);
  storyTimer = setTimeout(() => {
    nextStory();
  }, 5000);
}

function nextStory() {
  if (currentStoryIndex < storyImages.length - 1) {
    currentStoryIndex++;
    showStory(currentStoryIndex);
  } else {
    closeStory();
  }
}

function closeStory() {
  storyViewer.style.display = "none";
  clearTimeout(storyTimer);
  currentStoryIndex = 0;
}

stories.forEach((story, index) => {
  story.addEventListener("click", () => {
    currentStoryIndex = index % storyImages.length;
    showStory(currentStoryIndex);
  });
});

storyViewer.addEventListener("click", nextStory);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeStory();
});
// Reels: Play/pause on scroll
const reels = document.querySelectorAll(".reel video");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
}, { threshold: 0.8 });

reels.forEach((video) => {
  observer.observe(video);
});
// Sample users and posts for search
const sampleData = [
  { type: "user", name: "john_doe" },
  { type: "user", name: "ai_artist" },
  { type: "post", name: "sunset photo" },
  { type: "user", name: "tech_explorer" },
  { type: "post", name: "ai concept art" },
  { type: "post", name: "futuristic design" }
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    const filtered = sampleData.filter(item =>
      item.name.toLowerCase().includes(query)
    );

    filtered.forEach(item => {
      const div = document.createElement("div");
      div.className = "search-item";
      div.innerHTML = `<b>${item.type.toUpperCase()}</b><br>${item.name}`;
      searchResults.appendChild(div);
    });

    if (query && filtered.length === 0) {
      searchResults.innerHTML = "<p style='color:#888;'>No results found.</p>";
    }
  });
}
// Sample users and posts for search
const sampleData = [
  { type: "user", name: "john_doe" },
  { type: "user", name: "ai_artist" },
  { type: "post", name: "sunset photo" },
  { type: "user", name: "tech_explorer" },
  { type: "post", name: "ai concept art" },
  { type: "post", name: "futuristic design" }
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    const filtered = sampleData.filter(item =>
      item.name.toLowerCase().includes(query)
    );

    filtered.forEach(item => {
      const div = document.createElement("div");
      div.className = "search-item";
      div.innerHTML = `<b>${item.type.toUpperCase()}</b><br>${item.name}`;
      searchResults.appendChild(div);
    });

    if (query && filtered.length === 0) {
      searchResults.innerHTML = "<p style='color:#888;'>No results found.</p>";
    }
  });
}
