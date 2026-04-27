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
                        Neue Logo-Anfrage
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
                            <td style="padding:8px 0; color:#9ca3af; font-size:13px;">Firmabeschreibung</td>
                            <td style="padding:8px 0; color:#f9fafb; font-weight:700; font-size:13px;">' . htmlspecialchars($companydesc, ENT_QUOTES, 'UTF-8') . '</td>
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
                            <td style="padding:8px 0; color:#9ca3af; width:135px; font-size:13px;">Neu / Überarbeiten</td>
                            <td style="padding:8px 0; color:#e5e7eb; font-size:13px;">' . nl2br(htmlspecialchars($logooptions, ENT_QUOTES, 'UTF-8')) . '</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0; color:#9ca3af; font-size:13px;">Gewünschter Style</td>
                            <td style="padding:8px 0; color:#e5e7eb; font-size:13px;">' . htmlspecialchars($logostyle, ENT_QUOTES, 'UTF-8') . '</td>
                        </tr>
                    </table>

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
    "Neue Logo Anfrage von {$name} \n" . 
    "Email Adresse: {$email} \n" . 
    "Telefon Nummer: {$phone} \n" . 
    "Unternehmen: {$company} \n" . 
    "Tätigkeit des Unternehmen: {$companydesc} \n" . 
    "Neu / Überarbeiten: {$logooptions} \n" . 
    "Gewünschter Style: {$logostyle} \n" ;

