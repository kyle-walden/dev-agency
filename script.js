// Template preview functionality
const templatePreviews = {
    restaurant: `
        <div style="padding: 20px; font-family: Arial, sans-serif;">
            <h2 style="color: #e74c3c; text-align: center;">Bella Vista Restaurant</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                <div>
                    <h3>Our Menu</h3>
                    <p>Authentic Italian cuisine made with fresh ingredients</p>
                    <ul>
                        <li>Pasta Carbonara - R120</li>
                        <li>Margherita Pizza - R95</li>
                        <li>Tiramisu - R65</li>
                    </ul>
                </div>
                <div>
                    <h3>Opening Hours</h3>
                    <p>Monday - Sunday: 11:00 - 22:00</p>
                    <h3>Contact</h3>
                    <p>📞 011 123 4567<br>📍 123 Main St, Johannesburg</p>
                </div>
            </div>
        </div>
    `,
    guesthouse: `
        <div style="padding: 20px; font-family: Arial, sans-serif;">
            <h2 style="color: #e74c3c; text-align: center;">Mountain View Guesthouse</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                <div>
                    <h3>Our Rooms</h3>
                    <p>Comfortable accommodation with stunning views</p>
                    <ul>
                        <li>Standard Room - R800/night</li>
                        <li>Deluxe Room - R1200/night</li>
                        <li>Family Suite - R1800/night</li>
                    </ul>
                </div>
                <div>
                    <h3>Amenities</h3>
                    <ul>
                        <li>Free WiFi</li>
                        <li>Swimming Pool</li>
                        <li>Breakfast Included</li>
                        <li>Parking Available</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    gym: `
        <div style="padding: 20px; font-family: Arial, sans-serif;">
            <h2 style="color: #e74c3c; text-align: center;">FitLife Gym</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                <div>
                    <h3>Membership Plans</h3>
                    <ul>
                        <li>Basic - R299/month</li>
                        <li>Premium - R499/month</li>
                        <li>VIP - R799/month</li>
                    </ul>
                </div>
                <div>
                    <h3>Facilities</h3>
                    <ul>
                        <li>State-of-the-art equipment</li>
                        <li>Group fitness classes</li>
                        <li>Personal training</li>
                        <li>Locker rooms & showers</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    salon: `
        <div style="padding: 20px; font-family: Arial, sans-serif;">
            <h2 style="color: #e74c3c; text-align: center;">Glamour Beauty Salon</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                <div>
                    <h3>Our Services</h3>
                    <ul>
                        <li>Haircut & Style - R150</li>
                        <li>Hair Color - R350</li>
                        <li>Manicure - R120</li>
                        <li>Facial Treatment - R200</li>
                    </ul>
                </div>
                <div>
                    <h3>Book Appointment</h3>
                    <p>Call us or book online</p>
                    <p>📞 011 987 6543<br>💻 www.glamoursalon.co.za</p>
                    <p>Open: Tue-Sat 9:00-18:00</p>
                </div>
            </div>
        </div>
    `,
    contractor: `
        <div style="padding: 20px; font-family: Arial, sans-serif;">
            <h2 style="color: #e74c3c; text-align: center;">BuildRight Contractors</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                <div>
                    <h3>Our Services</h3>
                    <ul>
                        <li>Home Renovations</li>
                        <li>Kitchen & Bathroom</li>
                        <li>Roofing & Gutters</li>
                        <li>Painting & Tiling</li>
                    </ul>
                </div>
                <div>
                    <h3>Why Choose Us</h3>
                    <ul>
                        <li>20+ years experience</li>
                        <li>Licensed & insured</li>
                        <li>Free quotes</li>
                        <li>Quality guarantee</li>
                    </ul>
                    <p>📞 011 555 0123</p>
                </div>
            </div>
        </div>
    `
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Template preview functionality
    const templateCards = document.querySelectorAll('.template-card');
    const modal = document.getElementById('template-modal');
    const closeModal = document.querySelector('.close');
    const previewContainer = document.getElementById('template-preview');

    templateCards.forEach(card => {
        card.addEventListener('click', function() {
            const template = this.getAttribute('data-template');
            previewContainer.innerHTML = templatePreviews[template];
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});