import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ITheme } from '../interfaces/theme';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  themesList:ITheme[] | null =null;

  constructor(private dataService:DataService){

  }
  ngOnInit(): void {
    this.dataService
    .getAllThemes()
    .subscribe((data)=>{
      this.themesList=data;
      console.log(data);
    })
  }

}
