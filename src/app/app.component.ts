import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, OnInit, DoCheck } from '@angular/core';
import { trigger, transition, state, style, animate } from "@angular/animations";
import { R3TargetBinder } from '@angular/compiler';

const socialFIconAnimation = trigger('iconFAnimate', [
  state('hoverd', style({
    backgroundColor: '#3b5998',
  })
  ), transition('* => hoverd', animate('200ms ease-out'))
]
);

const socialTIconAnimation = trigger('iconTAnimate', [
  state('hoverd', style({
    backgroundColor: '#00aced',
  })
  ), transition('* => hoverd', animate('200ms ease-out'))
]
);

const socialGIconAnimation = trigger('iconGAnimate', [
  state('hoverd', style({
    backgroundColor: '#d34836',
  })
  ), transition('* => hoverd', animate('200ms ease-out'))
]
)



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [socialFIconAnimation, socialGIconAnimation, socialTIconAnimation],

})
export class AppComponent implements AfterViewInit, OnInit, DoCheck {
  title = 'mdbProject';
  private navBottom: any;
  public navScroll: Boolean;
  public sideClass = 'navbar navbar-expand-lg scrolling-navbar navbar-dark fixed-top';
  public sideClassScrolled = 'navbar navbar-expand-lg scrolling-navbar navbar-dark fixed-top blue';
  public partnersSlidesNo: Number = 4;
  public slideConfig;
  private winWidth;
  public fIconHover: boolean;
  public tIconHover: boolean;
  public gIconHover: boolean;


  @ViewChild('navRef')
  private navBar: any;

  @ViewChild('carousel')
  private carouselRef: any;

  @ViewChild('contentRef')
  private fillContentRef;


  @HostListener('document:scroll')
  public onScroll() {

    if (this.navBottom < window.scrollY) {
      this.navScroll = true;
    } else {
      this.navScroll = false;
    }
  }

  // @HostListener('window:onresize')
  // public resizeWindow(){
  //   console.log('resized');
  // }

  constructor(public element: ElementRef) {

  }

  ngDoCheck() {
    let carouselHeight = this.carouselRef.el.nativeElement.getBoundingClientRect().height;
    this.fillContentRef.nativeElement.style.height = carouselHeight+'px';
    if (this.winWidth != window.innerWidth) {
      this.winWidth = window.innerWidth;
      this.partnersSlidesNo = this.winWidth <= 500 ? 1 : 4;
      this.slideConfig = { "slidesToShow": this.partnersSlidesNo, "slidesToScroll": this.partnersSlidesNo, "autoplay": true };
      console.log('resized');
    } else {
      this.partnersSlidesNo = this.winWidth <= 500 ? 1 : 4;
      this.slideConfig = { "slidesToShow": this.partnersSlidesNo, "slidesToScroll": this.partnersSlidesNo, "autoplay": true };
    }
  }

  ngAfterViewInit() {
    this.navBottom = this.navBar.el.nativeElement.getBoundingClientRect().height + 70;
    
  }

  ngOnInit() {
    this.winWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
   
  }

  slides = [
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMk0UZIkUzVEiAxuwg2GvtD3QpszlhHpcIPUxD8DURr22agewhg" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf82hvjl9X4NsjI4yrp-I4jqVfQUAqE8cK5rXo8W7mQMdLc4hk" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS55nFBqYwxiUuBfzZEg-BiaJPuu4jGH1ze7nv64swl0nO3Quh" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0JwhZWg4nfouAXrQ8sk1hzAoxHpHUDUzWB5tgCGVp5lUdMYnlg" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMk0UZIkUzVEiAxuwg2GvtD3QpszlhHpcIPUxD8DURr22agewhg" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf82hvjl9X4NsjI4yrp-I4jqVfQUAqE8cK5rXo8W7mQMdLc4hk" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS55nFBqYwxiUuBfzZEg-BiaJPuu4jGH1ze7nv64swl0nO3Quh" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/2000px-Cisco_logo.svg.png" }
  ];

  // Events 
  slickInit(e) {
  }

}
