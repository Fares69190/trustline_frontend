// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(form: any) {
    const loginData = {
      email_ou_telephone: form.value.email,
      passCode: form.value.password
    };

    console.log('Submitting login form', loginData);

    this.http.post('http://127.0.0.1:8000/api/login/', loginData)
      .subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Login failed', error);
          alert('Login failed: ' + error.message); // Ajouter une alerte pour les erreurs
        }
      });
  }
}
