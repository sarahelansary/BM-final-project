import { Component } from '@angular/core';
// import { ProfileService, user } from '../profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  // user1: user | null = null;
  // constructor(private profileService: ProfileService) {}
  // ngOnInit(): void {
  //   this.user1 = this.profileService.getUser();
  // }
  // getUserInitials(): string {
  //   if (this.user1) {
  //     const { fname, lname } = this.user1;
  //     const firstInitial = fname ? fname[0] : '';
  //     const lastInitial = lname ? lname[0] : '';
  //     return `${firstInitial}${lastInitial}`.toUpperCase();
  //   }
  //   return '';
  // }
}
