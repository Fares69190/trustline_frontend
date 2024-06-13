import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    this.http.post('http://127.0.0.1:8000/api/password-reset-request/', { email: this.email })
      .subscribe({
        next: () => {
          alert('Un email de réinitialisation de mot de passe a été envoyé.');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Erreur lors de l\'envoi de l\'email de réinitialisation', err);
          alert('Erreur lors de l\'envoi de l\'email de réinitialisation.');
        }
      });
  }
}
