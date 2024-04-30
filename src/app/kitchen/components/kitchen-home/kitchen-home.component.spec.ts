import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenHomeComponent } from './kitchen-home.component';

describe('KitchenHomeComponent', () => {
  let component: KitchenHomeComponent;
  let fixture: ComponentFixture<KitchenHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KitchenHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KitchenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
