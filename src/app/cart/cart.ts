import { Component, signal, WritableSignal,computed} from '@angular/core';
import { Item } from '../item';
import { TitleCasePipe } from '@angular/common';

@Component({
  imports: [TitleCasePipe],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  items : WritableSignal<Item[]>=signal<Item[]>([
    { id: 11, photo: 'articles/lait.jpg', name: 'lait', price: 1.35, quantity: 2 }, 

{ id: 12, photo: 'articles/pate.jpg', name: 'pâtes', price: 0.41, quantity: 1 }, 

{ id: 13, photo: 'articles/riz.jpg', name: 'riz', price: 3.8, quantity: 1 }, 

{ id: 14, photo: 'articles/yaourt.jpg',name:'yaourt', price: 0.6, quantity:6 }

                                                   ]
                                                 )
                                                 
                                                
// 1) ken na3mil modification fil tableaux des item changement isir 3la kol les signaux lo5rin 3lech ?     
// 2) changement d'adresse mta3 les tableaux bech angular iwali ichof les mis à jour ?                                          

calculernbarticle():number{
  let sm=0;
  this.items().forEach((Element)=>{
    sm=sm+Element.quantity;
  })
  return sm;
}
totalItems = computed(()=>  this.calculernbarticle());

pricetotal():number{
 let sm=0;
  this.items().forEach((element)=>{
    sm=sm+(element.price*element.quantity);
  })
  return sm;
}
totalPrice= computed(()=> this.pricetotal() )

calculerRemise():number{
if(this.totalPrice() > 100){
 return (this.totalPrice()*0.02);
}
else{
  return 0;
}
}

remise=computed(()=> this.calculerRemise());

calculerPriceFinal():number{
  return (this.totalPrice()-this.remise());
}

finalPrice=computed(()=>this.calculerPriceFinal());

// 5edmetli ama ena manich fehimha ?
updateQuantity(item :Item, value :number){
  if(value+item.quantity == 0){
         item.quantity=value+item.quantity;
         this.items.set(this.items().filter((el)=>el.quantity!=0)); // haka modification inajim ichofha angular ?
         console.log(this.items());
         
  }
  else{
        item.quantity=value+item.quantity;
         this.items.set([...this.items()]);
         console.log(this.items());
    
  }

}


addItem(){ // question 11 partie 1 ?
  let eau:Item;
  eau={id:15,photo:"articles/eau.jpg",name:"eau",price:0.7,quantity:1};
  this.items().push(eau);
  this.items.set([...this.items()]);
}

deleteItem(nom:string){
  this.items.set(this.items().filter((e)=>e.name.toUpperCase() != nom.toUpperCase()));
  console.log(this.items());
}

// question 13 , 14 ? mafhimtouche














}
