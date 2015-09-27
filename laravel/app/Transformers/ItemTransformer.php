<?php

namespace App\Transformers;

/**
* Item Transformer
*/
class ItemTransformer extends Transformer
{
	
	static function single ($collection)
	{
		return [
			'id' 			=> (int) $collection->id,
			'name'			=> $collection->name,
			'description'	=> $collection->description
		];
	}

	static function multiple ($collection)
	{
		$result = [];
		foreach ($collection as $item) {
			$result [] = [
				'id' 	=> (int) $item->id,
				'name'	=> $item->name,
				'link'	=> url('item', $item->id),
			];
		}
		return $result;
	}
}