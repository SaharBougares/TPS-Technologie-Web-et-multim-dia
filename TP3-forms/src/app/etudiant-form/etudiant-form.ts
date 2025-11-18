import { Component, ViewChild } from '@angular/core';
import { Etudiant } from '../etudiant';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-etudiant-form',
standalone: true, 
imports: [FormsModule, CommonModule],
templateUrl: './etudiant-form.html',
styleUrls: ['./etudiant-form.css']
})
export class EtudiantFormComponent {
@ViewChild('etudiantForm') etudiantForm!: NgForm;

classes = ['L2DS1', 'L2DS2', 'L2DS3', 'L3DS1', 'L3DS2'];
model = new Etudiant(18, 'Mohamed', this.classes[0], 'XYZ');
submitted = false;

onSubmit() { 
  this.submitted = true; 
}

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }

newEtudiant() {
  this.model = new Etudiant(42, '', '');
  this.submitted = false;
  this.etudiantForm.reset();
}
}