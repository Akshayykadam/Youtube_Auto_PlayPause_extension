chrome.tabs.onActivated.addListener(async (activeInfo) => {
  let tab = await chrome.tabs.get(activeInfo.tabId);
  if (tab.url.includes("youtube.com/watch")) {
    chrome.scripting.executeScript({
      target: {tabId: activeInfo.tabId},
      function: playVideo
    });
  } else {
    let tabs = await chrome.tabs.query({url: "*://*.youtube.com/watch*"});
    tabs.forEach(tab => {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: pauseVideo
      });
    });
  }
});

function playVideo() {
  if (document.querySelector('video')) {
    document.querySelector('video').play();
  }
}

function pauseVideo() {
  if (document.querySelector('video')) {
    document.querySelector('video').pause();
  }
}
