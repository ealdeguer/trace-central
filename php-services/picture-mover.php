<?php
$output = shell_exec("./var/www/central/sh/picture-mover.sh 2>&1");
echo('debut'.$output.'fin');
?>
