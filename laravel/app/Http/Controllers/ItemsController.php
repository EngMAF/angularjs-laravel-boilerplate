<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Item;
use App\Transformers\ItemTransformer;
use App\Http\Requests\ItemRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Support\MessageBag;

class ItemsController extends ApiBaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $limit = ($request->limit > 10 || is_null($request->limit)) ? 10: $request->limit;
        $items = Item::paginate( $limit );
        $data = ItemTransformer::multiple( $items );
        return $this->RespondWithPagination($items, $data);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $item = Item::find($id);
        if($item)
            return $this->respondWithSuccess( ItemTransformer::single( $item ));
            
        return $this->respondWithError( ['message' => 'item doesn\'t exists'] );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ItemRequest $request)
    {
        $item = Item::create($request->only(['name', 'description']));
        return $this->respondWithSuccess([
            'message'   => 'item has been created',
            ItemTransformer::single( $item )
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ItemRequest $request, $id)
    {
        $item = Item::find($id)
                    ->fill($request->only(['name', 'description']));
        $item->save();
        return $this->respondWithSuccess([ 
            'message'   => 'item has been updated',
            'data'      => ItemTransformer::single( $item )
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = Item::find($id);
        if(!$item)
            return $this->respondWithError(['message' => 'item doesn\'t exists']);
        
        $item->delete();
        return $this->respondWithSuccess([
            'message' => 'item has been deleted',
            'data'    => $item,
        ]);
    }
}
