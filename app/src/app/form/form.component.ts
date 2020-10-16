import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {DataService} from '../data.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myForm: FormGroup; 
  initial;
  loading:boolean;
  constructor(private fb: FormBuilder,private dataService:DataService) {this.loading=true;}
  ngOnInit() {
    this.myForm = this.fb.group({
      name:['',Validators.required],
      email: ['', [Validators.required,Validators.email]],
      feedback:[''],comment: [''],
    });
    this.dataService.get().subscribe((res)=>{
      this.initial= res
      this.func2();
    });
  }
  func2():void{
    this.myForm.setValue(this.initial)
    this.loading=false;
  }
  get f() { return this.myForm.controls; }
  onSubmit() {
    this.dataService.post(JSON.stringify(this.myForm.value)).subscribe((res)=>{
      console.log(res);
      alert('Succesfully Submitted')
    });

    
  }
}