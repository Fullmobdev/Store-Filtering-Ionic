import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {StorePage} from "../store/stores";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
	// List of Items
	public itemList: any = [ "Meat", "Dairy", "Fruits and Vegetables", "Beverages", "Snacks" ];
	
	public selectedType:any = {
		item: "",
		zipCode: ""
	}

  	constructor(public nav: NavController, public popoverCtrl: PopoverController) {  
		this.selectedType.item = "";
		this.selectedType.zipCode = "";
	}

 	// go to result page
  	doSearch() {
    	this.nav.push(StorePage, this.selectedType);
  	}

}