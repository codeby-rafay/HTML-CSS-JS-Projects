# Rock Paper Scissor Game

A fun and interactive Rock-Paper-Scissors game built with HTML, CSS, and JavaScript. Play against the computer and see if you can outsmart it!

## About This Project

This is a classic Rock-Paper-Scissors game where you compete against the computer. The game features real-time score tracking, visual feedback for wins/losses/draws, and an intuitive user interface.

## Features

- **Interactive Gameplay**: Click on rock, paper, or scissors to make your move
- **Real-time Score Tracking**: Keep track of your wins and the computer's wins
- **Visual Feedback**: 
  - Green message for wins
  - Red message for losses
  - Dark blue message for draws
- **Random Computer Moves**: The computer generates random moves to keep the game unpredictable
- **Responsive Design**: Play on any device
- **Easy to Understand**: Simple and intuitive interface

## How to Play

1. The game features three choices: **Rock**, **Paper**, and **Scissors**
2. Click on your choice to make your move
3. The computer randomly selects its move
4. The result is displayed with:
   - **Your Win**: You beat the computer (message in green)
   - **Your Loss**: Computer beats you (message in red)
   - **Draw**: Both chose the same option (message in dark blue)
5. The scoreboard updates automatically
6. Play as many rounds as you want!

## Game Rules

The classic Rock-Paper-Scissors rules apply:
- **Rock** beats **Scissors** ✋
- **Scissors** beats **Paper** ✂️
- **Paper** beats **Rock** 📄
- If both players choose the same, it's a **Draw**

## Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Game logic and interactivity
- **DOM Manipulation**: Real-time UI updates

## Project Structure

```
Rock-Paper-Scissor Game/
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # Game logic and interactivity
├── README.md           # This file
└── images/
    ├── rock.png        # Rock image
    ├── paper.png       # Paper image
    └── scissors.png    # Scissors image
```

## How to Run

1. **Download or Clone** the project to your computer
2. **Navigate** to the project folder
3. **Open** `index.html` in your web browser
4. **Start Playing!** Click on any choice to begin

### Quick Start
Simply double-click `index.html` or right-click and select "Open with" → your preferred browser.

## Code Overview

### Key JavaScript Functions

- **`genCompChoice()`**: Generates a random choice for the computer
- **`playGame(userChoice)`**: Main game logic that compares user and computer choices
- **`showWinner(userWin, userChoice, compChoice)`**: Displays the result and updates scores
- **`drawGame()`**: Handles draw game scenarios

### Event Listeners
- Click listeners on each choice element trigger the `playGame()` function
- Scores update in real-time based on game outcomes

## Customization

You can easily customize this game by:
- Editing `style.css` to change colors, fonts, and layout
- Adding sound effects by including audio elements in `script.js`
- Creating themed versions with different images
- Adding a reset button to clear scores
- Implementing difficulty levels

## Future Enhancements

- Add difficulty levels (Easy, Medium, Hard)
- Include sound effects for wins, losses, and draws
- Add animations for gameplay
- Implement local storage to save high scores
- Add a multiplayer mode
- Create themed versions (emojis, animations, etc.)

## License

This project is open source and available for educational and learning purpose.

## Purpose

Created as a learning project for web development. Feel free to modify and improve it!

## Author

Rafay Ali

**Happy Coding!**

---

**Enjoy playing!**