import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldManagerComponent } from './field-manager.component';

describe('FieldManagerComponent', () => {
  let component: FieldManagerComponent;
  let fixture: ComponentFixture<FieldManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
