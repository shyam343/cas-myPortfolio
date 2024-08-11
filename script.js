document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    } else {
        alert(`Thank you, ${name}! Your message has been sent.`);
    }

    document.getElementById('contact-form').reset();
});
