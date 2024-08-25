document.getElementById('personal-info-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        dob: document.getElementById('dob').value
    };

    console.log('Form Data Submitted:', formData);

    // Here you can add code to send the form data to your server or handle it as needed
    alert('Form submitted successfully!');
});
