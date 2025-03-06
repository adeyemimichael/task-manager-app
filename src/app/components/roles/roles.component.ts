import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  roleList: IRole [] =[]
http = inject(HttpClient);


ngOnInit(): void {
this.getAllroles()
} 

getAllroles (){
this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)  => {
this.roleList = res.data;

})
}
















firstName: string = "Angular jS"
secondName:string ="Bolaji"
lastName: string =" Adeoluwa"
isActive: boolean = true 
figure: number = 23
 currentDate: Date = new Date()
inputType:string = "text"
selectDate:string =""
firstFunction (){
  alert("this is my first click function on angular")
}



secondFunction (message:string) {
  alert (message)
}
}


