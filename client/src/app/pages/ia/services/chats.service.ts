import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  chats = signal([
    signal({
      title: 'English',
      checked: true,
      icon: 'person',
      id: 1,
      messages: [
        { text: 'Hello', date: new Date(), sender: 'me' },
        { text: 'Hi', date: new Date(), sender: 'them' },
        { text: 'How are you?', date: new Date(), sender: 'me' },
        { text: 'I am fine', date: new Date(), sender: 'them' },
        { text: 'Goodbye', date: new Date(), sender: 'me' },
        { text: 'Bye', date: new Date(), sender: 'them' },
      ],
    }),
    signal({
      title: 'Example 2',
      checked: false,
      icon: 'person',
      id: 2,
      messages: [
        { text: 'Hello gpt', date: new Date(), sender: 'me' },
        { text: 'Hi', date: new Date(), sender: 'them' },
        { text: 'How are you doing?', date: new Date(), sender: 'me' },
        { text: 'Hello', date: new Date(), sender: 'me' },
        { text: 'Hi', date: new Date(), sender: 'them' },
        { text: 'How are you?', date: new Date(), sender: 'me' },
        { text: 'I am fine', date: new Date(), sender: 'them' },
        { text: 'Goodbye', date: new Date(), sender: 'me' },
        { text: 'Bye', date: new Date(), sender: 'them' },
        { text: 'Hello', date: new Date(), sender: 'me' },
        { text: 'Hi', date: new Date(), sender: 'them' },
        { text: 'How are you?', date: new Date(), sender: 'me' },
        { text: 'I am fine', date: new Date(), sender: 'them' },
        { text: 'Goodbye', date: new Date(), sender: 'me' },
        { text: 'Bye', date: new Date(), sender: 'them' },
      ],
    }),
    signal({
      title: 'Example 3',
      checked: false,
      icon: 'person',
      id: 3,
      messages: [
        { text: 'This is an example', date: new Date(), sender: 'me' },
        { text: 'Hi ok', date: new Date(), sender: 'them' },
        { text: 'What is your name?', date: new Date(), sender: 'me' },
        { text: 'I am a bot', date: new Date(), sender: 'them' },
      ],
    }),
  ]);
}
