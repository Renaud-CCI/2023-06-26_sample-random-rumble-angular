import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPopupComponent } from './intro-popup.component';

describe('IntroPopupComponent', () => {
  let component: IntroPopupComponent;
  let fixture: ComponentFixture<IntroPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
