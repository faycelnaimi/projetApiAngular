import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetetudiantComponent } from './getetudiant.component';

describe('GetetudiantComponent', () => {
  let component: GetetudiantComponent;
  let fixture: ComponentFixture<GetetudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetetudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
