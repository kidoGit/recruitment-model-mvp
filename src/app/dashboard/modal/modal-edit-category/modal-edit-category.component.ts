import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CategoryModel } from '../../../job-operning/category.model';
import { ModalService } from '../../modal.service';
import { Subscription } from 'rxjs/Subscription';
import { CategoryService } from '../../../job-operning/category-service.service';

@Component({
  selector: 'app-modal-edit-category',
  templateUrl: './modal-edit-category.component.html',
  styleUrls: ['./modal-edit-category.component.css']
})
export class ModalEditCategoryComponent implements OnInit {

  // category to be edited or deleted
  categoryModel: CategoryModel;

  // subscriber to get data from dashboard
  subscriber: Subscription;

  /**
   * categoryService for http purposes
   * modalService for send and receive the data to Modal
   */
  constructor(private modalService: ModalService, private categoryService: CategoryService) { }

  ngOnInit() {
    // get categoryModel from dashboard
    this.subscriber = this.modalService.categoryForwardModel$
              .subscribe(data => this.categoryModel = data);
  }

  ngOnDestroy() {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

  /**
   * send http request to update the categoryname and
   * then forward modifications to dashboard
   */
  updateCategory(categoryName: string) {
    this.categoryModel.name = categoryName;
    this.categoryService.updateCategory(this.categoryModel)
      .subscribe(() => {
        this.modalService.backwardCategoryName(this.categoryModel);
      },
      (err) => {
        console.log(err.message);
      });
  }

  /**
   * send http request to delete the category and
   * then forward modifications to dashboard
   */
  deleteCategory(categoryId: string) {
    this.categoryService.deleteCategoryById(categoryId).subscribe(
      () => {
        this.modalService.backwardCategoryId();
      }
    );
  }
}
