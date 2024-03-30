import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNotificationComponent } from './details-notification.component';

describe('DetailsNotificationComponent', () => {
  let component: DetailsNotificationComponent;
  let fixture: ComponentFixture<DetailsNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
