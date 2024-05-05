import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-ingresar',
  templateUrl: './usuarios-ingresar.component.html',
  styleUrls: ['./usuarios-ingresar.component.css']
})
export class UsuariosIngresarComponent implements OnInit {
  username = '';
  password = '';

  constructor(private usuariosService:UsuariosService, private router: Router) { 
    this.usuariosService.setToken();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const isValidUser = this.usuariosService.validarUsuario(this.username, this.password);
    if(isValidUser) {
      this.usuariosService.setToken();
      console.log(this.username, this.password, 
        "ingrese",
        this.usuariosService.isLoggedIn()
      )
      this.router.navigate(['usuarios/listar']);
    }
  }
  

}
