# Temperature Converter

A simple, elegant web application to convert temperature values from Celsius to Fahrenheit. Built with vanilla HTML, CSS, and JavaScript.

## Features

- **Simple & Intuitive UI** - Clean interface with easy-to-use input field
- **Real-time Conversion** - Convert Celsius to Fahrenheit with a single click
- **Input Validation** - Alerts user if invalid input is provided
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Modern Styling** - Beautiful gradient background and smooth animations
- **Formatted Output** - Results displayed with precision to 2 decimal places

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling with gradients, animations, and responsive design
- **JavaScript (Vanilla)** - Core conversion logic and interactivity

## Project Structure

```
Temprature-Converter/
├── index.html          # Main HTML file with form structure
├── style.css           # Styling and responsive design
├── script.js           # Conversion logic and DOM manipulation
└── README.md           # Project documentation
```

## How to Use

1. Open `index.html` in your web browser
2. Enter a temperature value in Celsius in the input field
3. Click the **"Convert to Fahrenheit"** button
4. The converted temperature will be displayed below in Fahrenheit

### Example

- Input: `25` → Output: `25 °C = 77 °F`
- Input: `0` → Output: `0 °C = 32 °F`
- Input: `-40` → Output: `-40 °C = -40 °F`

## Installation

No installation required! This is a standalone web application.

1. Clone or download the project files
2. Navigate to the project folder
3. Open `index.html` in any modern web browser

## Browser Compatibility

Works on all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Conversion Formula

The application uses the standard Celsius to Fahrenheit conversion formula:

```
°F = (°C × 9/5) + 32
```

## Features in Detail

### Input Validation

- The application validates user input before conversion
- Displays an alert if non-numeric values are entered
- Handles decimal values correctly

### Responsive Design

- Optimized for screens of all sizes
- Adapts layout and font sizes for mobile devices
- Maintains usability on small screens

### User Experience

- Hover effects on buttons for better feedback
- Smooth transitions and animations
- Clear, readable output formatting
- Visual focus indicators on input fields

## Potential Enhancements

- [ ] Add Fahrenheit to Celsius conversion
- [ ] Add Kelvin conversion support
- [ ] Implement conversion history
- [ ] Add keyboard support (Enter key to convert)
- [ ] Add theme switcher (dark/light mode)
- [ ] Save conversion preferences to localStorage
- [ ] Add more temperature scales (Rankine, Réaumur)

## License

Free to use and modify for personal and educational purposes.

## Author

Rafay Ali.

---

**Happy Coding!**
