import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  results: any;
  constructor(private http: Http) { }

  get() {
    return this.http.get("http://localhost/bnr/select.php")
      .map(response => response.json())
      .subscribe(result => {
        console.log(result)
        this.results = result
      });

  }


  ngOnInit(): void {
    // Make the HTTP request:
    this.get()
  }
}
