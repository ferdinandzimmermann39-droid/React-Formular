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
    $geezeeLogoUrl = '';
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = $config['smtp_port'];

    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);

    $geezeeLogoPath = __DIR__ . '/geezeelogo.png';

    if (file_exists($geezeeLogoPath)) {
        $mail->addEmbeddedImage($geezeeLogoPath, 'geezee_logo');
    }

    $mail->setFrom($config['mail_from'], $config['mail_from_name']);
    $mail->addAddress($config['mail_to']);
    $mail->addReplyTo($email, $name);

    $mail->Subject = 'Neue Website-Anfrage von ' . $name;
    $mail->Body = '
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <title>Neue Website-Anfrage</title>
    </head>
    <body style="margin:0; padding:0; background:#f5f7f6; font-family:Arial, Helvetica, sans-serif; color:#e5e7eb;">
        <div style="max-width:720px; margin:0 auto; padding:22px 10px;">

            <div style="background:#101410; border-radius:22px; overflow:hidden; border:1px solid #d3d3d3; box-shadow:0 16px 45px rgba(0,0,0,0.16);">

                <div style="background:#f8faf9; padding:24px 20px 26px; border-bottom:5px solid #1bb127;">

                    <div style="text-align:center; margin-bottom:22px;">
                        <img src="cid:geezee_logo" alt="GeeZee" style="max-width:220px; width:100%; height:auto; display:inline-block;">
                    </div>

                    <div style="display:inline-block; padding:7px 12px; border-radius:999px; background:rgba(34,199,130,0.16); color:#0b7a4b; font-size:12px; font-weight:700; letter-spacing:0.3px;">
                        Neue Anfrage
                    </div>

                    <h1 style="margin:16px 0 0; color:#050705; font-size:23px; line-height:1.25;">
                        Neue Website-Anfrage
                    </h1>

                    <p style="margin:8px 0 0; color:#33443a; font-size:13px; line-height:1.55;">
                        Eine neue Anfrage ist eingegangen und wartet auf Rückmeldung.
                    </p>
                </div>

                <div style="padding:24px 20px; background:#101410; color:#e5e7eb;">

                    <h2 style="margin:0 0 12px; font-size:16px; color:#ffffff;">
                        Kontaktdaten
                    </h2>

                    <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
                        <tr>
                            <td style="padding:8px 0; color:#9ca3af; width:135px; font-size:13px;">Name</td>
                            <td style="padding:8px 0; color:#f9fafb; font-weight:700; font-size:13px;">' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . '</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0; color:#9ca3af; font-size:13px;">Firma</td>
                            <td style="padding:8px 0; color:#f9fafb; font-weight:700; font-size:13px;">' . htmlspecialchars($company, ENT_QUOTES, 'UTF-8') . '</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0; color:#9ca3af; font-size:13px;">E-Mail</td>
                            <td style="padding:8px 0; color:#f9fafb; font-size:13px;">
                                <a href="mailto:' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '" style="color:#22c782; font-weight:700; text-decoration:none;">
                                    ' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0; color:#9ca3af; font-size:13px;">Telefon</td>
                            <td style="padding:8px 0; color:#f9fafb; font-size:13px;">
                                <a href="tel:' . htmlspecialchars($phone, ENT_QUOTES, 'UTF-8') . '" style="color:#22c782; font-weight:700; text-decoration:none;">
                                    ' . htmlspecialchars($phone, ENT_QUOTES, 'UTF-8') . '
                                </a>
                            </td>
                        </tr>
                    </table>

                    <div style="height:1px; background:#24382c; margin:0 0 24px;"></div>

                    <h2 style="margin:0 0 12px; font-size:16px; color:#ffffff;">
                        Projektangaben
                    </h2>

                    <table style="width:100%; border-collapse:collapse;">
                        <tr>
                            <td style="padding:8px 0; color:#9ca3af; width:135px; font-size:13px;">Ziele</td>
                            <td style="padding:8px 0; color:#e5e7eb; font-size:13px;">' . nl2br(htmlspecialchars($goals, ENT_QUOTES, 'UTF-8')) . '</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0; color:#9ca3af; font-size:13px;">Bestehende Website</td>
                            <td style="padding:8px 0; color:#e5e7eb; font-size:13px;">' . htmlspecialchars($existingWebsite, ENT_QUOTES, 'UTF-8') . '</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0; color:#9ca3af; font-size:13px;">Gewünschte Seiten</td>
                            <td style="padding:8px 0; color:#e5e7eb; font-size:13px;">' . nl2br(htmlspecialchars($websitePages, ENT_QUOTES, 'UTF-8')) . '</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0; color:#9ca3af; font-size:13px;">Inhalte / Assets</td>
                            <td style="padding:8px 0; color:#e5e7eb; font-size:13px;">' . nl2br(htmlspecialchars($websiteAssets, ENT_QUOTES, 'UTF-8')) . '</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0; color:#9ca3af; font-size:13px;">Budget</td>
                            <td style="padding:8px 0; color:#f9fafb; font-weight:700; font-size:13px;">' . htmlspecialchars($websiteBudget, ENT_QUOTES, 'UTF-8') . '</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0; color:#9ca3af; font-size:13px;">Zeitrahmen</td>
                            <td style="padding:8px 0; color:#f9fafb; font-weight:700; font-size:13px;">' . htmlspecialchars($websiteTimeframe, ENT_QUOTES, 'UTF-8') . '</td>
                        </tr>
                    </table>

                    <div style="margin-top:24px; padding:16px; background:#17251c; border:1px solid #2d5a3d; border-left:5px solid #1caf41; border-radius:15px;">
                        <h2 style="margin:0 0 10px; font-size:16px; color:#ffffff;">
                            Zusatznachricht
                        </h2>
                        <p style="margin:0; line-height:1.6; color:#d1d5db; font-size:13px;">
                            ' . nl2br(htmlspecialchars($message ?: "Keine Zusatznachricht angegeben.", ENT_QUOTES, 'UTF-8')) . '
                        </p>
                    </div>

                </div>

                <div style="padding:16px 20px; background:#f8faf9; border-top:1px solid #d6e8dc; color:#33443a; font-size:11px; line-height:1.5;">
                    <div style="color:#1f2a22;">
                        Automatisch gesendet über das Anfrageformular.
                    </div>
                    <div style="margin-top:4px; color:#5d6b62;">
                        Kontaktformular von Ferdinand Zimmermann ;)
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    ';

    $mail->AltBody =
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