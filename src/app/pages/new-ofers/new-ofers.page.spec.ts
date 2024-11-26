import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewOfersPage } from './new-ofers.page';

describe('NewOfersPage', () => {
  let component: NewOfersPage;
  let fixture: ComponentFixture<NewOfersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOfersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
