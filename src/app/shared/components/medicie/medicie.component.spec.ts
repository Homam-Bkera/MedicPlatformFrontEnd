import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicieComponent } from './medicie.component';

describe('MedicieComponent', () => {
  let component: MedicieComponent;
  let fixture: ComponentFixture<MedicieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
