import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

  submitted = signal(false);

  form = this.fb.group(
    {
      fullName: this.fb.control('', { validators: [Validators.required] }),
      email: this.fb.control('', { validators: [Validators.required, Validators.email] }),
      password: this.fb.control('', { validators: [Validators.required] }),
      confirmPassword: this.fb.control('', { validators: [Validators.required] }),
    },

    { validators: [passwordsMatch] }
  );

  submit(event: Event): void {
    const btn = event.target as HTMLButtonElement;
    btn.disabled = true;

    this.submitted.set(true);

    if (this.form.invalid) {
      btn.disabled = false;
      return;
    }

    // this._authService.signup(this.form.getRawValue()).subscribe({
    //   next: () => {
    //   },
    //   error: () => {
    //     btn.disabled = false;
    //   },
    // });
  }


}
