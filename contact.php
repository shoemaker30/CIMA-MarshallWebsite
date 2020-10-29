<?php

#Receive user input
$email_address = $_POST['contact-email'];
$feedback = $_POST['contact-message'];



#Send email
$headers = "From: $email_address";
$sent = mail('cimamessaging@outlook.com', 'Feedback Form Submission', $feedback, $headers);

#Thank user or notify them of a problem
if ($sent) {

?><html>
<head>
<title>Thank You</title>
</head>
<body>
<h1>Thank You</h1>
<p>Thank you for your feedback.</p>
</body>
</html>
<?php

} else {

?><html>
<head>
<title>Something went wrong</title>
</head>
<body>
<h1>Something went wrong</h1>
<p>We could not send your feedback. Please try again.</p>
</body>
</html>
<?php
}
?>