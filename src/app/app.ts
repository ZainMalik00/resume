import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzLayoutModule, NzMenuModule, NzPageHeaderModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
