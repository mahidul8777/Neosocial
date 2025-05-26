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
