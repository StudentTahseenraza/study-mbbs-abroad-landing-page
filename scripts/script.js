document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    const country = document.querySelector('select').value;

    if (!name || !email || !phone || country === "Select Country Preference") {
        alert("Please fill all fields correctly.");
    } else {
        alert("Form submitted successfully!");
    }
});