import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthCompaniPage } from './auth-compani.page';

describe('AuthCompaniPage', () => {
  let component: AuthCompaniPage;
  let fixture: ComponentFixture<AuthCompaniPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCompaniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
