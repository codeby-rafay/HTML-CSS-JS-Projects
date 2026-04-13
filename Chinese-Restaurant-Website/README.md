# David Chu's China Bistro

A responsive, dynamic restaurant website for David Chu's China Bistro featuring a comprehensive menu system with categories and items loaded dynamically from a Firebase database.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [File Descriptions](#file-descriptions)
- [Menu Categories](#menu-categories)

## Overview

David Chu's China Bistro is a full-stack restaurant website that showcases authentic Chinese cuisine. The site features a responsive design that works seamlessly across desktop, tablet, and mobile devices. The menu is dynamically loaded from a Firebase real-time database, allowing for easy updates without modifying the codebase.

## Features

- **Responsive Design**: Fully responsive layout using Bootstrap framework
- **Dynamic Menu Loading**: Restaurant menu categories and items are fetched from Firebase database via AJAX
- **Mobile-Friendly Navigation**: Collapsible navbar for mobile devices
- **Category-Based Menu**: Menu items organized by categories (e.g., appetizers, soups, entrees, etc.)
- **Kosher Certified**: Display of kosher certification status
- **Loading States**: Visual feedback with loading animations while fetching data
- **Cross-Browser Compatible**: Works on all modern browsers
- **Professional Typography**: Google Fonts integration (Oxygen and Lora)

## Project Structure

```
Chinese Restaurant Website/
├── index.html                    # Main HTML page
├── css/
│   ├── bootstrap.min.css        # Bootstrap framework (minified)
│   ├── bootstrap.css            # Bootstrap framework
│   └── styles.css               # Custom styling
├── js/
│   ├── jquery-2.1.4.min.js      # jQuery library
│   ├── bootstrap.min.js         # Bootstrap JavaScript (minified)
│   ├── bootstrap.js             # Bootstrap JavaScript
│   ├── ajax-utils.js            # AJAX utility functions
│   ├── npm.js                   # NPM utilities
│   └── script.js                # Main application script
├── snippets/
│   ├── home-snippet.html        # Home page content template
│   ├── categories-title-snippet.html    # Categories section title
│   ├── category-snippet.html            # Category item template
│   ├── menu-items-title.html            # Menu items section title
│   └── menu-item.html                   # Individual menu item template
├── images/
│   ├── menu/                    # Menu item images organized by category
│   │   ├── A/ through VG/       # Category folders (A-VG)
│   │   └── SO/                  # Special Orders with subcategories
│   │       ├── L/, NF/, NL/, NS/
│   │       └── PF/
│   ├── ajax-loader.gif          # Loading animation
│   ├── star-k-logo.png          # Kosher certification logo
│   └── [Other assets]
└── fonts/                        # Custom fonts directory
```

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Styling and responsive design
- **JavaScript (ES5)**: Dynamic functionality and DOM manipulation
- **jQuery 2.1.4**: Simplified DOM manipulation and AJAX requests
- **Bootstrap 3**: Responsive framework and UI components
- **Firebase Realtime Database**: Remote data storage for menu items
- **Google Fonts**: External typography (Oxygen, Lora)

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for loading Bootstrap, jQuery, Google Fonts, and Firebase data)

### Installation

1. **Clone or download** the project folder
   ```bash
   git clone <repository-url>
   ```

2. **Navigate** to the project directory
   ```bash
   cd Chinese\ Restaurant\ Website
   ```

3. **Open in a browser** - Simply open `index.html` in your web browser
   - Double-click `index.html`, or
   - Right-click and select "Open with" > Browser, or
   - Drag and drop into your browser

### Running Locally

For best results, serve the project through a local web server:

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Usage

### Viewing the Home Page
- Open the website and the home page content automatically loads
- The home page displays restaurant information and a welcome message

### Browsing the Menu
1. Click the **"Menu"** button in the navigation bar
2. Menu categories are fetched from the Firebase database
3. Select a category to view all items in that category
4. Each menu item displays:
   - Item name
   - Description
   - Price
   - Thumbnail image

### Navigation
- **Home**: Returns to the home page
- **Menu**: Loads all menu categories
- **Responsive Toggle**: On mobile devices (< 768px), use the hamburger menu to toggle navigation

## File Descriptions

### Core Files

**index.html**
- Main entry point
- Contains header with navigation
- Navigation bar with responsive toggle
- Main content area where snippets are inserted
- Links all CSS and JavaScript files
- Includes Bootstrap and jQuery CDN references

**js/script.js**
- Main application logic
- `dc` object contains all functions for the app
- Loads menu categories and items dynamically
- Handles navigation and DOM manipulation
- Inserts HTML snippets into the page
- Manages active navigation states

**js/ajax-utils.js**
- Contains AJAX utility functions
- Handles HTTP requests to Firebase
- Manages data loading and error handling

**css/styles.css**
- Custom styling for the website
- Typography and layout customizations
- Responsive design adjustments
- Menu and category styling

### HTML Snippets

**snippets/home-snippet.html**
- Welcome and restaurant information displayed on home page

**snippets/categories-title-snippet.html**
- Title header for the menu categories section

**snippets/category-snippet.html**
- Template for individual category display
- Placeholder: `{{name}}` - category name

**snippets/menu-items-title.html**
- Title header for individual menu items

**snippets/menu-item.html**
- Template for displaying individual menu items
- Placeholders: `{{name}}`, `{{description}}`, `{{price}}`, `{{image}}`

## Menu Categories

The menu includes various categories stored in the Firebase database:

- **A**: Appetizers
- **B**: Beverages
- **C**: Combination Rice Plates
- **CM**: Chow Mein Dishes
- **CSR**: Chow See Fun Rice
- **CU**: Curry Dishes
- **D**: Dumplings
- **DK**: Duck Dishes
- **DS**: Desserts
- **F**: Fish Dishes
- **FR**: Fried Rice
- **FY**: Fried Noodles (Chow Mein)
- **SO**: Special Orders & Combinations
  - L: Large
  - NF: Non-Fried
  - NL: Non-Fried Large
  - NS: Non-Fried Small
  - PF: Partly Fried
- **SP**: Soups
- **SR**: Shrimp Rice
- **SS**: Shrimp Sizzling Plate
- **T**: Tofu Dishes
- **V**: Vegetable Rice
- **VG**: Vegetable Combination

## External Resources

- **Firebase Database**: Menu data is fetched from Firebase Realtime Database
- **Bootstrap CDN**: Framework and styling
- **jQuery CDN**: JavaScript library
- **Google Fonts API**: Oxygen and Lora fonts

## Responsive Design Breakpoints

- **Mobile** (< 768px): Single-column layout with collapsible navigation
- **Tablet** (768px - 991px): Optimized two-column layout
- **Desktop** (≥ 992px): Full layout with sidebar navigation

## Customization

To customize this project:

1. **Menu Items**: Update items in the Firebase database
2. **Styling**: Modify `css/styles.css`
3. **Content**: Edit HTML snippets in the `snippets/` folder
4. **Images**: Replace menu item images in `images/menu/` folders
5. **Colors/Fonts**: Update `css/styles.css` or add custom CSS

## Troubleshooting

### Menu not loading
- Check internet connection
- Verify Firebase database URL is correct
- Check browser console for error messages (F12 > Console)

### Images not displaying
- Ensure images are in the correct folder structure
- Check image file names and extensions
- Verify browser's cache is cleared if updating images

### Styling issues
- Clear browser cache
- Ensure all CSS files are loaded (check Network tab in DevTools)
- Test in a different browser

## Author

As part of HTML, CSS, and JavaScript learning projects.

## Author

Rafay Ali

---

**Happy Coding!**
