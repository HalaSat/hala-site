import { Component, OnInit, ElementRef, DoCheck } from '@angular/core';
import { trigger, state, transition, animate, style } from "@angular/animations";

const fadeAnimation = trigger(
  'fadeAnimate', [
    state('out', style({
      opacity: "0",
      transform: "translateY(-50%)"
    })),
    state('in', style({
      opacity: "1",
      transform: "translateY(0%)"
    })),
    transition('* => out', animate('0ms')),
    transition('out => in', animate('1000ms ease-in'))
  ]
)

const featureIconAnimation = trigger('iconAnimate', [
  state('out', style({
    opacity: '0',
    transform: "translateX(-50%)"
  })),
  state('in', style({
    opacity: '1',
    transform: "translateX(0%)"
  })),
  transition('* => out', animate('500ms')),
  transition("out => in", animate('1000ms ease-in')),
]
)

const featureDescAnimation = trigger('descAnimate', [
  state('out', style({
    opacity: '0',
    transform: "translateX(10%)"
  })),
  state('in', style({
    opacity: '1',
    transform: "translateX(0%)"
  })),
  transition('* => out', animate('0ms')),
  transition("out => in", animate('1000ms ease-in')),
]
)



@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  animations: [fadeAnimation, featureIconAnimation, featureDescAnimation],
})
export class FeatureComponent implements OnInit, DoCheck {
  public changeState: Boolean = true;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {

  }

  ngDoCheck() {
    this.getState();
  }

  public getState() {
    if ((this.element.nativeElement.getBoundingClientRect().top < (window.innerHeight + -150)) && (this.changeState)) {
      this.changeState = false;
    }
  }




}
