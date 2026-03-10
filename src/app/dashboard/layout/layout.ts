import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PopoverModule } from 'primeng/popover';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Navigation } from '../navigation/navigation';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, ConfirmDialogModule, PopoverModule, Navigation, MenuModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  private auth = inject(AuthService);
  private router = inject(Router);

  logout(): void {
    this.auth
      .logout()
      .subscribe({
        next: () => void this.router.navigateByUrl('/auth/login'),
        error: () => void this.router.navigateByUrl('/auth/login'),
      });
  }
}
