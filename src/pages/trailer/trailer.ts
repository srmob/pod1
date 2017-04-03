import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-trailer',
  templateUrl: 'trailer.html'
})
export class TrailerPage {
 
 scanData = "";
 containerDetails = [
   {"id":"8623-4324"},
   {"id":"3223-2430"},
   {"id":"934834-8621"},
   {"id":"86232323-43249730"},
   {"id":"7602-432234"}
 ];
  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
    
    
  }
  scanCode(item) {
    console.log("Scan code called");
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
       console.log("scan details are :" +JSON.stringify(barcodeData));
       this.scanData = barcodeData;
       console.log("scan details are 1 :" +JSON.stringify(this.scanData));
       // this.scanData = 34534543;
      }, (err) => {
          // An error occurred
          console.log("scan errors are :" +err.message);
      });
  }

  done(){
    this.navCtrl.pop();
  }



}
