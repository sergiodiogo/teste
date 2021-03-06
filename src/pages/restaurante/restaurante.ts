import { CartPage } from './../cart/cart';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestaurantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurante',
  templateUrl: 'restaurante.html',
})
export class RestaurantePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantePage');
  }

  Cart(){
    this.navCtrl.push(CartPage);
  }
}
