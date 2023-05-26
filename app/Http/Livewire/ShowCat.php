<?php

namespace App\Http\Livewire;

use Livewire\Component;

class ShowCat extends Component
{
    public function render()
    {
        return view('livewire.show-cat')
            ->layout('components/layouts/app', ['title' => 'View Cat']);
    }
}
