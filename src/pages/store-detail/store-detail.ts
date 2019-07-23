import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {StoreService} from "../../services/store-service";

@Component({
  selector: 'page-store-detail',
  templateUrl: 'store-detail.html'
})
export class StoreDetailPage {
 	// stores info
  	public products: any = [];
	public store: any;
	public storeId: any;

  	constructor(public nav: NavController, public storeService: StoreService, public navParams: NavParams) {
    	// set store Id
	  	this.storeId = this.navParams.data;
		//get store based on id
		this.store = storeService.getStoreById(this.storeId);
		// get product based on store Id.
    	this.products = storeService.getAllProduct(this.storeId);
  	}

}
