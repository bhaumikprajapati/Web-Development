// script.js
document.getElementById('add-restaurant-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const cuisine = document.getElementById('cuisine').value;
    
    if (name && address && cuisine) {
        alert('Restaurant added successfully!');
        // Here you can add code to actually submit the form data to a server
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});