import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHeroComponent } from './button-hero.component';

describe('ButtonHeroComponent', () => {
  let component: ButtonHeroComponent;
  let fixture: ComponentFixture<ButtonHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
