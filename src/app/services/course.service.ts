import { Injectable } from '@angular/core';
import {course} from '../course';

@Injectable()
export class CourseService {
private courses:course[];
  constructor() {
     this.courses=[
       {
         image:"angular2.png",
         name: "Angular 4",
         price: 21000,
         description: "A Component based client application framework"
        },
        {
          image:"asp.png",
          name: "ASP.NET",
          price: 11000,
          description: "Microsofts server side web language"
         },
         {
          image:"CSS3.png",
          name: "Angular 4",
          price: 10000,
          description: "A Webpage styling standard"
         },
         {
          image:"html5.png",
          name: "HTML 5",
          price: 10000,
          description: "Latest Standard for HTML"
         },
         {
          image:"java.png",
          name: "Java",
          price: 11000,
          description: "Platform neutral enterprise technology"
         },
         {
          image:"react.png",
          name: "React JS",
          price: 21000,
          description: "Facebooks UI Framework"
         },
         {
          image:"redhat.png",
          name: "Redhat",
          price: 21000,
          description: "Enterprise grade linux OS"
         },
         {
          image:"SQL.png",
          name: "SQL",
          price: 11000,
          description: "Standard language for RDBMS"
         }
     ]
   }

   getCourses():course[]{
     return this.courses;
   }

}
