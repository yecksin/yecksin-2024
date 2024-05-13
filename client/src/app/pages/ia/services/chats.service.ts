import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  chats = signal([
    { title: 'English', checked: true, icon: 'person', id: 1 },
    { title: 'Example 2', icon: 'person', id: 2 },
    { title: 'Example 3', icon: 'person', id: 3 },
  ]);
  constructor() {}
}
