import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
  <div *ngIf="temErro()">
    <small class="p-message p-message-error">{{ text }}</small>
  </div>
  `,
  styles: [
  ]
})
export class MessageComponent implements OnInit {

  @Input() control : FormControl ;
  @Input() error : string;
  @Input() text : string ;

  constructor() { }

  ngOnInit(): void {
  }

  temErro() : boolean  {
    return this.control.hasError(this.error) && this.control.dirty;
  }



}
