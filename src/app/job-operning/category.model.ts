import { JobModel } from "./job.model";

export class CategoryModel{
    public id:string;
    public name:string;
    public jobs:JobModel[];

    constructor(id:string,name:string,jobs:JobModel[]){
        this.id=id;
        this.name=name;
        this.jobs=jobs;
    }
}