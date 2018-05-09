import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule}  from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { BannerComponent } from './banner/banner.component';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { HomeComponent } from './routes/home/home.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { NewcoursesComponent } from './routes/newcourses/newcourses.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { OffersComponent } from './routes/offers/offers.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CourseComponent } from './routes/home/course/course.component';
import {CourseService} from './services/course.service';
import { OffercodePipe } from './pipes/offercode.pipe';
import { FilterpricePipe } from './pipes/filterprice.pipe';
const routes=[
  {path:"",component: HomeComponent},
  {path:"offices",component: OfficesComponent},
  {path:"newcourses",component: NewcoursesComponent},
  {path:"offers",component: OffersComponent},
  {path:"vclass",component: VirtualclassComponent},
  {path:"reviews",component: ReviewsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    BannerComponent,
    EnquiryformComponent,
    HomeComponent,
    OfficesComponent,
    NewcoursesComponent,
    ReviewsComponent,
    OffersComponent,
    VirtualclassComponent,
    CourselistComponent,
    CourseComponent,
    OffercodePipe,
    FilterpricePipe
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
