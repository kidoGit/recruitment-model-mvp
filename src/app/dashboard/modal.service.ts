import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CategoryModel } from '../job-operning/category.model';

@Injectable()
export class ModalService {
  private categoryForwardModel = new Subject<CategoryModel>();
  public categoryForwardModel$ = this.categoryForwardModel.asObservable();

  forwardCategoryName(categoryModelReceived: CategoryModel) {
    this.categoryForwardModel.next(categoryModelReceived);
  }

  private categoryBackwardModel = new Subject<CategoryModel>();
  public categoryBackwardModel$ = this.categoryBackwardModel.asObservable();

  backwardCategoryName(categoryModelReceived: CategoryModel) {
    this.categoryBackwardModel.next(categoryModelReceived);
  }

  private categoryBackwardId = new Subject<void>();
  public categoryBackwardId$ = this.categoryBackwardId.asObservable();

  backwardCategoryId() {
    this.categoryBackwardId.next();
  }

  constructor() { }

}
