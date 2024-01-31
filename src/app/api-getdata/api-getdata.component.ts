import { Component } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-api-getdata',
  templateUrl: './api-getdata.component.html',
  styleUrls: ['./api-getdata.component.scss']
})
export class ApiGetdataComponent {


  getImg :any;
  constructor(private loader:LoadingService) { }
  
  callApi(event:any) {
    // event.target.disabled = true;
    
    document.body.style.pointerEvents = "none";

    this.loader.show();
    this.loader.getData().subscribe({
      next: (data: any)=>{
        this.getImg = data;
        console.log(data);
      },
      error:(err: string)=>{console.log('API'+err)},
      complete:()=>{
        console.log('SuccessFully')
        this.loader.hide();
        // event.target.disabled = false;\

        document.body.style.pointerEvents;
      }
    });
    }


}
