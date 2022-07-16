import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  regForm = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl()
  });

  onSubmit(){
    console.log(this.regForm.value);
  }

}
