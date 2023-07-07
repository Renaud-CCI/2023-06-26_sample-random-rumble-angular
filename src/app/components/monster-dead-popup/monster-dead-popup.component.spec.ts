import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterDeadPopupComponent } from './monster-dead-popup.component';

describe('MonsterDeadPopupComponent', () => {
  let component: MonsterDeadPopupComponent;
  let fixture: ComponentFixture<MonsterDeadPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterDeadPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterDeadPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
