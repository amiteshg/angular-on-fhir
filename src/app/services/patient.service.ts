import {Component, Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {FhirService} from './fhir.service';

@Injectable()
@Component({
	providers: [Http, FhirService]
})
export class PatientService {

	private path = '/Patient';
	private patients;

	constructor(private fhirService: FhirService, private http: Http) {
		console.log("PatientService created...");
	}

	index(): Observable<any> {
		var url = this.fhirService.getUrl() + this.path;
		// this.http.get
		return this.http.get(url, this.fhirService.options()).map(res => res.json() );
	}

	get(id): Observable<any> {
		var url = this.fhirService.getUrl() + this.path + '/' + id;
		return this.http.get(url).map(res => res.json());
	}

}
