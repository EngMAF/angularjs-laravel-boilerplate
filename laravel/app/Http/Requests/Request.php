<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use App\Http\Controllers\ApiBaseController;

abstract class Request extends FormRequest
{
    public function response(array $errors)
    {
    	return ApiBaseController::respondWithError($errors);
    }

}
