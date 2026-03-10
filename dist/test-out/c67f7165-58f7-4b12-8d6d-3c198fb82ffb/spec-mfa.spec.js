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

// angular:jit:template:src\app\auth\mfa\mfa.html
var mfa_default;
var init_mfa = __esm({
  "angular:jit:template:src\\app\\auth\\mfa\\mfa.html"() {
    mfa_default = '<div class="flex min-h-dvh items-center justify-center bg-gray-50 px-4 py-10">\r\n	<div class="w-full max-w-md">\r\n		<div class="mb-6 text-center">\r\n			<div class="text-2xl font-semibold tracking-tight text-gray-900">Updater</div>\r\n			<div class="mt-1 text-sm text-gray-600">Enter your 6-digit authentication code.</div>\r\n		</div>\r\n\r\n		<form\r\n			class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"\r\n			[formGroup]="form"\r\n			(ngSubmit)="verify()"\r\n			novalidate\r\n		>\r\n			<div>\r\n				<label class="mb-1 block text-sm font-medium text-gray-800" for="code">Code</label>\r\n				<input\r\n					id="code"\r\n					type="text"\r\n					inputmode="numeric"\r\n					autocomplete="one-time-code"\r\n					maxlength="6"\r\n					class="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"\r\n					formControlName="code"\r\n				/>\r\n				@if (submitted() && form.controls.code.invalid) {\r\n					<p class="mt-1 text-xs text-red-600">Enter a valid 6-digit code.</p>\r\n				}\r\n			</div>\r\n\r\n			<button\r\n				type="submit"\r\n				class="mt-4 h-11 w-full rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"\r\n				[disabled]="form.invalid"\r\n			>\r\n				Verify\r\n			</button>\r\n\r\n			<div class="mt-5 text-center text-sm">\r\n				<a class="text-gray-700 hover:text-gray-900" routerLink="/auth/login">Back to sign in</a>\r\n			</div>\r\n		</form>\r\n\r\n		<p class="mt-6 text-center text-xs text-gray-500">\xA9 2026 Multilent Softwares Company</p>\r\n	</div>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\auth\mfa\mfa.css
var mfa_default2;
var init_mfa2 = __esm({
  "angular:jit:style:src\\app\\auth\\mfa\\mfa.css"() {
    mfa_default2 = "/* src/app/auth/mfa/mfa.css */\n/*# sourceMappingURL=mfa.css.map */\n";
  }
});

// src/app/auth/mfa/mfa.ts
var Mfa, mfa_default3;
var init_mfa3 = __esm({
  "src/app/auth/mfa/mfa.ts"() {
    "use strict";
    init_tslib_es6();
    init_mfa();
    init_mfa2();
    init_core();
    init_forms();
    init_router();
    Mfa = class Mfa2 {
      fb = inject(NonNullableFormBuilder);
      submitted = signal(false);
      form = this.fb.group({
        code: this.fb.control("", {
          validators: [Validators.required, Validators.pattern(/^\d{6}$/)]
        })
      });
      verify() {
        this.submitted.set(true);
        if (this.form.invalid) {
          return;
        }
      }
    };
    Mfa = __decorate([
      Component({
        selector: "app-mfa",
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [ReactiveFormsModule, RouterLink],
        template: mfa_default,
        styles: [mfa_default2]
      })
    ], Mfa);
    mfa_default3 = Mfa;
  }
});

// src/app/auth/mfa/mfa.spec.ts
var require_mfa_spec = __commonJS({
  "src/app/auth/mfa/mfa.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_mfa3();
    describe("Mfa", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [mfa_default3],
          providers: [provideZonelessChangeDetection(), provideRouter([])]
        }).compileComponents();
        fixture = TestBed.createComponent(mfa_default3);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_mfa_spec();
//# sourceMappingURL=spec-mfa.spec.js.map
