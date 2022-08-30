import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-security-refresh',
  templateUrl: './security-refresh.component.html',
  styleUrls: ['./security-refresh.component.less']
})
export class SecurityRefreshComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form: FormGroup;
  secTypeList: any = ['Cusip', 'Symbol', 'Sec_id']
    
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      secType: ['', Validators.required],
      secValue: ['', Validators.required],
      secDate:['',Validators.required]
  });
  }

}
