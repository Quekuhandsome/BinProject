// Simulated user data
const userData = {
    name: "John Doe",
    email: "john@example.com",
    serviceHistory: [
        { date: "2024-09-01", type: "Waste Pickup" },
        { date: "2024-08-15", type: "Bin Maintenance" }
    ],
    notifications: [
        "Your next scheduled pickup is on September 15, 2024",
        "New recycling guidelines are now available in the Education section"
    ]
};

// Populate user dashboard
function populateDashboard() {
    const userInfo = document.getElementById('userInfo');
    const serviceHistory = document.getElementById('serviceHistory');
    const notifications = document.getElementById('notifications');

    if (userInfo && serviceHistory && notifications) {
        userInfo.innerHTML = `
            <h3>Welcome, ${userData.name}</h3>
            <p>Email: ${userData.email}</p>
        `;

        const historyHtml = userData.serviceHistory.map(service => 
            `<li>${service.date}: ${service.type}</li>`
        ).join('');
        serviceHistory.innerHTML = `
            <h3>Service History</h3>
            <ul>${historyHtml}</ul>
        `;

        const notificationsHtml = userData.notifications.map(notification => 
            `<li>${notification}</li>`
        ).join('');
        notifications.innerHTML = `
            <h3>Notifications</h3>
            <ul>${notificationsHtml}</ul>
        `;
    }
}

// Handle form submissions
function handleFormSubmit(formId, successMessage) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert(successMessage);
            if (formId === 'loginForm') {
                window.location.href = 'dashboard.html';
            }
        });
    }
}

// Initialize Google Map
function initMap() {
    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
        const map = new google.maps.Map(mapContainer, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });

        // Example smart bin locations
        const binLocations = [
            { lat: -34.397, lng: 150.644 },
            { lat: -34.400, lng: 150.650 },
            { lat: -34.395, lng: 150.640 }
        ];

        binLocations.forEach(location => {
            new google.maps.Marker({
                position: location,
                map: map,
                title: 'Smart Bin'
            });
        });
    }
}

// Run initialization functions
document.addEventListener('DOMContentLoaded', function() {
    populateDashboard();
    handleFormSubmit('loginForm', 'Login successful!');
    handleFormSubmit('registerForm', 'Registration successful!');
    handleFormSubmit('scheduleForm', 'Service scheduled successfully!');
    handleFormSubmit('paymentForm', 'Payment processed successfully!');
    
    if (typeof google !== 'undefined') {
        initMap();
    }
});