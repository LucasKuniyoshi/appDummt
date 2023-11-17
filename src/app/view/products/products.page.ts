import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DummyService, SearchCategory } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  //result! : Observable<any>;
  //searchTerms : string = '';
  //category : SearchCategory = SearchCategory.all;

  searchTerm: string = '';
  results: any[] = [];
  categories: any[] = [];

  constructor(private dummy : DummyService) { }

  search() {
    this.categories = this.results.filter((breed) =>
      breed.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  //search(){
  //  this.result = this.dummy.getAll(this.searchTerms/*, this.category*/)
  //  .pipe(map(results => results['Search']));
  //}

  ngOnInit() {
    this.dummy.getAll().subscribe((data) => {
      this.results = data;
      this.categories = data;
    });
  }

}
