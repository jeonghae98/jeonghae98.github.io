<?php
if (!isset($_POST['user_id']) || !isset($_POST['user_pw'])) {
    echo json_encode(array('error' => 'ID와 비밀번호를 모두 입력해주세요.'));
    exit;
}

$user_id = $_POST['user_id'];
$user_pw = $_POST['user_pw'];

$members = array(
    'answjdgo123' => array('pw' => 'answjdgo123!', 'name' => '문정해'),
    'dltjdals123' => array('pw' => 'dltjdals123!', 'name' => '이성민'),
    'tlsgusgh123' => array('pw' => 'tlsgusgh123!', 'name' => '신현호'),
    'dldmsdud123' => array('pw' => 'dldmsdud123!', 'name' => '이은영')
);

if (isset($members[$user_id]) && $members[$user_id]['pw'] === $user_pw) {
    echo json_encode(array(
        'user_id' => $user_id,
        'user_name' => $members[$user_id]['name']
    ));
} else {
    echo json_encode(array('error' => '아이디 또는 비밀번호가 일치하지 않습니다.'));
}
?>
