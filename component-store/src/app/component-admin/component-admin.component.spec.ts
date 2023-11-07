import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAdminComponent } from './component-admin.component';

describe('ComponentAdminComponent', () => {
  let component: ComponentAdminComponent;
  let fixture: ComponentFixture<ComponentAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentAdminComponent]
    });
    fixture = TestBed.createComponent(ComponentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
