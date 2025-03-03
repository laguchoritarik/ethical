// src/background.ts

chrome.runtime.onInstalled.addListener(() => {
    console.log("Explicit Content Blocker has been installed.");
  });