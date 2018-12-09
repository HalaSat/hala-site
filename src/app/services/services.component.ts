import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from "@angular/animations";

const titleAnimation = trigger(
  'titleAnimate',[
    state('*',style({
      opacity: "1",
     
    })),
    state('hover',style({
      opacity:"0",
      transform: "translateY(-100%)",
    })),
    transition('* => hover',animate('200ms ease-out')),
    transition('hover => *',animate('300ms 100ms ease-out'))
  ]
)

const descriptioAnimation = trigger('descAnimate',[
  state('*',style({
    opacity:'0',
  })),
  state('hover', style({
    opacity: '1',
    transform: "translateY(-40%)"
  })),
  transition('* => hover',animate('300ms 100ms ease-out')),
  transition('hover => *',animate('300ms ease-out'))
])

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [titleAnimation, descriptioAnimation]
})
export class ServicesComponent implements OnInit {
  private hovering: boolean = false;
  private hoveringOne: boolean = false;
  private hoveringTwo: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public getState(){
    if ( !this.hovering){
      return 'anything'
    }else{
      return 'hover'
    }
  }

  public setTitleState(){
    if(this.hovering){
      this.hovering =false;
    }else{
      this.hovering = true;
    }
  }

  public getStateOne(){
    if ( !this.hoveringOne){
      return 'anything'
    }else{
      return 'hover'
    }
  }

  public setTitleStateOne(){
    if(this.hoveringOne){
      this.hoveringOne =false;
    }else{
      this.hoveringOne = true;
    }
  }

  public getStateTwo(){
    if ( !this.hoveringTwo){
      return 'anything'
    }else{
      return 'hover'
    }
  }

  public setTitleStateTwo(){
    if(this.hoveringTwo){
      this.hoveringTwo =false;
    }else{
      this.hoveringTwo = true;
    }
  }

}
