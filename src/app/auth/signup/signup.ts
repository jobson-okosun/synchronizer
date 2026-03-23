import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { finalize } from 'rxjs';
import { HotToastService } from '@ngxpert/hot-toast';
import { HttpErrorResponse } from '@angular/common/http';

function passwordsMatch(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (typeof password !== 'string' || typeof confirmPassword !== 'string') {
    return null;
  }

  return password === confirmPassword ? null : { passwordsMismatch: true };
}

@Component({
  selector: 'app-signup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export default class Signup {
  private _authService = inject(AuthService);
  private fb = inject(NonNullableFormBuilder);
  private _toast = inject(HotToastService)

  year = new Date().getFullYear()
  form = this.fb.group(
    {
      first_name: this.fb.control('', { validators: [Validators.required] }),
      last_name: this.fb.control('', { validators: [Validators.required] }),
      email: this.fb.control('', { validators: [Validators.required, Validators.email] }),
      username: this.fb.control('', { validators: [Validators.required] }),
      password: this.fb.control('', { validators: [Validators.required] }),
      confirmPassword: this.fb.control('', { validators: [Validators.required] }),
    },

    { validators: [passwordsMatch] }
  );

  submit(event: Event): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return;
    }

    const btn = event.target as HTMLButtonElement;
    btn.disabled = true;

    this._authService.signup(this.form.getRawValue())
      .pipe(
        this._toast.observe({
          loading: 'Signing up...',
          success: 'Sign up successfully',
          error: ' ',
        }),
        finalize(() => {
          btn.disabled = false;
        }),
      )
      .subscribe({
        next: () => {
          setTimeout(() => {
            location.assign('/auth')
          }, 2000)
        },
        error: (error: HttpErrorResponse) => {
          btn.disabled = false;

          if(error.error?.message?.includes('duplicate')) {
            this._toast.error('Sign up failed. this email or username already exist')
            return
          }

          this._toast.error(error.error.message ?? 'Sign up failed. Please try again')
          
        },
      });
  }


}
