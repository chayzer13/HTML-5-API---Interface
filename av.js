function openTab(tabName) {
    const tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
  }

  document.getElementById('audioVideo').style.display = 'block';

  const audio = document.getElementById('audioPlayer');
  const audioFileInput = document.getElementById('audioFileInput');
  
  audioFileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const audioURL = URL.createObjectURL(file);
      audio.src = audioURL;
      audio.play();
    }
  });
  
  function playAudio() {
    audio.play();
  }
  
  function pauseAudio() {
    audio.pause();
  }
  
  function setVolume(value) {
    audio.volume = value;
  }
  
  const video = document.getElementById('videoPlayer');
  const videoFileInput = document.getElementById('videoFileInput');
  
  videoFileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      video.src = videoURL;
      video.play();
    }
  });
  
  function playVideo() {
    video.play();
  }
  
  function pauseVideo() {
    video.pause();
  }
  
  function setVideoVolume(value) {
    video.volume = value;
  }