<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

$config = require __DIR__ . '/config.php';

header("Access-Control-Allow-Origin: " . $config['allowed_origin']);
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

function jsonResponse(int $statusCode, array $data): void
{
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(405, [
        'success' => false,
        'message' => 'Methode nicht erlaubt.'
    ]);
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    jsonResponse(400, [
        'success' => false,
        'message' => 'Ungültige JSON-Daten.'
    ]);
}

$name = trim((string)($data['name'] ?? ''));
$company = trim((string)($data['company'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

$goals = trim((string)($data['goals'] ?? ''));
$existingWebsite = trim((string)($data['existingWebsite'] ?? ''));
$websitePages = trim((string)($data['websitePages'] ?? ''));
$websiteAssets = trim((string)($data['websiteAssets'] ?? ''));
$websiteBudget = trim((string)($data['websiteBudget'] ?? ''));
$websiteTimeframe = trim((string)($data['websiteTimeframe'] ?? ''));

if ($name === '' || $company === '' || $email === '' || $phone === '') {
    jsonResponse(400, [
        'success' => false,
        'message' => 'Pflichtfelder fehlen.'
    ]);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(400, [
        'success' => false,
        'message' => 'Ungültige E-Mail-Adresse.'
    ]);
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = $config['smtp_port'];

    $mail->CharSet = 'UTF-8';
    $mail->isHTML(false);

    $mail->setFrom($config['mail_from'], $config['mail_from_name']);
    $mail->addAddress($config['mail_to']);
    $mail->addReplyTo($email, $name);

    $mail->Subject = 'Neue Website-Anfrage von ' . $name;

    $mail->Body =
        "Neue Website-Anfrage\n\n" .
        "Name: {$name}\n" .
        "Firma: {$company}\n" .
        "E-Mail: {$email}\n" .
        "Telefon: {$phone}\n\n" .
        "Ziele: {$goals}\n" .
        "Bestehende Website: {$existingWebsite}\n" .
        "Gewünschte Seiten: {$websitePages}\n" .
        "Vorhandene Inhalte / Assets: {$websiteAssets}\n" .
        "Budget: {$websiteBudget}\n" .
        "Zeitrahmen: {$websiteTimeframe}\n\n" .
        "Zusatznachricht:\n{$message}\n";

    $mail->send();

    jsonResponse(200, [
        'success' => true,
        'message' => 'E-Mail erfolgreich versendet.'
    ]);

} catch (Exception $e) {
    jsonResponse(500, [
        'success' => false,
        'message' => 'E-Mail konnte nicht versendet werden.'
    ]);
}