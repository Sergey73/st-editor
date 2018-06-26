import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { EditPanelComponent } from './edit-panel/edit-panel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PathModeComponent } from './editors/path-mode/path-mode.component';
import { CheckpointModeComponent } from './editors/checkpoint-mode/checkpoint-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EditPanelComponent,
    PathModeComponent,
    CheckpointModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
