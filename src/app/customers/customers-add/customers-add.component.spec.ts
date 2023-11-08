import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAddComponent } from './customers-add.component';

describe('CustomersAddComponent', () => {
  let component: CustomersAddComponent;
  let fixture: ComponentFixture<CustomersAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersAddComponent]
    });
    fixture = TestBed.createComponent(CustomersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
