import { Component } from '@angular/core';
import { LoadingService } from './loading.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'progressbar';

  constructor(private loader:LoadingService){}


isLoader: Subject<boolean> = this.loader.__loading;



}