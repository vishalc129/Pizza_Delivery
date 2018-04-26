import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkmatComponentComponent } from './workmat-component.component';

describe('WorkmatComponentComponent', () => {
  let component: WorkmatComponentComponent;
  let fixture: ComponentFixture<WorkmatComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkmatComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkmatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
