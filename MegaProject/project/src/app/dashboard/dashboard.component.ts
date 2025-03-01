import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Message } from '../models/model';
import { DataService } from '../services/data.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone:false
})
export class DashboardComponent implements OnInit{
  @ViewChild('chatBox') chatBox!: ElementRef;
  userMessage: string = '';
  messages!: Message[];
  isTyping: boolean = false;
  botMessage: string = '';
  botTextIndex: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.messages=this.dataService.getMessages();
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ text: this.userMessage, user: true });
      const userQuery = this.userMessage;
      this.userMessage = '';
      this.scrollToBottom();
      this.isTyping = true;

      this.dataService.getResponce(userQuery).pipe(take(1)).subscribe(
        (data) => {
          this.botMessage = data.response;
          this.messages.push({ text: '', user: false }); 
          this.botTextIndex = 0;
          this.animateBotResponse();
          console.log(this.messages);
        },
        (error) => {
          console.error(error);
          this.isTyping = false;
        }
      );
    }
  }

  animateBotResponse() {
    const interval = setInterval(() => {
      if (this.botTextIndex < this.botMessage.length) {
        this.messages[this.messages.length - 1].text = this.botMessage.substring(0, this.botTextIndex + 1);
        this.botTextIndex++;
        this.scrollToBottom();
      } else {
        clearInterval(interval);
        this.isTyping = false;
      }
    }, 25);
  }

  scrollToBottom() {
    setTimeout(() => {
      try {
        this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
      } catch (err) {}
    }, 100);
  }

  resetChat(){
    this.dataService.resetMessages();
  }
  
}
