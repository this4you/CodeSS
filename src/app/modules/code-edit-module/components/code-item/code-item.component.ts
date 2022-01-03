import { Component, Input, OnInit } from '@angular/core';
import { CodeModel } from 'src/app/model/code.model';

@Component({
    selector: 'code-ss-code-item',
    templateUrl: './code-item.component.html',
    styleUrls: ['./code-item.component.scss']
})
export class CodeItemComponent implements OnInit {

    @Input() code : CodeModel

    constructor() { }

    ngOnInit(): void {
    }

}
