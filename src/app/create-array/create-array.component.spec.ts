import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArrayComponent } from './create-array.component';

describe('CreateArrayComponent', () => {
  let component: CreateArrayComponent;
  let fixture: ComponentFixture<CreateArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
