import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Navbar } from "./components/navbar/navbar";
import { SignupComponent } from "./pages/signup/signup";


@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet,
    MatButtonModule,
    Navbar,
    MatFormFieldModule,
    MatInputModule,
    SignupComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sistema-examenes-frontend');
}
