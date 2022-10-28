import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAboutComponent } from './mobile-about.component';

describe('MobileAboutComponent', () => {
  let component: MobileAboutComponent;
  let fixture: ComponentFixture<MobileAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
