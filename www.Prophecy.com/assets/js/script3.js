// document.getElementById('application-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const formData = new FormData(event.target);

//     fetch('https://new-email-vjov.onrender.com/submit-application', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => {
//         if (!response.ok) {
//             return response.text().then(text => { throw new Error(text) });
//         }
//         // alert('Application submitted successfully!');
//     })
//     .then(data => {
//         if (data.success) {
//             alert('Application submitted successfully!');
//             document.getElementById('application-form').reset(); // Reset the form
//         } else {
//             alert('Error: ' + data.message);
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         document.getElementById('application-form').reset();
//         alert('Application submitted successfully!');
//     });
// });


document.getElementById('application-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const loader = document.getElementById('loader');

    loader.style.display = 'block'; // Show the loader

    fetch('https://new-email-vjov.onrender.com/submit-application', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        loader.style.display = 'none'; // Hide the loader

        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.json(); // Convert response to JSON
    })
    .then(data => {
        if (data.success) {
            alert('Application submitted successfully!');
            document.getElementById('application-form').reset(); // Reset the form
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(error => {
        loader.style.display = 'none'; // Hide the loader
        console.error('Error:', error);
        alert('An error occurred while submitting the application.'); // Change alert message for error
    });
});




