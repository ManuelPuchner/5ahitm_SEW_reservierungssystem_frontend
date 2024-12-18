import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTypeFormComponent } from './field-type-form.component';

describe('FieldFormComponent', () => {
  let component: FieldTypeFormComponent;
  let fixture: ComponentFixture<FieldTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldTypeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
