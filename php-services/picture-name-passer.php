<?php
$content= $_POST['bn'];
$fsession = fopen('/var/www/central/tmp/picture_name.var', 'w');
fwrite($fsession,$content);
fclose($fsession);
echo("Done");
?>
