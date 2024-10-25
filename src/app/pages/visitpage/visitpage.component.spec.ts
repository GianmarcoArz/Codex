import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitpageComponent } from './visitpage.component';

describe('VisitpageComponent', () => {
  let component: VisitpageComponent;
  let fixture: ComponentFixture<VisitpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisitpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
