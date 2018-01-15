import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from "./category-service.service"
import { CategoryModel } from './category.model';
import {Http} from '@angular/http';

@Component({
  selector: 'app-job-operning',
  templateUrl: './job-operning.component.html',
  styleUrls: ['./job-operning.component.css']
})
export class JobOperningComponent implements OnInit {
  
  jobList:CategoryModel[];
  
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((res: CategoryModel[]) => {
      this.jobList = res;
    });
  }

}
