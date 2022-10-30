import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBottomNavvComponent } from './mobile-bottom-navv.component';

describe('MobileBottomNavvComponent', () => {
  let component: MobileBottomNavvComponent;
  let fixture: ComponentFixture<MobileBottomNavvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileBottomNavvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileBottomNavvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
