<?php

namespace App\Http\Livewire;

use Livewire\Component;

class AboutCats extends Component
{
    public function render()
    {
        return view('livewire.about-cats')
            ->layout('components/layouts/app', ['title' => 'About Cats']);
    }
}
