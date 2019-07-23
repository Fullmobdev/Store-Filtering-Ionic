import {Injectable} from "@angular/core";
import {STORES} from "../json-mock/mock-stores";
import {PRODUCTS} from "../json-mock/mock-products";

@Injectable()
export class StoreService {
	private stores: any;
	private product: any;


  	constructor() {
    	this.stores = STORES;
		this.product = PRODUCTS;
  	}

  	getAllStores() {
    	return this.stores;
  	}
	
	getStoreById(id:any) {
    	for (let i = 0; i < this.stores.length; i++) {
      		if (this.stores[i].id === id) {
        		return this.stores[i];
      		}
		}
    	return null;
  	}

  	getAllProduct(id:any) {
		/*let storeProduct: any = [];
    	for (let i = 0; i < this.product.length; i++) {
      		if (this.product[i].storeId === id) {
        		storeProduct.push(this.product[i]);
      		}
		}
		return storeProduct;*/
		return this.product;
  	}

}
