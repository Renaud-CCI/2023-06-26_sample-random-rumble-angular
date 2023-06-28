import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterAttackPopUpComponent } from './monster-attack-pop-up.component';

describe('MonsterAttackPopUpComponent', () => {
  let component: MonsterAttackPopUpComponent;
  let fixture: ComponentFixture<MonsterAttackPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterAttackPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterAttackPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
