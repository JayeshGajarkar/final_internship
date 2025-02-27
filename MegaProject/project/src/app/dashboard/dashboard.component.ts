import { Component, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../models/model';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  @ViewChild('chatBox') chatBox!: ElementRef;
  userMessage: string = '';
  messages: Message[] = [];
  isTyping: boolean = false;
  botMessage: string = 'This is a response from the chatbot.';

  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ text: this.userMessage, user: true });
      this.userMessage = '';
      this.scrollToBottom();
      this.getBotResponse();
    }
  }

  getBotResponse() {
    this.isTyping = true;
    let botResponse = '';
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < this.botMessage.length) {
        botResponse += this.botMessage[index];
        index++;
        this.updateBotMessage(botResponse);
      } else {
        clearInterval(typingInterval);
        this.isTyping = false;
        this.scrollToBottom();
      }
    }, 50); 
  }

  updateBotMessage(botResponse: string) {
    if (this.messages.length === 0 || this.messages[this.messages.length - 1].user) {
      this.messages.push({ text: botResponse, user: false });
    } else {
      this.messages[this.messages.length - 1].text = botResponse;
    }
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
    } catch (err) {}
  }
}