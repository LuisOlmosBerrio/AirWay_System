import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleOfertsPage } from './detalle-oferts.page';

describe('DetalleOfertsPage', () => {
  let component: DetalleOfertsPage;
  let fixture: ComponentFixture<DetalleOfertsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleOfertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
