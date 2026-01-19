<?php
// Simple optional mail handler (requires server mail configured).
// If you're hosting static only, you can ignore this file.

header('Content-Type: application/json; charset=utf-8');

$name  = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$msg   = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $msg === '') {
  http_response_code(400);
  echo json_encode(['ok'=>false,'error'=>'Missing fields']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok'=>false,'error'=>'Invalid email']);
  exit;
}

$to = "Roaasultan@gmail.com"; // change if needed
$subject = "Portfolio Contact: " . $name;
$body = "Name: $name\nEmail: $email\n\nMessage:\n$msg\n";
$headers = "From: noreply@yourdomain.com\r\nReply-To: $email\r\n";

$sent = @mail($to, $subject, $body, $headers);

echo json_encode(['ok'=>$sent]);
