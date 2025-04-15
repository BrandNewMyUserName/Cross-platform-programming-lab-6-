import { ProductFactory } from '../class/factory/productFactory';
import { Injectable } from '@angular/core';
import { iProduct } from '../class/interfaces/iProduct';


const URL ="https://api.jsonbin.io/v3/b/67fed4b58a456b79668a30c3";
@Injectable({
  providedIn: 'root'
})
export class ReadService {
  data:any;
  public antiques: iProduct[]=[]; 

  addAntiques(some_antiques:iProduct){
    this.antiques.push(some_antiques);
  }

  removeAntique(index: number) {
    if (index >= 0 && index < this.antiques.length) {
      this.antiques.splice(index, 1);
    }
  }

  
  public async load(){
    this.data=[];
    fetch(URL).then((res)=>res.json())
    .then((json)=>{

      this.data=json;
      this.data=this.data.record;

      let antiques = this.data.map((item:any)=>ProductFactory.createProduct(item));

      antiques.forEach((element:any) => this.addAntiques(element));
        
    });

  }

  constructor() { }
}
