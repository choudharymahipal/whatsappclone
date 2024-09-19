import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  onSearch: string = '';
  conversations = [
    {
      name: "Thulasi", time: "8:30", message: "Let's go", readMessage: false,
      messages: [
        { id: 1, body: "Hello!", time: '8:25', me: true },
        { id: 1, body: "Hi,Where are u now?", time: '8:26', me: false },
        { id: 1, body: "In the university", time: '8:27', me: true },
        { id: 1, body: "Ok, wait I'll come", time: '8:28', me: false },
      ]
    },
    {
      name: "Gajani", time: "2:20", message: "Hmm", readMessage: true, messages: [
        { id: 1, body: "Hello!", time: '8:25', me: true },
        { id: 1, body: "Hi,Where are u now?", time: '8:26', me: false },
        { id: 1, body: "In the university", time: '8:27', me: true },
        { id: 1, body: "Ok, wait I'll come", time: '8:28', me: false },
      ]
    },
    {
      name: "Vigani", time: "3:32", message: "Fine", readMessage: false, messages: [
        { id: 1, body: "Hello!", time: '8:25', me: true },
        { id: 1, body: "Hi,Where are u now?", time: '8:26', me: false },
        { id: 1, body: "In the university", time: '8:27', me: true },
        { id: 1, body: "Ok, wait I'll come", time: '8:28', me: false },
      ]
    },
    {
      name: "Asvi", time: "4:50", message: "Alright", readMessage: true, messages: [
        { id: 1, body: "Hello!", time: '8:25', me: true },
        { id: 1, body: "Hi,Where are u now?", time: '8:26', me: false },
        { id: 1, body: "In the university", time: '8:27', me: true },
        { id: 1, body: "Ok, wait I'll come", time: '8:28', me: false },
      ]
    },
    {
      name: "Mathura", time: "7:34", message: "Ok", readMessage: true, messages: [
        { id: 1, body: "Hello!", time: '8:25', me: true },
        { id: 1, body: "Hi,Where are u now?", time: '8:26', me: false },
        { id: 1, body: "In the university", time: '8:27', me: true },
        { id: 1, body: "Ok, wait I'll come", time: '8:28', me: false },
      ]
    },
    {
      name: "Vinoji", time: "10:28", message: "Let's see", readMessage: false, messages: [
        { id: 1, body: "Hello!", time: '8:25', me: true },
        { id: 1, body: "Hi,Where are u now?", time: '8:26', me: false },
        { id: 1, body: "In the university", time: '8:27', me: true },
        { id: 1, body: "Ok, wait I'll come", time: '8:28', me: false },
      ]
    },
    {
      name: "Vithu", time: "6:24", message: "Yeah", readMessage: true, messages: [
        { id: 1, body: "Hello!", time: '8:25', me: true },
        { id: 1, body: "Hi,Where are u now?", time: '8:26', me: false },
        { id: 1, body: "In the university", time: '8:27', me: true },
        { id: 1, body: "Ok, wait I'll come", time: '8:28', me: false },
      ]
    },
    {
      name: "Vanu", time: "5:25", message: "It's ok", readMessage: false, messages: [
        { id: 1, body: "Hello!", time: '8:25', me: true },
        { id: 1, body: "Hi,Where are u now?", time: '8:26', me: false },
        { id: 1, body: "In the university", time: '8:27', me: true },
        { id: 1, body: "Ok, wait I'll come", time: '8:28', me: false },
      ]
    },
    {
      name: "Tharani", time: "7:30", message: "Bye", readMessage: true, messages: [
        { id: 1, body: "Hello!", time: '8:25', me: true },
        { id: 1, body: "Hi,Where are u now?", time: '8:26', me: false },
        { id: 1, body: "In the university", time: '8:27', me: true },
        { id: 1, body: "Ok, wait I'll come", time: '8:28', me: false },
      ]
    },
    {
      name: "Vinthu", time: "1.30", message: "Np", readMessage: false, messages: [
        { id: 1, body: "Hello!", time: '8:25', me: true },
        { id: 1, body: "Hi,Where are u now?", time: '8:26', me: false },
        { id: 1, body: "In the university", time: '8:27', me: true },
        { id: 1, body: "Ok, wait I'll come", time: '8:28', me: false },
      ]
    },
  ];

  filteredConversation() {
    return this.conversations.filter((conversation) => {
      return conversation.name.toLocaleLowerCase().includes(this.onSearch.toLowerCase()) ||
        conversation.message.toLocaleLowerCase().includes(this.onSearch.toLowerCase());
    })
  }
  constructor() { }

  ngOnInit(): void {
  }

}
