function showAlert(event) {
    event.preventDefault(); // Prevents the form from submitting
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    
    if (!fname || !lname) {
        alert("Please fill out the form.");
    } else {
        alert("Thank you for your feedback " + fname +" "+ lname);
    }
}