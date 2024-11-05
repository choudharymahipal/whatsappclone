import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { CommonService } from './Services/common.service';
import { StatusComponent } from './components/sidebar/status/status.component';
import { ChannelComponent } from './components/sidebar/channel/channel.component';
import { CommunitiesComponent } from './components/sidebar/communities/communities.component';
import { SettingsComponent } from './components/sidebar/settings/settings.component';
import { ProfileComponent } from './components/sidebar/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChatComponent,
    StatusComponent,
    ChannelComponent,
    CommunitiesComponent,
    SettingsComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PickerModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
