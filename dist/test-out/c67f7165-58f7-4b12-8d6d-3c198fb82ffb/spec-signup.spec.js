import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-RG4PLTLT.js";
import {
  RouterLink,
  init_router,
  provideRouter
} from "./chunk-LU6QLYEP.js";
import {
  ChangeDetectionStrategy,
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  init_core,
  init_testing,
  init_tslib_es6,
  inject,
  provideZonelessChangeDetection,
  signal
} from "./chunk-4VNRBC2U.js";

// angular:jit:template:src\app\auth\signup\signup.html
var signup_default;
var init_signup = __esm({
  "angular:jit:template:src\\app\\auth\\signup\\signup.html"() {
    signup_default = `<div class="flex min-h-dvh items-center justify-center bg-gray-50 px-4 py-10">\r
	<div class="w-full max-w-md">\r
		<div class="mb-6 text-center">\r
			<div class="text-2xl font-semibold tracking-tight text-gray-900">Updater</div>\r
			<div class="mt-1 text-sm text-gray-600">Create an account to get started.</div>\r
		</div>\r
\r
		<form\r
			class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"\r
			[formGroup]="form"\r
			(ngSubmit)="submit()"\r
			novalidate\r
		>\r
			<div class="space-y-4">\r
				<div>\r
					<label class="mb-1 block text-sm font-medium text-gray-800" for="fullName">Full name</label>\r
					<input\r
						id="fullName"\r
						type="text"\r
						autocomplete="name"\r
						class="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"\r
						formControlName="fullName"\r
					/>\r
					@if (submitted() && form.controls.fullName.invalid) {\r
						<p class="mt-1 text-xs text-red-600">Full name is required.</p>\r
					}\r
				</div>\r
\r
				<div>\r
					<label class="mb-1 block text-sm font-medium text-gray-800" for="email">Email</label>\r
					<input\r
						id="email"\r
						type="email"\r
						autocomplete="email"\r
						class="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"\r
						formControlName="email"\r
					/>\r
					@if (submitted() && form.controls.email.invalid) {\r
						<p class="mt-1 text-xs text-red-600">Enter a valid email address.</p>\r
					}\r
				</div>\r
\r
				<div>\r
					<label class="mb-1 block text-sm font-medium text-gray-800" for="password">Password</label>\r
					<input\r
						id="password"\r
						type="password"\r
						autocomplete="new-password"\r
						class="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"\r
						formControlName="password"\r
					/>\r
					@if (submitted() && form.controls.password.invalid) {\r
						<p class="mt-1 text-xs text-red-600">Password must be at least 6 characters.</p>\r
					}\r
				</div>\r
\r
				<div>\r
					<label class="mb-1 block text-sm font-medium text-gray-800" for="confirmPassword">Confirm password</label>\r
					<input\r
						id="confirmPassword"\r
						type="password"\r
						autocomplete="new-password"\r
						class="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"\r
						formControlName="confirmPassword"\r
					/>\r
					@if (submitted() && (form.controls.confirmPassword.invalid || form.hasError('passwordsMismatch'))) {\r
						<p class="mt-1 text-xs text-red-600">Passwords must match.</p>\r
					}\r
				</div>\r
\r
				<button\r
					type="submit"\r
					class="h-11 w-full rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"\r
					[disabled]="form.invalid"\r
				>\r
					Create account\r
				</button>\r
			</div>\r
\r
			<div class="mt-5 text-center text-sm">\r
				<a class="text-gray-700 hover:text-gray-900" routerLink="/auth/login">Back to sign in</a>\r
			</div>\r
		</form>\r
\r
		<p class="mt-6 text-center text-xs text-gray-500">\xA9 2026 Multilent Softwares Company</p>\r
	</div>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\auth\signup\signup.css
var signup_default2;
var init_signup2 = __esm({
  "angular:jit:style:src\\app\\auth\\signup\\signup.css"() {
    signup_default2 = "/* src/app/auth/signup/signup.css */\n/*# sourceMappingURL=signup.css.map */\n";
  }
});

// src/app/auth/signup/signup.ts
function passwordsMatch(control) {
  const password = control.get("password")?.value;
  const confirmPassword = control.get("confirmPassword")?.value;
  if (typeof password !== "string" || typeof confirmPassword !== "string") {
    return null;
  }
  return password === confirmPassword ? null : { passwordsMismatch: true };
}
var Signup, signup_default3;
var init_signup3 = __esm({
  "src/app/auth/signup/signup.ts"() {
    "use strict";
    init_tslib_es6();
    init_signup();
    init_signup2();
    init_core();
    init_forms();
    init_router();
    Signup = class Signup2 {
      fb = inject(NonNullableFormBuilder);
      submitted = signal(false);
      form = this.fb.group({
        fullName: this.fb.control("", { validators: [Validators.required] }),
        email: this.fb.control("", { validators: [Validators.required, Validators.email] }),
        password: this.fb.control("", {
          validators: [Validators.required, Validators.minLength(6)]
        }),
        confirmPassword: this.fb.control("", { validators: [Validators.required] })
      }, { validators: [passwordsMatch] });
      submit() {
        this.submitted.set(true);
        if (this.form.invalid) {
          return;
        }
      }
    };
    Signup = __decorate([
      Component({
        selector: "app-signup",
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [ReactiveFormsModule, RouterLink],
        template: signup_default,
        styles: [signup_default2]
      })
    ], Signup);
    signup_default3 = Signup;
  }
});

// src/app/auth/signup/signup.spec.ts
var require_signup_spec = __commonJS({
  "src/app/auth/signup/signup.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_signup3();
    describe("Signup", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [signup_default3],
          providers: [provideZonelessChangeDetection(), provideRouter([])]
        }).compileComponents();
        fixture = TestBed.createComponent(signup_default3);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_signup_spec();
//# sourceMappingURL=spec-signup.spec.js.map
