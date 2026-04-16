# Tic Tac Toe Game

A modern, interactive Tic Tac Toe game with a sleek neon-themed user interface. Built with HTML, CSS, and JavaScript.

## Features

- **Classic Gameplay**: Play the traditional Tic Tac Toe game with X and O players
- **Turn Management**: Automatic turn switching between players
- **Win Detection**: Automatically detects winning patterns and announces the winner
- **Draw Detection**: Identifies when the game ends in a draw
- **Modern UI**: Neon-styled interface with smooth animations and glowing effects
- **Responsive Design**: Works seamlessly across different screen sizes
- **Game Controls**:
  - Reset Game button to start a new game
  - New Game button to restart after winning/drawing

## Game Rules

1. The game is played on a 3x3 grid
2. Player O goes first
3. Players alternate turns, marking empty cells with their symbol (O or X)
4. First player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins
5. If all 9 cells are filled without a winner, the game ends in a draw

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with:
  - CSS Grid for game layout
  - CSS Variables for theme management
  - Animations and transitions
  - Neon glow effects
  - Animated background grid
- **Vanilla JavaScript**: Game logic without any dependencies

## Project Structure

```
Tic-Tac-Toe Game/
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # Game logic and interactivity
├── images/         # Image assets folder
└── README.md       # Project documentation
```

## Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone or download this project
2. Open `index.html` in your web browser
3. Start playing!

## How to Play

1. The game automatically starts with Player O
2. Click on an empty cell to place your mark
3. Players alternate turns automatically
4. The game announces the winner when three in a row is achieved
5. Click "New Game" or "Reset Game" to start over

## Styling Highlights

- **Neon Color Scheme**: Cyan, Pink, and Yellow neon colors
- **Dark Theme**: Deep dark background with glowing UI elements
- **Animated Grid Background**: Dynamic background animation for visual appeal
- **Hover Effects**: Interactive feedback on buttons
- **Win Animations**: Special effects when a player wins

## Game Logic

### Core Functions

- `resetGame()`: Resets the game state and clears the board
- `checkWinner()`: Checks all win patterns to determine if there's a winner
- `showWinner()`: Displays the winner message and disables further moves
- `gameDraw()`: Handles draw game scenarios
- `disableBoxes()`: Prevents further moves after game ends
- `enableBoxes()`: Resets all boxes for a new game

### Win Patterns

The game checks for 8 possible winning patterns:

- 3 horizontal rows
- 3 vertical columns
- 2 diagonal lines

## Responsive Features

The game board adapts to different screen sizes while maintaining playability and aesthetics.

## Future Enhancements

Potential features for future versions:

- Difficulty levels with AI opponent
- Score tracking across multiple games
- Game statistics and history
- Sound effects and feedback
- Two-player online multiplayer
- Mobile touch optimization

## License

This project is open source and available for personal and educational use.

## Author

Rafay Ali

---

**Happy Coding!**

**Enjoy playing!**
