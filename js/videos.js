// Disable right-click on all video elements
const videos = document.querySelectorAll("video");
videos.forEach((video) => {
  video.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Prevent right-click
  });
});
