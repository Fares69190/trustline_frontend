import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  password: string = '';
  repassword: string = '';
  uid: string = '';
  token: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.uid = this.route.snapshot.paramMap.get('uid') || '';
    this.token = this.route.snapshot.paramMap.get('token') || '';
  }

  onSubmit() {
    this.http.post(`http://127.0.0.1:8000/api/reset-password/${this.uid}/${this.token}/`, {
      password: this.password,
      repassword: this.repassword
    }).subscribe({
      next: () => {
        alert('Votre mot de passe a été réinitialisé avec succès.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erreur lors de la réinitialisation du mot de passe', err);
        alert('Erreur lors de la réinitialisation du mot de passe.');
      }
    });
  }
}
