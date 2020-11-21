import { Component, OnInit } from '@angular/core';
import { Kategori } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title="Kategori Listesi"
  kategori: Kategori[];

  ngOnInit(): void {
  }

}
