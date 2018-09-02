import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchFirstSquadComponent } from './match-first-squad.component';

describe('MatchFirstSquadComponent', () => {
  let component: MatchFirstSquadComponent;
  let fixture: ComponentFixture<MatchFirstSquadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchFirstSquadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchFirstSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
