import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationLogsComponent } from './notification-logs.component';

describe('NotificationLogsComponent', () => {
  let component: NotificationLogsComponent;
  let fixture: ComponentFixture<NotificationLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
