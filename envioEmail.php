<?php
if (isset($_POST['email'])) {
    $email = $_POST['email'];
} else if (isset($_GET['email'])) {
    $email = $_GET['email'];
} else {
    $email = '';
}


$to = 'lucasribeiro.netto@gmail.com';
$subject = 'Contato via formulário do site';
$message = 'Solicitou contato via email: '. $email;

$headers = "From: remetente@example.com\r\n";
$headers .= "Reply-To: remetente@example.com\r\n";
$headers .= "Content-type: text/html\r\n";

if (mail($to, $subject, $message, $headers)) {
    $arrResult = array('response'=>'success');
} else {
    $arrResult = array('response'=>'error','message'=>'Ocorreu um erro');
}

echo json_encode($arrResult);

?>