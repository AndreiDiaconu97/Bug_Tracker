import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BugTrackerApiService } from 'src/app/bugtrackerapi.service';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.css']
})
export class AddEditProjectComponent implements OnInit {

  projectList$!: Observable<any[]>;
  userList$!: Observable<any[]>;

  constructor(private service: BugTrackerApiService) { }

  @Input() project: any; // receive from the parent component
  id: number = 0;
  name: string = "";
  description: string = "";
  userId!: number;

  ngOnInit(): void {
    this.id = this.project.id;
    this.name = this.project.name;
    this.description = this.project.description;
    this.userId = this.project.userId;

    this.projectList$ = this.service.getProjectList();
    this.userList$ = this.service.getUserList();
  }

  addProject() {
    var project = {
      // id: this.id, // not needed for POST
      name: this.name,
      description: this.description,
      userId: this.userId
    }

    this.service.addProject(project).subscribe(() => {
      // automatically close the the inspection if it has been added successfully
      var closeModalBtn = document.getElementById('add-edit-modal-close-btn');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      // display a success message for 4 seconds
      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = 'block';
      }
      setTimeout(() => {
        if (showAddSuccess) {
          showAddSuccess.style.display = 'none';
        }
      }, 4000);
    })
  }

  updateProject() {
    var project = {
      id: this.id, // needed for PUT
      name: this.name,
      description: this.description,
      userId: this.userId
    }
    var id: number = this.id
    this.service.updateProject(id, project).subscribe(() => {
      // automatically close the the inspection if it has been added successfully
      var closeModalBtn = document.getElementById('add-edit-modal-close-btn');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      // display a success message for 4 seconds
      var showUpdateSuccess = document.getElementById('update-success-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.style.display = 'block';
      }
      setTimeout(() => {
        if (showUpdateSuccess) {
          showUpdateSuccess.style.display = 'none';
        }
      }, 4000);
    })
  }
}
