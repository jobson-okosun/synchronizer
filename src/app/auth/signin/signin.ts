import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HotToastService } from '@ngxpert/hot-toast';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-signin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export default class Signin {
  private fb = inject(NonNullableFormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private _toast = inject(HotToastService);

  year = new Date().getFullYear()
  errorMessage = signal<string | null>(null);

  form = this.fb.group({
    user: this.fb.control('', { validators: [Validators.required] }),
    password: this.fb.control('', {
      validators: [Validators.required],
    }),
  });

  submit(event: Event): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return;
    }
    
    const btn = event.target as HTMLButtonElement;
    btn.disabled = true;

    this.auth
      .login(this.form.getRawValue())
      .pipe(
        this._toast.observe({
          loading: 'Signing in...',
          success: 'Signed in successfully',
          error: 'Sign in failed. Please check your credentials.',
        }),
        finalize(() => {
          btn.disabled = false;
        }),
      )
      .subscribe({
        next: () => {
          void this.router.navigateByUrl('/app');
        },
      });
  }
}
