import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: unknown, valor: boolean): unknown {

    if(valor){
      return value = 'password';
    }else{
      return value = 'text';
    }
  }

}
