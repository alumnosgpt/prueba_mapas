<?php

namespace Controllers;

use MVC\Router;
use Model\Mapa;
use Exception;

class MapaController{
    public static function index(Router $router){
        $router->render('mapa/index', []);
    }
    public static function buscarAPI(){
        {
            $sql = "SELECT * FROM marcador WHERE marcador_situacion = '1' ";             
    
            try {
                $marcador = Mapa::fetchArray($sql);
                echo json_encode($marcador);
            } catch (Exception $e) {
                echo json_encode([
                    'detalle' => $e->getMessage(),
                    'mensaje' => 'Ocurrió un error',
                    'codigo' => 0
                ]);
            }
        }
    }
}