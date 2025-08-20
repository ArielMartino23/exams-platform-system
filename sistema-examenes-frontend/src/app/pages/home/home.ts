import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-home',
  standalone : true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule
],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
