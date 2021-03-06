import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportingComponent } from './exporting.component';

describe('ExportingComponent', () => {
  let component: ExportingComponent;
  let fixture: ComponentFixture<ExportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
