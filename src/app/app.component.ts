import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'first-web-app-v2';
  data =  [];

  constructor(private httpClient: HttpClient){}
  
  ngOnInit(): void {
    this.httpClient.get(" http://127.0.0.1:3000/products").subscribe(
    (data: any) =>{
      console.log(data);
      this.data = data;
    }
    );
  }  
}
