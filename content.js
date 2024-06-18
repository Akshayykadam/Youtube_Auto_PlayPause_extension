document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    if (document.querySelector('video')) {
      document.querySelector('video').pause();
    }
  } else if (document.visibilityState === 'visible') {
    if (document.querySelector('video')) {
      document.querySelector('video').play();
    }
  }
});
