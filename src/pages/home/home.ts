import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TrailerPage} from '../trailer/trailer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  trailerDetails = [
      {"id":"T123" , "Origin_str_no":"7692" , "desc":"Trailer from store # 7692"},
      {"id":"T133" , "Origin_str_no":"7694" , "desc":"Trailer from store # 7694"},
      {"id":"T177" , "Origin_str_no":"7695" , "desc":"Trailer from store # 7695"}
    ];

  constructor(public navCtrl: NavController) {
    
  }

  itemSelected(item) {
    this.navCtrl.push(TrailerPage, {
      item: item
    });
  }


}
