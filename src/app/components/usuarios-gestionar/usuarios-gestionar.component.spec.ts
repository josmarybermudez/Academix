import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosGestionarComponent } from './usuarios-gestionar.component';

describe('UsuariosGestionarComponent', () => {
  let component: UsuariosGestionarComponent;
  let fixture: ComponentFixture<UsuariosGestionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosGestionarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosGestionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
