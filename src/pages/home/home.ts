import { CartPage } from './../cart/cart';
import { RestaurantePage } from './../restaurante/restaurante';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  Restaurante(){
    this.navCtrl.push(RestaurantePage);
  }
  Cart(){
    this.navCtrl.push(CartPage);
  }

}
