import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BugTrackerApiService } from 'src/app/bugtrackerapi.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectList$!: Observable<any[]>;
  userList$!: Observable<any[]>;
  userList: any = [];

  // Map to display data associate with foreign keys
  usersMap: Map<number, string> = new Map();

  constructor(private service: BugTrackerApiService) { }

  ngOnInit(): void {
    this.projectList$ = this.service.getProjectList();
    this.userList$ = this.service.getUserList();
    this.refreshUsersMap();
  }

  // Variables (properties)
  modalTitle: string = "";
  activateAddEditProjectComponent: boolean = false;
  project: any;

  modalAdd() {
    this.project = {
      id: 0, // value used by form to determine if it is an add or edit (0=add, >0=edit)
      name: null,
      description: null,
      userId: null,
    }
    this.modalTitle = "Add Project";
    this.activateAddEditProjectComponent = true;
  }

  modalEdit(project: any) {
    this.project = project;
    this.modalTitle = "Edit Project";
    this.activateAddEditProjectComponent = true;
  }

  delete(project: any) {
    if (confirm(`Are you sure you want to delete project "${project.name}"?`)) {
      this.service.deleteProject(project.id).subscribe(() => {

        // display a success message for 4 seconds
        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = 'block';
        }
        setTimeout(() => {
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = 'none';
          }
        }, 4000);
        this.projectList$ = this.service.getProjectList(); // refresh the list
      })
    }
  }

  modalClose() {
    this.activateAddEditProjectComponent = false;
    this.projectList$ = this.service.getProjectList(); // refresh the list
  }

  refreshUsersMap() {
    this.service.getUserList().subscribe(users => {
      this.userList = users;

      for (let i = 0; i < users.length; i++) {
        this.usersMap.set(this.userList[i].id, this.userList[i].name);
      }
    })
  }

}
