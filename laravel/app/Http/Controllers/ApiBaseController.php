<?php

namespace App\Http\Controllers;

use Response;   
use App\Http\Controllers\Controller;

abstract class ApiBaseController extends Controller
{
	public static function respond($data, $status_code = 200)
	{
		return Response::json($data, $status_code);
	}

	public static function respondWithError($messages)
	{
		return static::respond([
            'errors' => $messages,
        ], 404);
	}

	public static function respondWithPagination($collection, $data)
	{
        return static::respond([
            'data'      => $data,
            'paginator' => [
                'total' 		=> $collection->total(),
                'total_pages' 	=> ceil($collection->total() / $collection->perPage()),
                'current_page' 	=> $collection->currentPage(),
            ]
        ]);

	}
}