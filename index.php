<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP + TYPESCRIPT STARTUP</title>
    
    <script src="./js/jquery.min.js"></script>
    <script src="./js/app.js"></script>
    
    <!-- LOAD JAVASCRIPT FILES IN ORDER -->
    <?php 
        function putJavaScripts(){
        $js_dir = realpath (__dir__."/js/app/");
            $arr = scandir($js_dir,0);
            $brr = [];
            for($i=0;$i<count($arr);$i++){
                $fn=$js_dir."/".$arr[$i];
                if(!is_file($fn)) continue;
                $inf = pathinfo($fn);
                if (strtolower($inf["extension"]) !='js') continue;
                $brr[]=$arr[$i];
            }
    
            for($i=0;$i<count($brr);$i++){
                $src = "./js/app/".$brr[$i];
                echo("<script src= '$src'></script>");
            }
        }
        putJavaScripts();
    ?>
    </head>
<body>
</body>
</html>