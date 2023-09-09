<?php

namespace Model;

class Mapa extends ActiveRecord
{
    protected static $tabla = 'marcador';
    protected static $columnasDB = ['marcador_nombre', 'marcador_latitud', 'marcador_longitud', 'marcador_situacion'];
    protected static $idTabla = 'marcador_id';

    public $marcador_id;
    public $marcador_nombre;
    public $marcador_latitud;
    public $marcador_longitud;
    public $marcador_situacion;

    public function __construct($args = [])
    {
        $this->marcador_id = $args['marcador_id'] ?? null;
        $this->marcador_nombre = $args['marcador_nombre'] ?? '';
        $this->marcador_latitud = $args['marcador_latitud'] ?? '';
        $this->marcador_longitud = $args['marcador_longitud'] ?? '';
        $this->marcador_situacion = $args['marcador_situacion'] ?? 1;
    }

}