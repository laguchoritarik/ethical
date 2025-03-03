// src/contentScript.ts

// List of explicit words
const explicitWords: string[] = [
    "porn", "sex", "xxx", "nude", "erotic", "adult", "blowjob", "deepthroat", "anal",
    "ass", "tits", "boobs", "cock", "dick", "pussy", "vagina", "penis", "cum", "orgasm",
    "sperm", "milf", "slut", "whore", "hooker", "escort", "fetish", "gangbang", "bdsm",
    "dominatrix", "kink", "dildo", "vibrator", "hentai", "hardcore", "masturbation",
    "handjob", "creampie", "fisting", "pegging", "gloryhole", "hot girl", "sexy video",
    "leaked nudes", "nude photos", "adult content", "premium snap", "onlyfans",
    "cam girl", "webcam sex", "sex tape", "casting couch", "extreme porn", "strip tease",
    "naked selfies", "foot fetish", "erotic massage", "homemade porn", "sugar daddy",
    "roleplay sex", "raw sex", "gay porn", "lesbian sex", "shemale", "trans porn", 
    "twink", "bisexual threesome", "gay hookup", "lesbian love", "gay cam", "bi-curious",
    "bitch", "bastard", "fuck", "shit", "damn", "asshole", "motherfucker", "cunt", 
    "prick", "dickhead", "sensual", "naughty", "exotic dancer", "topless", "lingerie", 
    "bikini model", "sexy photos", "strip club", "booty pics", "steamy scene", 
    "pornstars", "adult industry", "amateur porn", "cam site", "sex workers", 
    "premium content", "fansly", "nude TikTok", "leaked videos", "erotic novel"
  ];
  
  // Function to check if a string contains any explicit word
  function containsExplicitContent(text: string): boolean {
    return explicitWords.some(word => text.toLowerCase().includes(word));
  }
  
  // Function to hide all images and videos on the page
  function hideAllMedia() {
    const allMedia = document.querySelectorAll("img, video");
  
    allMedia.forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.display = "none"; // Hide the element
      }
    });
  }
  
  // Function to scan the HTML content of the page for explicit words
  function scanForExplicitContentInHTML() {
    // Get the text content of the entire document
    const htmlContent = document.body.textContent || "";
  
    // Check if the HTML content contains any explicit word
    if (containsExplicitContent(htmlContent)) {
      hideAllMedia(); // Hide all media if explicit content is found
      return; // Exit early since we've already hidden everything
    }
  }
  
  // Run the function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", scanForExplicitContentInHTML);
  
  // Optional: Re-scan the page if new content is dynamically added
  new MutationObserver(scanForExplicitContentInHTML).observe(document.body, { childList: true, subtree: true, characterData: true });