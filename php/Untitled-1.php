<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["email"];
    $companyName = $_POST["companyName"];
    $additionalInfo = $_POST["additionalInfo"];
    
    // Create PDF content (replace this with your actual PDF generation logic)
    $pdfContent = "Hello $firstName $lastName,\n\nThank you for your submission. Here is your PDF attachment.";
    
    // Send email with PDF attachment
    $to = $email;
    $subject = "Form Submission Confirmation";
    $message = "Dear $firstName $lastName,\n\nThank you for contacting us. We appreciate your interest.\n\nAdditional Info: $additionalInfo";
    $headers = "From: your-email@example.com"; // Replace with your actual email

    // Attach PDF file
    $pdfAttachment = chunk_split(base64_encode($pdfContent));
    $attachment = "Content-Type: application/pdf; name=\"submission.pdf\"\r\n";
    $attachment .= "Content-Transfer-Encoding: base64\r\n";
    $attachment .= "Content-Disposition: attachment\r\n\r\n";
    $attachment .= $pdfAttachment . "\r\n\r\n";

    // Send email with attachment
    if (mail($to, $subject, $message, $headers . $attachment)) {
        echo "Email sent successfully with PDF attachment.";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Invalid request.";
}
?>
