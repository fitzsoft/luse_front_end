import { Component, OnInit } from '@angular/core';
import { Index } from './index.models';
import { DataService } from './index.services';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  index:  Index[] = [];


  

  constructor(private dataService: DataService) { 
    this.dataService.get_index().subscribe((data) => {
      this.index = data['index'];
    });
  }

  ngOnInit() {
   
    
  }

}
