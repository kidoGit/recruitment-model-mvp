import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  position=this.route.snapshot.paramMap.get('position');
  isFresher = false;
  selectedStatus='Fresher';

  status:string[]=[
    'Fresher',
    'Freelancer',
    'Working'
  ];

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.changeStatus();
  }

  changeStatus(){
    if(this.selectedStatus=='Fresher'){
      this.isFresher=true;
    }else{
      this.isFresher=false;
    }
  }

  onSubmit = function(value){
    alert("Submit Successful");
  }
}
