import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {


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


