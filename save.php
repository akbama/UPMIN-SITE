<?php
    extract($_REQUEST);
    $file=fopen("sign-up.txt","a");

    fwrite($file,"Name :");
    fwrite($file, $fname);
    fwrite($file, $mname);
    fwrite($file, $lname ."\n");
    fwrite($file,"Gender :");
    fwrite($file, $gender ."\n");
    fwrite($file,"Date of Birth :");
    fwrite($file, $bday ."\n");
    fwrite($file,"Province :");
    fwrite($file, $tags ."\n");
    fwrite($file,"Year Level :");
    fwrite($file, $spinner ."\n");
    fclose($file);
    header("location: Home.html");
 ?>
