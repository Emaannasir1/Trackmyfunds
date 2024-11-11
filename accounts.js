 // Load saved data when page loads
 document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
        const data = JSON.parse(savedData);
        Object.keys(data).forEach(key => {
            const input = document.getElementById(key);
            if (input) input.value = data[key];
        });
    }
});

// Save form data
document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        userName: document.getElementById('userName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        dob: document.getElementById('dob').value,
        presentAddress: document.getElementById('presentAddress').value,
        permanentAddress: document.getElementById('permanentAddress').value,
        city: document.getElementById('city').value,
        postalCode: document.getElementById('postalCode').value,
        country: document.getElementById('country').value
    };

    // Save to localStorage
    localStorage.setItem('profileData', JSON.stringify(formData));
    
    // Show success message
    alert('Profile updated successfully!');
});