import { Component, OnInit } from '@angular/core';
import {BreakpointObserver,Breakpoints} from '@angular/cdk/layout'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent{
  
}
/*
export class BannerComponent implements OnInit{
  constructor(private breakpointObserver: BreakpointObserver){}
  ngOnInit(): void {
      this.breakpointObserver.observe([Breakpoints.HandsetPortrait,Breakpoints.WebLandscape])
      .subscribe({  
        next: (result:any) => {
          console.log(result);
        }
      })
  }
}*/
