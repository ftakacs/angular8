import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService){}

  ngOnInit() {}

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
