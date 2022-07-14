import { Component, OnInit } from '@angular/core';
import { ProductpageService } from 'src/app/productpage/productpage.service';

@Component({
  selector: 'app-productgroup',
  templateUrl: './productgroup.component.html',
  styleUrls: ['./productgroup.component.scss']
})
export class ProductgroupComponent implements OnInit {

  constructor(
    public productpageService: ProductpageService,
  ) { }

  ngOnInit(): void {
  }

}
