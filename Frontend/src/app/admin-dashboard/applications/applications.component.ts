import { Component, OnInit, OnDestroy } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";
import { Subscription } from "rxjs";
import { Application } from "src/app/models/application.model";

@Component({
  selector: "app-ad-applications",
  templateUrl: "./applications.component.html",
  styleUrls: ["./applications.component.scss"]
})
export class ADApplicationsComponent implements OnInit, OnDestroy {
  dummyData: Application[] = [
    {
      applicantEmail: "mail",
      applicantName: "Kire",
      experience: 1,
      jobTitle: "Front",
      postedOn: Date.now().toString(),
      status: "Pending"
    },
    {
      applicantEmail: "mail",
      applicantName: "Pero",
      experience: 9,
      jobTitle: "Front",
      postedOn: Date.now().toString(),
      status: "Hired"
    },
    {
      applicantEmail: "ivo@mail.com",
      applicantName: "Ivo",
      experience: 1,
      jobTitle: "Frontend",
      postedOn: Date.now().toString(),
      status: "Interviewed"
    },
    {
      applicantEmail: "tijana@mail.com",
      applicantName: "Tijana",
      experience: 2,
      jobTitle: "Frontend",
      postedOn: Date.now().toString(),
      status: "Pending"
    },
    {
      applicantEmail: "tome@mail.com",
      applicantName: "Tome",
      experience: 1,
      jobTitle: "Backend",
      postedOn: Date.now().toString(),
      status: "Pending"
    },
    {
      applicantEmail: "mail",
      applicantName: "Draga",
      experience: 1,
      jobTitle: "QA",
      postedOn: Date.now().toString(),
      status: "Contacted"
    },
    {
      applicantEmail: "mail",
      applicantName: "Marko",
      experience: 1,
      jobTitle: "Front",
      postedOn: Date.now().toString(),
      status: "Pending"
    },
    {
      applicantEmail: "mail",
      applicantName: "Viktor",
      experience: 3,
      jobTitle: "Front",
      postedOn: Date.now().toString(),
      status: "Rejected"
    },
    {
      applicantEmail: "mail",
      applicantName: "David",
      experience: 1,
      jobTitle: "Front",
      postedOn: Date.now().toString(),
      status: "Rejected"
    },
    {
      applicantEmail: "vlatko@mail.com",
      applicantName: "Vlatko",
      experience: 2,
      jobTitle: "Backend",
      postedOn: Date.now().toString(),
      status: "Pending"
    }
  ];

  applicationCount = {
    all: 11,
    pending: 1,
    contacted: 2,
    interviewed: 3,
    rejected: 5,
  };
  applications: Application[] = [];
  postsPerPage = 10;
  currentPage = 1;
  currentSortBy = "Posted";
  currentSortDirection = 1;
  currentFilter = "All";
  private applicationsSub: Subscription;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    // this.adminService.getApplications(this.postsPerPage, this.currentPage, this.currentSortBy, this.currentSortDirection, this.currentFilter);
    // this.adminService
    //   .getApplicationsUpdateListener()
    //   .subscribe(
    //     (applicationsData: {
    //       applications: Application[];
    //       applicationsCount: number;
    //     }) => {
    //       this.applicationCount.all = applicationsData.applicationsCount;
    //       this.applications = applicationsData.applications;
    //     }
    //   );
  }

  onChangedPage(pageData: any) {
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.currentFilter = pageData.filterBy;
    this.currentSortBy = pageData.sortedBy;
    this.currentSortDirection = pageData.sortDirection;
    this.adminService.getApplications(
      this.postsPerPage,
      this.currentPage,
      this.currentSortBy,
      this.currentSortDirection,
      this.currentFilter
    );
  }

  onFilter(pageData: any) {
    this.currentPage = pageData.pageIndex;
    this.postsPerPage = pageData.pageSize;
    // this.currentFilter = the cliecked el;
    this.currentSortBy = pageData.sortedBy;
    this.currentSortDirection = pageData.sortDirection;
    this.adminService.getApplications(
      this.postsPerPage,
      this.currentPage,
      this.currentSortBy,
      this.currentSortDirection,
      this.currentFilter
    );
  }

  onSort(pageData: any) {
    this.currentPage = pageData.pageIndex;
    this.postsPerPage = pageData.pageSize;
    this.currentFilter = pageData.filterBy;
    // this.currentSortBy = the cliecked el;
    this.currentSortDirection = pageData.sortDirection + 1;
    this.adminService.getApplications(
      this.postsPerPage,
      this.currentPage,
      this.currentSortBy,
      this.currentSortDirection,
      this.currentFilter
    );
  }

  chooseStatus(event: any) {
    const currentStatus = event.target.innerText;
  }

  ngOnDestroy() {
    // this.applicationsSub.unsubscribe();
  }
}
