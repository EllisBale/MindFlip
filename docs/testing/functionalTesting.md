# Manual Testing


## Functionality


Use this to make table https://www.tablesgenerator.com/markdown_tables


### Interactables and functionality 

- Card flips
    - Card flips
    - Cards unmatch and flip back
    - Cards match and are hidden
    - Matching all pairs turns next level button to green and functional
    - User gets message when matching all pairs

- Reset button
    - Resets game by reshuffling images
    - Resets moves number back to 0
    - Changes next level button back to red and non-functional by starting level again

- How to play modal
    - Modal pops up when clicked on
    - Modal closes when user clicks of it or presses X
    - Includes game instuctions


- Next level button
    - Button colour is red when user hasn't completed level
    - Button functionality doesn't work when user hasn't completed level
    - Changes colour to green when user completes level
    - Function added when level complete
    - When level is completed, sends user to next level 


- Level select button
    - Lets user select levels 1/6
    - Grid size change depending on the level

- Volume controls
    - User can change increase/decrease background audio with slider
    - Stops playing when user is tabbed out
    - Plays again when user tabs back in

- Mute/unmute button
    - Pause background music
    - Unpause background music



| Test number | Feature                                                                                       | Expected Result                                                                                 | Status | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |   |
|-------------|-----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| 1.          | Card Flips                                                                                    | Card flips when clicked on.                                                                     | PASS   | Click on card to make sure it flips over and adds a ".flipped" class to html from javascript. Steps: 1. Use chrome devtools and use "select element" and hover mouse over flipped card. 2. Check card div for a class of "flipped". 3. When both cards are flipped and are unmatched, check card visuals for the card to go back to its original state.                                                                                                                         |   |
| 2.          | Card unmatched                                                                                | Cards turn back around.                                                                         | PASS   | Test: Unmatched cards remove card1 and card2 class "flipped" Steps: 1. Open Chrome devtools and "select element". 2. Check elements on the right of devtools to see if both unmatched cards remove the "flipped" class from both card divs when clicking on 2 unmatched cards.                                                                                                                                                                                                  |   |
| 3.          | Card Match                                                                                    | Cards are removed and hidden when matched.                                                      | PASS   | Test: Both cards are flipped and match each other which then adds the class "hidden" to both matching cards which removes it from the gameboard. Steps: 1. Open Chrome devtools and "select element". 2. Click on 2 cards that match. 3. Check the devtools elements and view the 2 cards that have the class "hidden". 4. Check the cards on the website to see if they are not visable.                                                                                       |   |
| 4.          | Level number tells the user what level they are on and changes colour depending on what level | Level text updates depending on what level the user is on and changes colour on every 2 levels. | PASS   | Test: Select a level and see if "level-number" changes colour depending on the level difficulty. Steps: 1. Click the "level-select" button. 2. Click level 1 and 2 to see if "level-number" is green. 3. click "level-select" button and click levels 3 and 4 to see if "level-number" is yellow. 4. click "level-select" button and click level 5 and 6 to see if "level-number" is red.                                                                                       |   |
| 5.          | Moves text number changes on how many pair of cards are clicked.                              | Moves text updates with each pair the user clicks on.                                           | PASS   | est: Flip two cards for the "moves-text" to add 1. Steps: 1. Click two cards to flip them over. 2. Check "moves-text" to see if the number adds 1.                                                                                                                                                                                                                                                                                                                              |   |
| 6.          | Next level button turns green and is activated when you complete level.                       | Button is activated and turns green from red and allows user to go to next level.               | PASS   | Test: Click the button to see if it works when button turns green and moves onto next level. Steps: 1. Click on red button to see if it goes to next level. 2. When the red button has no current functionality complete a level by matching all cards. 3. Check the button after matching all cards to see if it turns green with a pulsing animation by looking at visuals or by checking button class adds "ready". 4. Click the button to see if it goes to the next level. |   |
| 7.          | Level Select                                                                                  | Clicking on button will give you options to select and go onto other levels.                    | PASS   | est: The "level-select" button opens up level options that has levels 1 to 6 which when clicking level, sends user to chosen level. Steps: 1. Click on the "level-select" button. 2. Select any level by clicking on it. 3. See if the grid changes and "game-level-text" is updated to that level.                                                                                                                                                                             |   |
| 8.          | Reset Level                                                                                   | Current level resets and shuffles again as well as resetting the moves text back to 0.          | PASS   | Test: Click reset button to reset level by starting game again. Moves are reset to 0 and cards are reshuffled. 1. Click on 1 card to flip it. 2. Click reset button to see if the card turns back. 3. Check same card by flipping it to see if the image is same (reset twice if the same image reshuffled picked). 4. Check the moves resets to 0 when flipping two cards.                                                                                                     |   |
| 9.          | Max level is complete and sends user to level 1                                               | Message appears and sends user back to level 1.                                                 | PASS   | Test: Message pops up and sends user back to level 1 when all cards are matched in level 6. Steps: 1. Click select level button. 2. Click level 6. 3. Match all cards on board. 4. When complete, look at the message underneath board. 5. Check if level goes back to level 1.                                                                                                                                                                                                 |   |
| 10.         | How to play (modal)                                                                           | When clicked on it opens up a modal explaining how to play game.                                | PASS   | Test: Click on "how to play" on navbar to open instructions modal. Steps: 1. Click on "how to play" on navabar. 2. Modal opens up and overlays on top.                                                                                                                                                                                                                                                                                                                          |   |
| 11.         | Modal close button                                                                            | When modal is opened, modal can close with fontAwesome icon at the top of modal content.        | PASS   | Test: While modal is open, close the modal by clicking on fontAwesome x icon. Steps: 1. Open modal. 2. Click on the X fontAwesome icon at the top of modal content. 3. Open modal. 4. Click anywhere out of the modal content to close modal.                                                                                                                                                                                                                                   |   |
| 12.         | Volume slider                                                                                 | User can increase background music volume down or up.                                           | PASS   | Test: Use mouse to drag volume button from left to right. Steps: 1. Click on card to start music. 2. Click the volume slider and drag it to the left. 3. Listen for volume to be reduced. 4. Drag slider to the right to see if volume increases.                                                                                                                                                                                                                               |   |
| 13.         | Mute button                                                                                   | User can mute music when music is playing.                                                      | PASS   | Test: Clicking on button to see button mutes the music and switch icon Steps: 1. Click on card to start music. 2. Click mute button. 3. Listen to see if music is playing. 4. Check fontAwesome icon changes to mute icon.                                                                                                                                                                                                                                                      |   |
| 14.         | Unmute button                                                                                 | User can unmute the music when clicking the mute button again.                                  | PASS   | Test: Clicking the mute button again to see if button unmutes. Steps: 1. Flip card to start music. 2. Click mute button for music to stop and icon to change. 3. Click the mute button again to unmute music. 4. Listen for music to be playing again.                                                                                                                                                                                                                          |   |
| 15.         | Music mutes when tabbed out                                                                   | Music stops when tabbed out and starts when tabbed back in.                                     | PASS   | Test: Tabbing out of the websites window for the music to stop. Steps: 1. Flip card to start music. 2. Open a different tab in chrome. 3. Listen to see if music is still playing. 4. Check volume settings to see if browser has paused the music on device. 5. Go back to the tab to for the music to unpause.                                                                                                                                                                |   |
| 16.         | Flip card sound effect                                                                        | Flip card sound effect plays everytime user flips card.                                         | PASS   | Test: Flip cards when clicking on them to hear sound effect. Steps: 1. Click on a card to flip. 2. Listen for audio to play when clicking on card.                                                                                                                                                                                                                                                                                                                              |   |