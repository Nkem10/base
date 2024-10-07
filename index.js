document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.style.display = 'none';

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value) {
        errorMessage.textContent = 'Email address cannot be empty.';
        errorMessage.style.display = 'block';
    } else if (!emailPattern.test(emailInput.value)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
    } else {
        // Proceed with form submission logic
        alert('Thank you for subscribing!');
        emailInput.value = ''; // Clear the input field
    }
});
