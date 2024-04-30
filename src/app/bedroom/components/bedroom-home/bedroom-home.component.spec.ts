import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomHomeComponent } from './bedroom-home.component';

describe('BedroomHomeComponent', () => {
  let component: BedroomHomeComponent;
  let fixture: ComponentFixture<BedroomHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BedroomHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BedroomHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
