import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezindoListasComponent } from './rendezindo-listas.component';

describe('RendezindoListasComponent', () => {
  let component: RendezindoListasComponent;
  let fixture: ComponentFixture<RendezindoListasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RendezindoListasComponent]
    });
    fixture = TestBed.createComponent(RendezindoListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
