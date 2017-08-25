<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type");

$data = array()

$data = [
    {
        'first_name': 'Bruce',
        'last_name': 'Higiro'
    }
];

echo json_encode($data);