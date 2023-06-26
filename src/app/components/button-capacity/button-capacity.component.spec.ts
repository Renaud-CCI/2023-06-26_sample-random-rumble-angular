import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCapacityComponent } from './button-capacity.component';

describe('ButtonCapacityComponent', () => {
  let component: ButtonCapacityComponent;
  let fixture: ComponentFixture<ButtonCapacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCapacityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
