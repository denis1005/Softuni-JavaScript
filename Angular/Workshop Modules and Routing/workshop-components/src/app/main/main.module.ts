import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { ThemesComponent } from './themes/themes.component';
import { MainComponent } from './main/main.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    PostsComponent,
    ThemesComponent,
    MainComponent,
    NewThemeComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PostsComponent,
    ThemesComponent,
    MainComponent,
    NewThemeComponent
  ]
})
export class MainModule { }
