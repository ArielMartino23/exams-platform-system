import { Component } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";


@Component({
  selector: 'app-navbar',
  standalone : true,
  imports: [MatToolbarModule,
    MatIconModule,
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
