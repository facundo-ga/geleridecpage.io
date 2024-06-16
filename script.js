function showVideo(videoSrc) {
    var videoPlayer = document.getElementById('videoPlayer');
    var videoContainer = document.getElementById('videoContainer');
    videoPlayer.src = videoSrc;
    videoContainer.style.display = 'block';
  }
  
  function closeVideo() {
    console.log('Cerrando el video...');
    var videoContainer = document.getElementById('videoContainer');
    videoContainer.style.display = 'none';
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.pause();
  }
    
  function showAudio(audioSrc) {
    var audioPlayer = document.getElementById('audioPlayer');
    var audioContainer = document.getElementById('audioContainer');
    audioPlayer.src = audioSrc;
    audioContainer.style.display = 'block';
  }
  
  function closeAudio() {
    var audioContainer = document.getElementById('audioContainer');
    audioContainer.style.display = 'none';
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
  }
   
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelector('h1').classList.toggle('dark-mode');
        document.querySelector('p').classList.toggle('dark-mode');
        document.querySelector('footer .inner-paragraph').classList.toggle('dark-mode');
        document.querySelector('.contenedor-galeria').classList.toggle('dark-mode');
        // Toggle dark mode class on footer .download-button and footer .video-button
    
      }
   
