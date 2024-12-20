function submitOnlyPhoneNumber(event){
    event.preventDefault(); // preventing page to reload

    const element = document.getElementById("phonenumber1"); 
    const phone = element.value; 
    
    console.log(phone);
    
    // Make a POST request to the "api/submit" endpoint
    fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            "phone": phone
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Process the response if it's successful
        }
        throw new Error('Please check the number');
    })
    .then(response => {
        console.log('Success:', response); // Handling the success response
        alert(response.message);
    })
    .catch(error => {
        console.error('Error:', error); // Handling errors
        alert(error);
    });
}