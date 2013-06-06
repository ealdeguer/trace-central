<?php
$db = pg_connect("host=localhost port=5432 dbname=central user=centralclient password=kliber") or die("Database Not Reachable");
if ($db) {
$dbstate = "Connected";
}
else {$dbstate ="Not Connected";}
echo ($dbstate);
pg_close();
?>