import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  // @Input() user$: Observable<User>;
  @Input() isloggedIn$: Observable<boolean>;
  @Input() isloggedOut$: Observable<boolean>;
  ngOnInit() {
  }

}
