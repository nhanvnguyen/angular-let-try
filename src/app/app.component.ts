import { Component } from '@angular/core';
import { Product } from './user.model';
import { UsersService } from './users.service';
import { OnInit } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  getData!: Product[];

  
  constructor(
    private userService: UsersService
  ) {}


  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.userService.getAll()
    .subscribe((res) => {
      this.getData = res;
      
    })
  }
  submitData(value: any) {
    let newData = {
      userId: value.userId,
      body: value.body,
      title: value.title
    }
    this.userService.postData(newData)
    .subscribe(() => {
  })
}

  updateData(value: any, id: any){
    let newData = {
      userId: value.userId,
      body: value.body,
      title: value.title
    }
  this.userService.updateData(id , newData)
  .subscribe((res) => {
  })

}

  deleteData(id: any) {
    this.userService.delete(id)
    .subscribe(() => {
      this.getData = this.getData.filter((x:any) => x.id !== id);      
    })
  }

  getbyId(id: any) {
    this.userService.getbyId(id)
    .subscribe(() => {
      this.getData = this.getData.filter((x: any) => x.id == id);
    })
  }

}
