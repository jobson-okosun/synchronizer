import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PopoverModule } from 'primeng/popover';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Navigation } from '../navigation/navigation';
import { MenuModule } from 'primeng/menu';
import DataService from '../../services/data';
import { finalize } from 'rxjs';
import { Server, Session } from '../../models/types';

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
  private _dataService = inject(DataService)
  
  authData = computed(() => this.auth.authData())
  size = signal(20000000)
  page = signal(1)

  selectedSession = computed(() => this._dataService.selectedSession())
  currentSession = computed(() => this._dataService.currentSession())
  sessions = computed(() => this._dataService.sessions())
  selectedServer = computed(() => this._dataService.selectedServer())
  serverTypes = computed(() => Object.keys(this._dataService.serverTypes()))

  ngOnInit() {
    this._dataService.fetchSessionsData()
    this._dataService.fetchCurrentSession()
  }

  selectSession(session: Session) {
    this._dataService.selectedSession.set(session)
  }

  selectServer(server: string) {
    this._dataService.selectedServer.set(server as Server)
  }

  logout(): void {
    this.auth
      .logout()
      .pipe(finalize(() => void this.router.navigateByUrl('/auth/login')))
      .subscribe();
  }
}
