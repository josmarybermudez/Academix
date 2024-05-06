import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  logout() {
    /*Es de notar que el metodo logOut podria haberse hecho en un componente y mantener la sintaxis usuarios/salir pero nos vamos a ahorrar ese paso*/
    this.usuariosService.logOut();
    console.log("Cerrando sesion!!!");
    this.router.navigate(['usuarios/principal']);
  }

  isLoggedIn():Boolean {
    return this.usuariosService.isLoggedIn();
  }

  shouldShowLogInButton():Boolean {
    return !this.usuariosService.isLoggedIn();
  }

  shouldShowLogOutButton():Boolean {
    // console.log(localStorage, "localStorage")
    return this.usuariosService.isLoggedIn();
  }

  shouldShowListButton() {
    // console.log(this.usuariosService.obtenerRolUsuarioLogeado())
    return this.usuariosService.obtenerRolUsuarioLogeado() === 'user'
  }

  shouldShowAdminButton() {
    return this.usuariosService.obtenerRolUsuarioLogeado() === 'admin'
  }

  ngOnInit(): void {
  }

}
