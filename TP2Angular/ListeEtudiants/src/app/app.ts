import { Component } from '@angular/core';
import { EtudiantComponent } from './etudiant/etudiant';
import { ProfilComponent } from './profil/profil';
import { UtilisateurComponent } from './utilisateur/utilisateur';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EtudiantComponent, ProfilComponent, UtilisateurComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'MyClass Will be Angular Heroes';
  myname = 'Sahar';
}
