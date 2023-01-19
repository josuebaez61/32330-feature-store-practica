import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  public data = [];
  public displayedColumns = ['id', 'avatar', 'first_name', 'last_name', 'email'];
  public perPageOptions = [3, 6, 12, 18]
  public perPage = 3;
  constructor(public usersService: UsersService) {
    this.usersService.loadUsers(1, this.perPage);
  }

  onPageChange(ev: PageEvent) {
    this.usersService.loadUsers(ev.pageIndex + 1, ev.pageSize);
  }
}
