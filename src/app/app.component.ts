import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'first-web-app-v2';
  constructor(private httpClient: HttpClient){}
  
  ngOnInit(): void {
    this.httpClient.get(" http://localhost:3000/products").subscribe(
    (data) =>{
      console.log(data);
    }
    );
  }  
}
