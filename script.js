// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const sidebar = document.querySelector('.sidebar');

if (mobileMenuToggle && sidebar) {
    mobileMenuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            !mobileMenuToggle.contains(e.target) &&
            sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    // Close sidebar on window resize if open
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
        }
    });
}

// Copy Wi-Fi password to clipboard
const copyBtn = document.querySelector('.copy-btn');
const passwordText = document.querySelector('.password-text');
const copyText = document.querySelector('.copy-text');

if (copyBtn && passwordText) {
    copyBtn.addEventListener('click', async () => {
        const password = passwordText.textContent;
        
        try {
            await navigator.clipboard.writeText(password);
            
            // Update button state
            copyBtn.classList.add('copied');
            copyText.textContent = 'Copied!';
            
            // Reset after 2 seconds
            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyText.textContent = 'Copy';
            }, 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = password;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            
            try {
                document.execCommand('copy');
                copyBtn.classList.add('copied');
                copyText.textContent = 'Copied!';
                
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyText.textContent = 'Copy';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy password:', err);
                copyText.textContent = 'Failed';
            }
            
            document.body.removeChild(textArea);
        }
    });
}

// Print button functionality
const printBtn = document.querySelector('.print-btn');

if (printBtn) {
    printBtn.addEventListener('click', () => {
        window.print();
    });
}

// Add to calendar functionality (basic implementation)
const calendarBtn = document.querySelector('.calendar-btn');

if (calendarBtn) {
    calendarBtn.addEventListener('click', () => {
        // Check-in: March 15, 2024
        // Check-out: March 19, 2024
        const checkIn = new Date('2024-03-15');
        const checkOut = new Date('2024-03-19');
        
        // Format dates for calendar URL
        const formatDate = (date) => {
            return date.toISOString().split('T')[0].replace(/-/g, '');
        };
        
        const startDate = formatDate(checkIn);
        const endDate = formatDate(checkOut);
        
        // Google Calendar URL
        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Hotel+Stay+-+The+Grand+Boutique+Hotel&dates=${startDate}/${endDate}&details=Booking+%23HB-2024-78942%0ALuxury+Suite+%E2%80%A2+Ocean+View%0ACheck-in:+3%3A00+PM&location=The+Grand+Boutique+Hotel`;
        
        window.open(googleCalendarUrl, '_blank');
    });
}
