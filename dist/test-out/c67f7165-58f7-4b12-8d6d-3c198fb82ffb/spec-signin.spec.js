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

// angular:jit:template:src\app\auth\signin\signin.html
var signin_default;
var init_signin = __esm({
  "angular:jit:template:src\\app\\auth\\signin\\signin.html"() {
    signin_default = '<div class="flex min-h-dvh items-center justify-center bg-gray-50 px-4 py-10">\r\n	<div class="w-full max-w-md">\r\n		<div class="mb-6 text-center">\r\n			<div class="text-2xl font-semibold tracking-tight text-gray-900">Updater</div>\r\n			<div class="mt-1 text-sm text-gray-600">Sign in to manage version archives.</div>\r\n		</div>\r\n\r\n		<form\r\n			class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"\r\n			[formGroup]="form"\r\n			(ngSubmit)="submit()"\r\n			novalidate\r\n		>\r\n			<div class="space-y-4">\r\n				<div>\r\n					<label class="mb-1 block text-sm font-medium text-gray-800" for="email">Email</label>\r\n					<input\r\n						id="email"\r\n						type="email"\r\n						autocomplete="email"\r\n						class="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"\r\n						formControlName="email"\r\n					/>\r\n					@if (submitted() && form.controls.email.invalid) {\r\n						<p class="mt-1 text-xs text-red-600">Enter a valid email address.</p>\r\n					}\r\n				</div>\r\n\r\n				<div>\r\n					<label class="mb-1 block text-sm font-medium text-gray-800" for="password">Password</label>\r\n					<input\r\n						id="password"\r\n						type="password"\r\n						autocomplete="current-password"\r\n						class="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"\r\n						formControlName="password"\r\n					/>\r\n					@if (submitted() && form.controls.password.invalid) {\r\n						<p class="mt-1 text-xs text-red-600">Password must be at least 6 characters.</p>\r\n					}\r\n				</div>\r\n\r\n				<button\r\n					type="submit"\r\n					class="h-11 w-full rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"\r\n					[disabled]="form.invalid"\r\n				>\r\n					Sign in\r\n				</button>\r\n			</div>\r\n\r\n			<div class="mt-5 flex items-center justify-between text-sm">\r\n				<a class="text-gray-700 hover:text-gray-900" routerLink="/auth/signup">Create account</a>\r\n				<a class="text-gray-700 hover:text-gray-900" routerLink="/auth/mfa">MFA code</a>\r\n			</div>\r\n		</form>\r\n\r\n		<p class="mt-6 text-center text-xs text-gray-500">\xA9 2026 Multilent Softwares Company</p>\r\n	</div>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\auth\signin\signin.css
var signin_default2;
var init_signin2 = __esm({
  "angular:jit:style:src\\app\\auth\\signin\\signin.css"() {
    signin_default2 = "/* src/app/auth/signin/signin.css */\n/*# sourceMappingURL=signin.css.map */\n";
  }
});

// src/app/auth/signin/signin.ts
var Signin, signin_default3;
var init_signin3 = __esm({
  "src/app/auth/signin/signin.ts"() {
    "use strict";
    init_tslib_es6();
    init_signin();
    init_signin2();
    init_core();
    init_forms();
    init_router();
    Signin = class Signin2 {
      fb = inject(NonNullableFormBuilder);
      submitted = signal(false);
      form = this.fb.group({
        email: this.fb.control("", { validators: [Validators.required, Validators.email] }),
        password: this.fb.control("", {
          validators: [Validators.required, Validators.minLength(6)]
        })
      });
      submit() {
        this.submitted.set(true);
        if (this.form.invalid) {
          return;
        }
      }
    };
    Signin = __decorate([
      Component({
        selector: "app-signin",
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [ReactiveFormsModule, RouterLink],
        template: signin_default,
        styles: [signin_default2]
      })
    ], Signin);
    signin_default3 = Signin;
  }
});

// src/app/auth/signin/signin.spec.ts
var require_signin_spec = __commonJS({
  "src/app/auth/signin/signin.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_signin3();
    describe("Signin", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [signin_default3],
          providers: [provideZonelessChangeDetection(), provideRouter([])]
        }).compileComponents();
        fixture = TestBed.createComponent(signin_default3);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_signin_spec();
//# sourceMappingURL=spec-signin.spec.js.map
