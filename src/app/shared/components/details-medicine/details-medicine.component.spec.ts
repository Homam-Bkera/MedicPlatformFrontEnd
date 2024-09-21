import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMedicineComponent } from './details-medicine.component';

describe('DetailsMedicineComponent', () => {
  let component: DetailsMedicineComponent;
  let fixture: ComponentFixture<DetailsMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsMedicineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
