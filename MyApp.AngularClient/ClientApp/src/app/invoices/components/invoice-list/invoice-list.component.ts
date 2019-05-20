import { Component } from '@angular/core';
import { MatTableDataSource } from "@angular/material";

const ELEMENT_DATA: any[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
    selector: 'invoice-list',
    templateUrl: './invoice-list.component.html',
    styleUrls: ['./invoice-list.component.scss']
})
/** invoice-list component*/
export class InvoiceListComponent {
    /** invoice-list ctor */

    displayedColumns: string[];
    dataSource: MatTableDataSource<any>;

  constructor() {
      this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'context'];
      this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  }

  onDetailsClick(item) {
    console.log("details click");
    console.log(item);
  }
  onEditClick(item: any) {
    console.log("edit click");
    console.log(item);
  }
  onDeleteClick(item: any) {
    console.log("delete click");
    var index = this.dataSource.data.findIndex(d => d.position === item.position);

    if (index != -1) {
      var data = this.dataSource.data;
      data.splice(index, 1);
     
      this.dataSource = new MatTableDataSource<any>(data);
    }
  }
}
