import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamLogsComponent } from './stream-logs.component';

describe('StreamLogsComponent', () => {
  let component: StreamLogsComponent;
  let fixture: ComponentFixture<StreamLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
