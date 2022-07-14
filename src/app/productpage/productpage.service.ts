import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, mergeMap, Observable, take } from 'rxjs';
import { Product, RpcService } from '../rpc.service';
import { DialogProductComponent } from './dialog-product/dialog-product';

@Injectable({
  providedIn: 'root'
})
export class ProductpageService {

  private _allProducts: Array<any> = [];
  private _allProductsBehavior: BehaviorSubject<Array<any>> = new BehaviorSubject(this._allProducts);
  public allProductsSub$: Observable<Array<any>> = this._allProductsBehavior.asObservable();

  productName = null;

  constructor(
    private rpcService: RpcService,
    private dialog: MatDialog,
  ) {
    this.rpcService.product.list().pipe(take(1)).subscribe((products: Product[]) => {
      this._allProducts = products;
      this.updateAllProducts(this._allProducts);
    });
  }

  private updateAllProducts(products: any[]): void {
    this._allProductsBehavior.next(products);
  }

  public createProduct(): void {
    this.rpcService.product.create(this.productName || 'product_name').pipe(
      mergeMap(productId => this.rpcService.product.get(productId)),
    ).subscribe((product: Product) => {
      this.productName = null;
      if (this._allProducts.findIndex(p => p.id === product.id) >= 0) { return; }
      this._allProducts.push(product);
      this.updateAllProducts(this._allProducts);
    });
  }

  public deleteProduct(id: string): void {
    this.rpcService.product.delete(id).subscribe(deleteId => {
      this._allProducts = this._allProducts.filter(p => p.id !== deleteId);
      this.updateAllProducts(this._allProducts);
    });
  }

  public onKeyUpProductInput(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.createProduct();
    }
  }

  public openProductPopup(product: Product): void {
    this.dialog.open(DialogProductComponent, {
      data: { product },
      width: '250px',
      height: '200px'
    });
  }

}
