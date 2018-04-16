import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit {

  // TODO replace with firebase data
  public dummyData = [
    {
      message: 'Sed enim velit, condimentum nec tincidutn non, elemendo sed nisi.',
      createdAt: new Date(),
      sender: {
        firstName: 'Bob',
        lastName: 'Anderson',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    },
    {
      message: 'Sed enim velit, condimentum nec tincidutn non, elemendo sed nisi.',
      createdAt: new Date(),
      sender: {
        firstName: 'Steve',
        lastName: 'Smith',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    },
    {
      message: 'Sed enim velit, condimentum nec tincidutn non, elemendo sed nisi.',
      createdAt: new Date(),
      sender: {
        firstName: 'Bob',
        lastName: 'Anderson',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    },
    {
      message: 'Sed enim velit, condimentum nec tincidutn non, elemendo sed nisi.',
      createdAt: new Date(),
      sender: {
        firstName: 'Bob',
        lastName: 'Anderson',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    },
    {
      message: 'Sed enim velit, condimentum nec tincidutn non, elemendo sed nisi.',
      createdAt: new Date(),
      sender: {
        firstName: 'Bob',
        lastName: 'Anderson',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
