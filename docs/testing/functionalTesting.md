# Manual Testing


### Functionality


Use this to make table https://www.tablesgenerator.com/markdown_tables




Card Flips (feature) Expected Result: Card flips when clicked on.  Status: PASS      Description: Test: Click on a card to make sure it flips over and adds a ".flipped" class to html from javascript. Steps: 1. Use chrome devtools and use "select element" and hover mouse over flipped card.  2. Check the card div for a class of "flipped". 3. When both cards are flipped and are unmatched, check card visuals for the card to go back to its original state. 



Card unmatched (feature) Expected Result: Cards turn back around.  Status: PASS    Description: Test: Unmatched cards remove card1 and card2 class "flipped" Steps: 1. Open Chrome devtools and "select element". 2. Check the elements on the right of devtools to see if both unmatched cards remove the "flipped" class from both card divs when clicking on 2 unmatched cards.



Card Match (feature) Expected Result: Cards are removed and hidden when matched.  Status: PASS     Description: Test: Both cards are flipped and match each other which then adds the class "hidden" to both matching cards which removes it from the gameboard. Steps: 1. Open Chrome devtools and "select element". 2. Click on 2 cards that match.  3. Check the devtools elements and view the 2 cards that have the class "hidden". 4. Check the cards on the website to see if they are not visable.


Level number tells the user what level they are on and changes colour depending on what level (feature)  Expected Result: Level text updates depending on what level the user is on and changes colour on every 2 levels.  Status: PASS   Description: Test: Select a level and see if "level-number" changes colour depending on the level difficulty. Steps: 1. Click the "level-select" button. 2. Click level 1 and 2 to see if "level-number" is green. 3. click "level-select" button and click levels 3 and 4 to see if "level-number" is yellow. 4. click "level-select" button and click level 5 and 6 to see if "level-number" is red.



Moves text number changes on how many pair of cards are clicked (feature) Expected Result: Moves text updates with each pair the user clicks on.  Status:      Description:



Next level button shows up when you complete level (feature) Expected Result: Button shows up to go to next level.  Status:      Description: 


Level Select (feature) Expected Result:  Clicking on the button will give you options to select and go onto other levels   Status:      Description: 



Reset Level (feature) Expected Result: Current level resets and shuffles again as well as resetting the moves text back to 1.  Status:      Description: 



Max level is complete and sends user to level 1 (feature) Expected Result: Sends the user back to level 1.  Status:      Description: 




How to play (feature) Expected Result: When clicked on it opens up a modal explaining how to play the game.  Status:      Description: 




