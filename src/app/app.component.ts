import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesPasword';

  tipo: string = 'text';
  change: boolean = true;

  cambiar(): void{

    if(this.change == false){
      this.change = true;
    }else{
      this.change = false;
    }
  }
}
