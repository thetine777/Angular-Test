import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-hero',
  templateUrl: './button-hero.component.html',
  styleUrls: ['./button-hero.component.scss']
})
export class ButtonHeroComponent implements OnInit {
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }
  
}
