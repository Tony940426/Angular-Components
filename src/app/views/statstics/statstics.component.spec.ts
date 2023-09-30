import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsticsComponent } from './statstics.component';

describe('StatsticsComponent', () => {
  let component: StatsticsComponent;
  let fixture: ComponentFixture<StatsticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsticsComponent]
    });
    fixture = TestBed.createComponent(StatsticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
