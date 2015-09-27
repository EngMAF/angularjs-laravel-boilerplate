<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
// use App/Item;

class ItemsTableSeeder extends Seeder
{
    public function run()
    {
    	App\Item::truncate();
    	$f = Faker::create();

    	for ($i=0; $i < 30 ; $i++) { 
    		App\Item::create([
    			'name' 			=> $f->sentence(2),
    			'description' 	=> $f->text
			]);	
    	}
        
    }
}
