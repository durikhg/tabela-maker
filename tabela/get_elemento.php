<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

header('Content-Type: application/json');

$numero = $_GET['numero'] ?? null;

if (!$numero) {
    echo json_encode(["erro" => "Número do elemento não especificado"]);
    exit;
}

$connStr = "host=ep-rapid-dawn-adacfum3-pooler.c-2.us-east-1.aws.neon.tech
            port=5432
            dbname=neondb
            user=neondb_owner
            password=npg_ILpkD1QYf3AU
            sslmode=require
            options='endpoint=ep-rapid-dawn-adacfum3'"; // <- ESSA LINHA É IMPORTANTE

$conn = pg_connect($connStr);

if (!$conn) {
    echo json_encode(["erro" => "Erro na conexão com o banco"]);
    exit;
}

$query = "SELECT * FROM elementos WHERE numero = $1";
$result = pg_query_params($conn, $query, [$numero]);

if (!$result) {
    echo json_encode(["erro" => "Erro na consulta"]);
    exit;
}

$data = pg_fetch_assoc($result);
echo json_encode($data ?: ["erro" => "Elemento não encontrado"]);

pg_close($conn);

?>
