export class JobModel{
    public jobTitle:string;
    public qualification:string;
    public skills:string;
    public experience:string;

    constructor(jobTitle:string,qualification:string,skills:string,experience:string){
        this.jobTitle=jobTitle;
        this.qualification=qualification;
        this.skills=skills;
        this.experience=experience;
    }
}