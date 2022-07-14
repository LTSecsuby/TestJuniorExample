import { Component, OnInit } from '@angular/core';
import { ProductpageService } from 'src/app/productpage/productpage.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  constructor(
    public productpageService: ProductpageService,
  ) { }

  ngOnInit(): void {
  }

}
