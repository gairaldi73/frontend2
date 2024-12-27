import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPlantillaComponentComponent } from './login-plantilla-component.component';

describe('LoginPlantillaComponentComponent', () => {
  let component: LoginPlantillaComponentComponent;
  let fixture: ComponentFixture<LoginPlantillaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPlantillaComponentComponent]
    });
    fixture = TestBed.createComponent(LoginPlantillaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
