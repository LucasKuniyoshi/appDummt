import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  info : any;

  constructor(private actRoute : ActivatedRoute, private dummy : DummyService) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.dummy.getById(id).subscribe(result => this.info = result);
  }

}
