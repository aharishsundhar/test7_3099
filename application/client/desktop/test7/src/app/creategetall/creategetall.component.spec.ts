import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreategetallComponent } from './creategetall.component';

describe('CreategetallComponent', () => {
  let component: CreategetallComponent;
  let fixture: ComponentFixture<CreategetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreategetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreategetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});