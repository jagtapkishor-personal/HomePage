import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormControl, FormGroup, Validators} from "@angular/forms"
@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css']
})
export class ValidateFormComponent implements OnInit {

  constructor(private fb:FormBuilder) {  }
  submitted=false;
  ngOnInit(): void {
  }

  myform= this.fb.group(
    {
      firstname:new FormControl("kishor",[Validators.required]),
      middlename:new FormControl("Dattatraya",[Validators.required]),
      lastname:new FormControl(" jagtap",[Validators.required]),
      email:new FormControl("jagtapkishor104@gmail.com",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.email]),
      gendercontrol:new FormControl("male",Validators.required),
      mobile:new FormControl("1234567890",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      DOB:new FormControl("",[Validators.required]),
      zip:new FormControl("413701",[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
      currentaddress:new FormControl("pune",[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
      permamentaddress:new FormControl("mumbai",[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
      state:new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
      city:new FormControl("ahmednager",[Validators.required,Validators.minLength(3),Validators.maxLength(15)])
    }
  );


  formSubmit()
  {
    console.log("This form is Valid ==>",this.myform.valid)

    if(this.myform.valid)
    {
      console.log(this.myform.value); 
      this.myform.reset();
      
    }
  }

  

}
