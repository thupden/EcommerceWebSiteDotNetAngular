import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-core-error',
  templateUrl: './core-error.component.html',
  styleUrls: ['./core-error.component.scss']
})
export class CoreErrorComponent implements OnInit {
  baseUrl = environment.apiUrl;
  validationErrors: string[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error()
  {
    this.httpClient.get(this.baseUrl + "42").subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get500Error()
  {
    this.httpClient.get(this.baseUrl + "Buggy/servererror").subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get400Error()
  {
    this.httpClient.get(this.baseUrl + "Buggy/badrequest").subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get400ValidationError()
  {
    this.httpClient.get(this.baseUrl + "products/fourtyTwo").subscribe({
      next: response => console.log(response),
      error: error => {
        console.log(error);
        this.validationErrors = error.errors;
      }
    })
  }
}
