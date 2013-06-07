<?php
$output = shell_exec("sudo -u ealdeguer /var/www/central/sh/video-mover.sh 2>&1");
echo($output.'Done');
?>
