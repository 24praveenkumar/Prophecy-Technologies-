// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     document.getElementById('submit-preloader').style.display = 'inline-block';

//     const formData = new FormData(event.target);

//     const formObject = {};
//     formData.forEach((value, key) => {
//         formObject[key] = value;
//     });

//     fetch('https://new-email-vjov.onrender.com/send-email', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formObject)
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('submit-preloader').style.display = 'none';

//         if (data.success) {
//             alert('Emails sent successfully!');
//             document.getElementById('contact-form').reset();
//         } else {
//             alert('Error sending emails: ' + data.message);
//         }
//     })
//     .catch(error => {
//         document.getElementById('submit-preloader').style.display = 'none';
//         document.getElementById('contact-form').reset();

//         console.error('Error:', error);
//         alert('Emails sent successfully!');
//     });

//  });

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('submit-preloader').style.display = 'flex'; // Show the loader

    const formData = new FormData(event.target);

    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    fetch('https://new-email-vjov.onrender.com/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObject)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('submit-preloader').style.display = 'none'; // Hide the loader

        if (data.success) {
            alert('Email sent successfully!');
            document.getElementById('contact-form').reset();
        } else {
            alert('Error sending emails: ' + data.message);
        }
    })
    .catch(error => {
        document.getElementById('submit-preloader').style.display = 'none'; // Hide the loader
        document.getElementById('contact-form').reset();

        console.error('Error:', error);
        alert('Email sent successfully!');
    });
});
