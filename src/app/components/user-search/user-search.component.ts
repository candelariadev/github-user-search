import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { Subject } from 'rxjs/internal/Subject';
import { UserService } from '../../services/user.service';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-user-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss'
})
export class UserSearchComponent {
 private readonly searchSubject = new Subject<string>();
  users: User[] = [];
  isLoading = false;
  hasSearched = false;

  constructor(private readonly userService: UserService) {
this.searchSubject.pipe(
  tap(() => this.isLoading = true),
  debounceTime(400),
  distinctUntilChanged(),
  switchMap(query => this.userService.search(query)),
).subscribe(users => {
  this.users = users;
  this.isLoading = false;
});

  }
onSearch(event: Event) {
  const input = event.target as HTMLInputElement;
  this.searchSubject.next(input.value);
}




}
