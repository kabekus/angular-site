import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(mesaj:string)
  {
    alertify.success(mesaj);
  }
}
