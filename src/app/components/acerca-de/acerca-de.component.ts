import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { Persona } from 'src/app/model/Persona';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = null;


  constructor(public personaService: PersonaService, private tokenService: TokenService) {}

  isLogged = false;
  
  ngOnInit(): void {
      this.cargarPersona();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data => {this.persona = data})
  }
}
