import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicliDeVidaPaiComponent } from './cicli-de-vida-pai.component';

describe('CicliDeVidaPaiComponent', () => {
  let component: CicliDeVidaPaiComponent;
  let fixture: ComponentFixture<CicliDeVidaPaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CicliDeVidaPaiComponent]
    });
    fixture = TestBed.createComponent(CicliDeVidaPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
