import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'yecksin';
  list: any = [];
  list2: any = [];

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // cosnume this https://jsonplaceholder.typicode.com/users

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      console.log(data);
      this.list2 = data;
    });
  }
}
