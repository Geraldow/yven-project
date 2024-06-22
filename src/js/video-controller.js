document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll(".video");
    let currentVideoIndex = 0;
  
    function playNextVideo() {
      if (currentVideoIndex < videos.length - 1) {
        videos[currentVideoIndex].classList.remove("active");
        videos[currentVideoIndex].classList.add("inactive");
        currentVideoIndex++;
        videos[currentVideoIndex].classList.remove("inactive");
        videos[currentVideoIndex].classList.add("active");
        videos[currentVideoIndex].play();
      }
    }
  
    videos.forEach((video, index) => {
      video.addEventListener("ended", playNextVideo);
      video.addEventListener("playing", () => {
        video.classList.add("active");
      });
      video.addEventListener("pause", () => {
        video.classList.remove("active");
      });
      if (index !== 0) {
        video.classList.add("inactive");
        video.pause();
      }
    });
  
    // Start the first video
    videos[currentVideoIndex].play();
  });
  