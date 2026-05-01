<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $name = strip_tags(trim($data["name"]));
    $email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
    $subject_form = strip_tags(trim($data["subject"]));
    $message = strip_tags(trim($data["message"]));

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Por favor, preencha todos os campos corretamente."]);
        exit;
    }

    $recipient = "info@talentosunidos.com";
    $subject = "Novo contacto do portal Talentos Unidos: $subject_form";

    $email_content = "Nome: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Assunto: $subject_form\n\n";
    $email_content .= "Mensagem:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Obrigado! A sua mensagem foi enviada com sucesso."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["message" => "Ocorreu um problema com o envio, por favor tente novamente."]);
}
?>
