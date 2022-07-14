import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/rpc.service';

export interface ProductData {
  product: Product;
}

@Component({
  selector: 'dialog-product',
  styleUrls: ['dialog-product.css'],
  templateUrl: 'dialog-product.html',
})
export class DialogProductComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick() {
    this.dialogRef.close(this.data);
  }

}
