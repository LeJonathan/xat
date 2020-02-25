import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fexbot';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  public commands = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>("assets/data/commands.json").subscribe(
      (data) => {
        this.commands = data;
      }
    );
  }

  accClick(t) {
    var element = (<HTMLElement> t);
    element.classList.toggle("active");
    var panel = (<HTMLElement> element.nextElementSibling);
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
  }
}
