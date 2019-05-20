import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'context-menu',
    templateUrl: './context-menu.component.html',
    styleUrls: ['./context-menu.component.scss']
})
/** context-menu component*/
export class ContextMenuComponent {
  @Input() item: any;
  @Output() detailsClick: EventEmitter<any> = new EventEmitter();
  @Output() editClick: EventEmitter<any> = new EventEmitter();
  @Output() deleteClick: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  onDetailsClick(e: any) {
    console.log(JSON.stringify(this.item));
    this.detailsClick.emit(this.item);

  }
  onEditClick(e: any) {
    this.editClick.emit(this.item);

  }
  onDeleteClick(e: any) {
    this.deleteClick.emit(this.item);

  }
}
