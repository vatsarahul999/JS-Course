import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { User } from '../../models/user';

@Component({
  selector: 'app-action-cell',
  templateUrl: './action-cell.component.html',
  styleUrls: ['./action-cell.component.css']
})
export class ActionCellComponent implements ICellRendererAngularComp {

  params: ICellRendererParams<any, any> | undefined;

  agInit(params: ICellRendererParams<any, any>): void {
    this.params = params;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  edit() {
    this.params?.context.componentParent.editUser(this.params.data);
  }
  delete() {
    this.params?.context.componentParent.deleteUser(this.params.data?.id ?? undefined);
  }


  
}
