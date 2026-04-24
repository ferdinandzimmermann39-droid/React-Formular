<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$rawInput = file_get_contents('php://input');

$data = json_decode($rawInput, true);

echo json_encode([
    "message" => "Hallo " . $data["name"] . "! deine Email ist " . $data["email"]
], JSON_UNESCAPED_UNICODE);