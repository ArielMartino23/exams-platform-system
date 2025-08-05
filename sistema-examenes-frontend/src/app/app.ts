import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Navbar } from "./components/navbar/navbar";
import { Signup } from "./pages/signup/signup";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, Navbar, Signup, MatFormFieldModule,MatInputModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sistema-examenes-frontend');
}
