import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { ManageComponent } from '../manage/manage.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [RolesComponent, ManageComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
 currentPage: string = "Roles"
 changeTab (tabName: string){
this.currentPage =  tabName;
 }
}
