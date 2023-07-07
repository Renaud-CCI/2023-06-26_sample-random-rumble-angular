import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsPopupComponent } from './actions-popup.component';

describe('ActionsPopupComponent', () => {
  let component: ActionsPopupComponent;
  let fixture: ComponentFixture<ActionsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
