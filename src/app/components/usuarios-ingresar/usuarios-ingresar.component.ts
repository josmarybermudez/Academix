import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-ingresar',
  templateUrl: './usuarios-ingresar.component.html',
  styleUrls: ['./usuarios-ingresar.component.css']
})
export class UsuariosIngresarComponent implements OnInit {
  email = '';
  password = '';
  invalidUserError: boolean = false;
  constructor(private usuariosService:UsuariosService, private router: Router) { 
    // this.usuariosService.setToken();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const isValidUser = this.usuariosService.validarUsuario(this.email, this.password);
    if(isValidUser) {
      this.invalidUserError = false;
      this.usuariosService.guardarUsuariosLocal();
      this.usuariosService.setToken();
      console.log(this.email, this.password, 
        "ingrese",
        this.usuariosService.isLoggedIn()
      )
      this.usuariosService.guardarUsuarioLogeado(this.email)
      console.log("usuario de tipo: ", this.usuariosService.obtenerRolUsuarioLogeado());
      if(!!this.usuariosService.obtenerRolUsuarioLogeado() && this.usuariosService.obtenerRolUsuarioLogeado() === 'admin') {
        this.router.navigate(['usuarios/gestionar']);
      console.log("entreeeee----")
      
      } else {
        this.router.navigate(['usuarios/listar']);
      console.log("no entendi----")
      }
    } else {
      this.invalidUserError = true;
    }
  }

}
