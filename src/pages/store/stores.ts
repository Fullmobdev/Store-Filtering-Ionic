import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {StoreService} from "../../services/store-service";
import {StoreDetailPage} from "../store-detail/store-detail";

@Component({
  selector: 'page-stores',
  templateUrl: 'stores.html'
})
export class StorePage {
	
	public selectedType:any = {
		item: "",
		zipCode: ""
	}
	public stores: any = [];

  	constructor(public nav: NavController, public storeService: StoreService, public navParams: NavParams) {
    	// set sample data
	  	let tempStores: any = [];
	  	this.selectedType = this.navParams.data;
    	this.stores = storeService.getAllStores();
	  	if(this.selectedType && (this.selectedType.item != "" || this.selectedType.zipCode != "") ){
			for(let store of this.stores){
				if((this.selectedType.zipCode && this.selectedType.zipCode == store.zipcode) || 
				  (this.selectedType.item && store.items.includes(this.selectedType.item))){
					tempStores.push(store); 
				}
			}
			this.stores = tempStores;
		}else {
			this.stores = [];  
		}
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(StoreDetailPage, id);
  }
}
