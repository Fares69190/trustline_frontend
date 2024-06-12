import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData: any = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    role: 'utilisateur',
    site_web: '',
    description: '',
    logo: '',
    WhatsApp: '',
    categorie: '',
    social_media: '',
    video_presentation: '',
    images: '',
    competences: '',
    experiences: '',
    cv: null,
    abonnement: '',
    password: '',
    repassword: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    console.log('Submitting registration form', this.registerData);
    this.http.post('http://127.0.0.1:8000/api/register/', this.registerData).subscribe(
      response => {
        console.log('Registration successful', response);
        // Redirection après un enregistrement réussi
        this.router.navigate(['/login']);
      },
      error => {
        console.log('Error during registration', error);
      }
    );
  }

  onRoleChange(event: any) {
    this.registerData.role = event.target.value;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.registerData.cv = file;
    }
  }
}
