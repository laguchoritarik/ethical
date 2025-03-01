"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
// Function to run Git commands
function runGitCommands(commitMessage) {
    // Get the current working directory
    var cwd = process.cwd();
    // Step 1: Run `git add .`
    (0, child_process_1.exec)('git add .', { cwd: cwd }, function (error, stdout, stderr) {
        if (error) {
            console.error("Error during git add: ".concat(stderr));
            return;
        }
        console.log('Files added successfully.');
        // Step 2: Run `git commit`
        var commitCmd = "git commit -m \"".concat(commitMessage, "\"");
        (0, child_process_1.exec)(commitCmd, { cwd: cwd }, function (error, stdout, stderr) {
            if (error) {
                console.error("Error during git commit: ".concat(stderr));
                return;
            }
            console.log("Committed with message: ".concat(commitMessage));
            // Step 3: Run `git push`
            (0, child_process_1.exec)('git push', { cwd: cwd }, function (error, stdout, stderr) {
                if (error) {
                    console.error("Error during git push: ".concat(stderr));
                    return;
                }
                console.log('Changes pushed successfully.');
            });
        });
    });
}
// Function to run the Git commands every 5 minutes
function startAutoGitPush(intervalMinutes, commitMessage) {
    console.log("Auto Git Push started. Running every ".concat(intervalMinutes, " minutes."));
    var intervalMs = intervalMinutes * 60 * 1000;
    // Run the function immediately on start
    runGitCommands(commitMessage);
    // Set up an interval to run the function every X minutes
    setInterval(function () {
        runGitCommands(commitMessage);
    }, intervalMs);
}
// Main entry point
var commitMessage = 'Automated commit'; // Customize your commit message here
var intervalMinutes = 1; // Set the interval in minutes
startAutoGitPush(intervalMinutes, commitMessage);
