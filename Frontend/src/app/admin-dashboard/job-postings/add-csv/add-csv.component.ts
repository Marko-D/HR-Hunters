import { Component, ViewChild } from "@angular/core";
import { Client } from "src/app/models/client.model";
import { ClientService } from "src/app/services/client.service";
import { Subscription, Subject, Observable, merge } from "rxjs";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { NgbTypeahead } from "@ng-bootstrap/ng-bootstrap";
import {FileValidator} from '../../../validators/file-input.validator'
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map
} from "rxjs/operators";
import {CommonService } from "src/app/services/common.service";
@Component({
  selector: "app-add-csv",
  templateUrl: "./add-csv.component.html",
  styleUrls: ['./add-csv.component.scss']
})
export class AddCSVComponent {
  @ViewChild("instance") instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  validClient = false;
  clients: Client[] = [];
  clientNames: string[] = [];
  loggedInUser;
  loading = false;

  selectedCompany: Client = {
    id: null,
    email: null,
    companyName: null,
    activeJobs: null,
    allJobs: null,
    status: null,
    location: null
  };

  private clientsSub: Subscription;

  constructor(
    private clientService: ClientService,
    private fb: FormBuilder,
    private authService: AuthService,
    private _service: CommonService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.loggedInUser = this.authService.getUser();
    const params = this.buildQueryParams();
    this.clientService.getClients(params);
    this.clientsSub = this.clientService
      .getClientsUpdateListener()
      .subscribe(clientsData => {
        this.clients = clientsData.clients;
        clientsData.clients.forEach(c => {
          this.clientNames.push(c.companyName);
        });
        this.loading = false;
      });
  }

  newCSVForm = this.fb.group({
    companyName: [
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ])
    ],
    csv: [
      '',
      Validators.compose([
        Validators.required,FileValidator.validate
      ])
    ]
  });

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this.instance.isPopupOpen())
    );
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term =>
        (term === ""
          ? this.clientNames
          : this.clientNames.filter(
              v => v.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        ).slice(0, 10)
      )
    );
  };

  buildQueryParams() {
    return `?pageSize=0&currentPage=0&id=${this.loggedInUser.id}`;
  }

  checkCompanyValidity() {
    this.validClient = false;
    this.clients.forEach(c => {
      if (this.newCSVForm.value.companyName === c.companyName) {
        this.validClient = true;
        this.selectedCompany = c;
      }
    });
  }

//  upload
  upload(event: any) {
    let files = event.target.files;
    //check file is valid
    if (!this.validateFile(files[0].name)) {
        console.log('Selected file format is not supported');
        return false;
    }

    let fData: FormData = new FormData;

    for (var i = 0; i < files.length; i++) {
        fData.append("file", files[i]);
    }
    var _data = {
        filename: 'Sample File',
        id: '0001'
    }

    fData.append("data", JSON.stringify(_data));
    this._service.uploadFile(fData).subscribe(
        response => console.log(response),
        error => console.log(error)
    )
}

validateFile(name: String) {
  var ext = name.substring(name.lastIndexOf('.') + 1);
  if (ext.toLowerCase() == 'csv') {
      return true;
  }
  else {
      return false;
  }
}
  onSubmitCSV() {
      
  }
}
