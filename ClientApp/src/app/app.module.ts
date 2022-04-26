import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { BugTrackerApiService } from './bugtrackerapi.service';
import { AddEditProjectComponent } from './dashboard/projects/add-edit-project/add-edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectsComponent,
    AddEditProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BugTrackerApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
