import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesComponent } from './main/themes/themes.component';
import { PostsComponent } from './main/posts/posts.component';
import { DataService } from './data.service';
import { CoreModule } from './core/core.module';
import { AutModule } from './aut/aut.module';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AutModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
   
    MainModule,
    SharedModule
  ],
  providers: [
   
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
