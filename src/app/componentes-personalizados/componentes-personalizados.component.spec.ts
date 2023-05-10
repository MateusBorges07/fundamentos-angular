import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesPersonalizadosComponent } from './componentes-personalizados.component';

describe('ComponentesPersonalizadosComponent', () => {
  let component: ComponentesPersonalizadosComponent;
  let fixture: ComponentFixture<ComponentesPersonalizadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentesPersonalizadosComponent]
    });
    fixture = TestBed.createComponent(ComponentesPersonalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
