import { Component, Input, OnInit } from '@angular/core';
import { CodeModel } from 'src/app/model/code.model';
import { CodeService } from 'src/app/services/common/code.service';

@Component({
    selector: 'code-ss-code-item',
    templateUrl: './code-item.component.html',
    styleUrls: ['./code-item.component.scss']
})
export class CodeItemComponent {

    @Input() code: CodeModel

    constructor(
        public codeService: CodeService
    ) { }

    delete() {
        event.stopPropagation();
        this.codeService.deleteCode(this.code.Id).add(() => {
            this.codeService.loadCode("", true);
        });
    }
}
