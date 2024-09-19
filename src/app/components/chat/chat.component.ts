import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() conversation: any;
  // @Output() onSubmit: EventEmitter<any>=new EventEmitter();
  emojiPickerVisible: any;
  message = '';
  constructor() { }

  ngOnInit(): void {
  }

  submitMessage(event: any) {
    let value = event.target.value.trim();
    this.message = '';
    this.conversation.message = value;
    this.conversation.messages.push({
      id: 1,
      body: value,
      time: '10:21',
      me: true
    });
  }

  emojiClicked(event: any) {
    this.message += event.emoji.native;
  }
}
