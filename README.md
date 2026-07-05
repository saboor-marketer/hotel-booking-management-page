# Hotel Booking Confirmation Page

A responsive hotel booking confirmation page featuring overlapping cards, a branded sidebar, and modern UI design patterns.

## Features

- **Responsive Design** - Adapts seamlessly to mobile, tablet, and desktop screens
- **Branded Sidebar** - Fixed navigation sidebar with logo and menu links
- **Overlapping Cards Layout** - Modern card-based design for booking information
- **Interactive Elements** - Hover and focus states on all interactive components
- **Mobile Menu** - Collapsible sidebar with hamburger menu toggle on smaller screens
- **Wi-Fi Copy Button** - One-click copy of Wi-Fi password to clipboard
- **Print Functionality** - Clean print view optimized for receipts
- **Add to Calendar** - Generates Google Calendar event from stay dates
- **Card Animations** - Smooth hover effects with fan-out animation
- **Accessibility** - ARIA labels and keyboard navigation support

## Project Structure

```
hotel-booking-confirmation/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with responsive design
├── script.js           # Interactive functionality
└── README.md           # Project documentation
```

## Setup Instructions

1. Clone or download the project files
2. Open `index.html` in a web browser
3. No build process or dependencies required

## Usage

### Viewing the Page
Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

### Interactive Features

- **Mobile Menu**: On screens smaller than 768px, click the hamburger menu icon to toggle the sidebar
- **Copy Wi-Fi Password**: Click the "Copy" button next to the Wi-Fi password to copy it to your clipboard
- **Print Receipt**: Click the print icon in the Payment Summary card to open the print dialog
- **Add to Calendar**: Click the calendar icon in the Stay Dates card to add your stay to Google Calendar

### Responsive Breakpoints

- **Desktop**: > 1024px - Full sidebar, 2-column card layout
- **Tablet**: 768px - 1024px - Single column cards
- **Mobile**: < 768px - Collapsible sidebar, stacked layout

## Customization

### Colors
Edit the CSS variables in `styles.css` to customize the color scheme:

```css
:root {
    --primary: #1E293B;
    --accent: #6366F1;
    --success: #10B981;
    /* ... more variables */
}
```

### Content
Update the booking details in `index.html`:
- Hotel name and room type
- Check-in/check-out dates
- Guest information
- Wi-Fi credentials
- Payment details

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript** - No frameworks or dependencies

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## License

This project is open source and available for educational purposes.
