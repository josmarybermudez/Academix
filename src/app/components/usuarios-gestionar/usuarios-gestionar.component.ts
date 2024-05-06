import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuarioModel';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios-gestionar',
  templateUrl: './usuarios-gestionar.component.html',
  styleUrls: ['./usuarios-gestionar.component.css']
})
export class UsuariosGestionarComponent implements OnInit {
  usuarios: Usuario[];
  id_select2: string = "1";
  indice: number = 0;
  nuevo: Usuario = {};

  constructor(private usuariosService: UsuariosService) {
    this.usuariosService.cargarUsuariosLocal(); //forzamos el uso de la carga local a modo de prueba.
    this.usuarios = this.usuariosService.listarUsuarios();
    console.log("Usuarios listar");
    console.log(this.usuarios);
  }

  actualizar() {
    console.log("Elige: " + this.id_select2);
    this.usuariosService.guardarUsuarios(this.usuarios);
    this.usuariosService.guardarUsuariosLocal();
  }

  seleccionaValor($event: any) {
    console.log("Elige: " + this.id_select2)
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.id_select2 == this.usuarios[i].id) {
        this.indice = i;
        break;
      }
    }
    console.log(this.indice);
  }

  agregar() {
    this.nuevo.id = (this.usuarios.length + 1).toString();//Id artificial. Debe ser de BD.
    console.log(this.nuevo);
    this.usuarios.push(this.nuevo);
    console.log(this.usuarios);
    this.usuariosService.guardarUsuarios(this.usuarios);
    this.usuariosService.guardarUsuariosLocal();
    this.nuevo = {}//Limpiamos el contenido de la variable.
  }

  eliminar($event: any) {
    console.log($event.target.value);
    let id: string = $event.target.value; //Guardamos el id del boton
    for (let i = 0; i < this.usuarios.length; i++) { //recorremos el array.
      if (this.usuarios[i].id == id) {//buscamos coincidencia de id.
        this.usuarios.splice(i, 1);//Cuando encuentra, elimina y sale del ciclo.
        break;
      }
    }
    if (this.usuarios.length > 0)
      console.log(this.usuarios);//imprime en consola el objeto resultante
    else
      console.log("No hay mas usuarios!!!")
    //this.usuariosService.guardarUsuarios(this.usuarios);
    //this.usuariosService.guardarUsuariosLocal();
  }

  ngOnInit(): void {
  }

}
