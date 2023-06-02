import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpandageComponent } from './epandage.component';

describe('EpandageComponent', () => {
  let component: EpandageComponent;
  let fixture: ComponentFixture<EpandageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpandageComponent]
    });
    fixture = TestBed.createComponent(EpandageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
