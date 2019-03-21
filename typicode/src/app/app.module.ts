import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoPostsComponent } from './cmp-http/listado-posts/listado-posts.component';
import { PostComponent } from './cmp-http/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { ComentariosComponent } from './cmp-http/comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPostsComponent,
    PostComponent,
    ComentariosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
