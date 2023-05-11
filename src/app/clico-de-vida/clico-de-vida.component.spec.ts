import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicoDeVidaComponent } from './clico-de-vida.component';

describe('ClicoDeVidaComponent', () => {
  let component: ClicoDeVidaComponent;
  let fixture: ComponentFixture<ClicoDeVidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClicoDeVidaComponent]
    });
    fixture = TestBed.createComponent(ClicoDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
