<?php
    function resp($ok, $result){
        header('content-type:application/json');
        $jsn_str = json_encode(['ok'=>$ok, 'result'=>$result]);
        echo $jsn_str;
    }

    function par($p, $d=''){
        if (!isset($_REQUEST[$p])) return '';
        else return $_REQUEST[$p];
    }

    $x = (int)par('x',0);
    $y = (int)par('y',0);
    $z= $x + $y;
    return resp(1, $z);

?>