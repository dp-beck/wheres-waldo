This is where I keep my notes and to do list for completing the Where's Waldo Project

Description of the Project:

This is a Where's Waldo game. The user is presented with a large photograph and the user is meant to find certain characters in the photograph (e.g. Waldo, The Wizard, Odwal)

The user will click on the region of the photo where she believes she has found a character and a pop up menu will appear to choose which character. If the user is wrong, there will be some kind of message that says Wrong. If the user is right, the character will be marked out by green box and the character will no longer be a choosable option on the pop up menu.

The user will be timed from when the photo is first loaded until all the characers are detected.

Once a round is complete, ask the user for his/her name and record that time. This will get a bit tricky since you’ll have anonymous users you need to keep track of!

Here is a list of to-dos -- (not quite pseudo code)

~~1. Initialize Firebase as Backend for the App  - DONE~~
2. Create the App (See substeps)
    ~~A. Find and save needed resources~~
        ~~i. Where's Waldo photos (1-4)~~
        ~~ii. Icons of Where's Waldo Characters~~
    B. Set up the Structure of the App
        i. One Home/Landing Page, where the scene will be selected and there is a link to the Leaderboard. The page also has a description of the game and icons of the characters to find.
        ii. One page per scene: The photo will take up the majority of the page. The page will also have a link to take you back to the home page. The page will have:
            a. a Timer
            b. a pop up menu of characters to select when searching the page
            c. a pop up form asking for name to display top ten scores
        iii. Leaderboard: This page will have its own three sub-pages - one per scene; each page displays a list of the top ten shortest times and names for solving the puzzles.
    C. **Test before writing**
    D. Home Page
    E. Scene Pages
    F. Leaderboard
3. Write up the Readme for the App
4. Host the App with Firebase Hosting
5. Upload solution to The Odin Project