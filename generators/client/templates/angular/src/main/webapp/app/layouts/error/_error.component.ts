import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';

@Component({
    selector: '<%=jhiPrefix%>-error',
    templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {
    errorMessage: string;
    error403: boolean;

    constructor(
        private languageService: JhiLanguageService
    ) {
        this.languageService.setLocations(['error']);
    }

    ngOnInit() {
        // TODO need to see how the error message can be passed here
    }
}
