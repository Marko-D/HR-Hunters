import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { ApplicationService } from "src/app/services/application.service";
import { Application } from "src/app/models/application.model";

@Component({
  selector: "app-application-details",
  templateUrl: "./application-details.component.html",
  styleUrls: ["./application-details.component.scss"]
})
export class ApplicationDetailsComponent implements OnInit {
  application: Application = {
    id: null,
    jobTitle: null,
    jobType: null,
    description: null,
    dateFrom: null,
    dateTo: null
  };

  loggedInUser;
  loading = false;

  private applicationSub: Subscription;

  constructor(
    private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.loading = true;
    this.loggedInUser = this.authService.getUser();
    this.application.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'))
    this.applicationService.getApplication(this.application.id);
    this.applicationSub = this.applicationService.getApplicationListener().subscribe(
      applicationData => {
        this.application = applicationData.application
        this.loading = false;
      }
    )
  }

  ngOnDestroy() {
    this.applicationSub.unsubscribe();
  }
}
