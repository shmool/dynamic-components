import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-logo',
  template: `
    <svg viewBox="0 0 250 250" style="max-width: 300px">
      <svg:polygon class="left"
                   points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2"
                   [attr.fill]="logoBgColor"></svg:polygon>
      <svg:polygon class="right"
                   points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30"
                   [attr.fill]="logoBgColorDark"></svg:polygon>
      <svg:path class="a"
                d="M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1
      L125,52.1z M142,135.4H108l17-40.9L142,135.4z" fill="#FFFFFF"></svg:path>
    </svg>
  `,
  styleUrls: ['./angular-logo.component.scss']
})
export class AngularLogoComponent implements OnInit {
  @Input() set color(c) {
    !!c && this.setColor(c);
  }
  logoBgColor;
  logoBgColorDark;

  constructor() {
  }

  ngOnInit() {
  }

  setColor(chosenColor) {
    this.logoBgColor = chosenColor;
    const mainColor = chosenColor.substr(1, 6).match(/../g).map(c => parseInt(c, 16));
    const darkColor = mainColor.map(c => Math.max(Math.ceil(c * 0.98 - 0.0005 * c * c), 0).toString(16));
    const darkColorString = darkColor.map(val => val.length === 1 ? '0' + val : val);
    this.logoBgColorDark = '#' + darkColorString.join('');
  }

}
