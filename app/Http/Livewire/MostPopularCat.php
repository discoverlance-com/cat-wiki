<?php

namespace App\Http\Livewire;

use Livewire\Component;

class MostPopularCat extends Component
{
    public function render()
    {
        return view('livewire.most-popular-cat')
            ->layout('components/layouts/app', ['title' => 'Most Popular']);
    }
}
