import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  }

  /* current search query */
  searchQuery: string;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      data => {
        this.searchQuery = data['query'];
        let searchQuery = data['query'];
        //below here make rest call to search endpoint(s)
      }
    );
  }

}
