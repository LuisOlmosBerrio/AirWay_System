import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  selectedDate: string;

  constructor(private readonly httpSrv: HttpService) {
    this.selectedDate = '';
  }

  openDatePopover() {
  

     
  }
}