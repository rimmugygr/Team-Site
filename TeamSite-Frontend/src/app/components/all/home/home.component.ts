import { Component, OnInit } from '@angular/core';
import {IPost} from '../../../model/IPost';
import {PostService} from '../../../services/post.service';
import {IProfile} from '../../../model/IProfile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
