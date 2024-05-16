<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    // Configurações de e-mail
    $destinatario = "Lucasribeiro.netto@gmail.com"; // meu email para envio via php
    $assunto = "Contato pelo formulário do seu portfólio";

    // Monta o corpo do e-mail
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n\n";
    $corpo_email .= "Mensagem:\n$mensagem";

    // Envia o e-mail
    if (mail($destinatario, $assunto, $corpo_email)) {
        // E-mail enviado com sucesso
        echo "<p>Obrigado por entrar em contato. Em breve responderemos sua mensagem!</p>";
    } else {
        // Falha ao enviar o e-mail
        echo "<p>Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.</p>";
    }
} else {
    // Se o formulário não foi enviado, redireciona para a página inicial
    header("Location: index.html");
    exit;
}
?>
