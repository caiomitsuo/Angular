import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];

  transferencia: any[];

  constructor() {
  this.transferencia = [];
}

get  transferencias(){
  return this.listaTransferencia;
}

adic
}
