document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('first_name', document.getElementById('first_name').value);
    formData.append('last_name', document.getElementById('last_name').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('business_mail', document.getElementById('business_mail').value);
    formData.append('company_name', document.getElementById('company_name').value);
    formData.append('subject', document.getElementById('subject').value);
    formData.append('message', document.getElementById('message').value);
    const attachment = document.getElementById('attachment').files[0];
    if (attachment) {
      formData.append('attachment', attachment);
    }
  
    // AJAX request to send email
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'send-email.php', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert('Email sent successfully!');
        document.getElementById('contact-form').reset();
      } else {
        alert('Failed to send email. Please try again later.');
      }
    };
    xhr.send(formData);
  });
  

