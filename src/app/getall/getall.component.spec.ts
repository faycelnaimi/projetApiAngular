import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallComponent } from './getall.component';

describe('GetallComponent', () => {
  let component: GetallComponent;
  let fixture: ComponentFixture<GetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
