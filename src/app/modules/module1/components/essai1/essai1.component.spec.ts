import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Essai1Component } from './essai1.component';

describe('Essai1Component', () => {
  let component: Essai1Component;
  let fixture: ComponentFixture<Essai1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Essai1Component]
    });
    fixture = TestBed.createComponent(Essai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
