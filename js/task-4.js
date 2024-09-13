let form = document.querySelector('.login-form');
let submitData = {};

form.addEventListener('submit', (e) => {
    let email = form.elements.email.value;
    let password = form.elements.password.value;

    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
        submitData.email = email;
        submitData.password = password;
        // testing
        console.log(`Form submitted. Transfer data: login: ${submitData.email} pwd: ${submitData.password}.`);
        form.reset();
    } else {
        alert('All form fields must be filled in');
    }
});
