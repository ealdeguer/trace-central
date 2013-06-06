<?php
$querybd = "SELECT bdid,date,jour FROM businessdays order by bdid;";
$db = pg_connect("host=localhost port=5432 dbname=central user=centralclient password=kliber") or die("Impossible de se connecter : ".mysql_error());
$req = pg_send_query($db,$querybd) or die('Erreur envoi requête SQL !<br>'.$querybd.'<br>'.mysql_error());
$res = pg_get_result($db) or die('Erreur récupération SQL !<br>'.$querybd.'<br>'.mysql_error());

$bdays = array ();

while ($row = pg_fetch_array($res))
  {
    array_push($bdays,array('bdid' => $row['bdid'],'date' => $row['date'],'jour' => $row['jour']));
  }

echo json_encode(array("bdays" => $bdays));
exit;

pg_close();
?>