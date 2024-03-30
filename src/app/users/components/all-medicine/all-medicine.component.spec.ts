import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMedicineComponent } from './all-medicine.component';

describe('AllMedicineComponent', () => {
  let component: AllMedicineComponent;
  let fixture: ComponentFixture<AllMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllMedicineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
