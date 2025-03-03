"use strict";
// src/contentScript.ts
// List of explicit words
const explicitWords = [
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
function containsExplicitContent(text) {
    if (!text)
        return false; // Handle empty/null input
    const regex = new RegExp(`\\b(${explicitWords.join("|")})\\b`, "i"); // Whole-word case-insensitive match
    return regex.test(text);
}
// Function to hide all images and videos immediately
function hideAllMedia() {
    document.querySelectorAll("img, video").forEach(element => {
        if (element instanceof HTMLElement) {
            element.style.display = "none"; // Hide the element
        }
    });
}
// Function to restore all images and videos if no explicit content is found
function restoreAllMedia() {
    document.querySelectorAll("img, video").forEach(element => {
        if (element instanceof HTMLElement) {
            element.style.display = ""; // Restore default display
        }
    });
}
// Function to scan the HTML content of the page for explicit words
function scanForExplicitContentInHTML() {
    const htmlContent = document.body.textContent || "";
    console.log("Scanning HTML content:", htmlContent);
    if (containsExplicitContent(htmlContent)) {
        console.log("Explicit content detected! Media remains hidden.");
    }
    else {
        console.log("No explicit content found. Restoring media.");
        restoreAllMedia();
    }
}
// Run the function when the DOM is fully loaded
hideAllMedia(); // Hide media first
document.addEventListener("DOMContentLoaded", scanForExplicitContentInHTML);
// Optional: Re-scan the page if new content is dynamically added
new MutationObserver(() => {
    hideAllMedia(); // Hide media first on new content load
    scanForExplicitContentInHTML();
}).observe(document.body, { childList: true, subtree: true, characterData: true });
