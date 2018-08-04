import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appFly]'
})
export class FlyDirective implements OnDestroy {
  @Input()
  set appFly(v) {
    if (v) {
      this.fly();
    } else {
      clearInterval(this.intervalId);
    }
  }

  x = 0;
  y = 0;
  w;
  h;
  direction = { x: 1, y: 1 };

  intervalId;

  constructor(private el: ElementRef) {
    this.w = Math.max(window.innerWidth || 0);
    this.h = Math.max(window.innerHeight || 0);
  }

  fly() {
    this.el.nativeElement.style.position = 'absolute';
    this.y = this.el.nativeElement.offsetTop;
    this.x = this.el.nativeElement.offsetLeft;
    this.intervalId = setInterval(() => this.step(), 20);
  }

  step() {
    if(this.x > this.w) this.direction.x = -1;
    if(this.y > this.h) this.direction.y = -1;
    if(this.x < 0) this.direction.x = 1;
    if(this.y < 0) this.direction.y = 1;

    this.x += this.direction.x * 10;
    this.y += this.direction.y * 10;
    this.el.nativeElement.style.top = this.y + 'px';
    this.el.nativeElement.style.left = this.x + 'px';
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }


}
