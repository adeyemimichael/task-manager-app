import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { ManageComponent } from '../manage/manage.component';

@Component({
  selector: 'app-master',
  imports: [RolesComponent, ManageComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

}
