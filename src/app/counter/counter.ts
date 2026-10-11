import { Component,signal,computed ,effect} from '@angular/core';


@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  valeur =signal(20);
  caree=computed(()=>this.valeur()*this.valeur());
  pair=computed(()=>this.valeur()%2==0);
  initValeur(){
    this.valeur.set(0);
  }
   incrementValeur(){
    this.valeur.update(val=>val+1);
   }

   constructor(){
   effect( ()=>
    {console.log("Valeur actuelle:" + this.valeur())})
   }
  }
   

   
