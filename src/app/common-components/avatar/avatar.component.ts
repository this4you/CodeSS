import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'code-ss-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
    @Input() Login: string = '';
    @Input() ImgUrl: string = '';
    @Input() Size: number = 150;

    public getSizeStyle() { 
        return `
        width:${this.Size}px;
        height:${this.Size}px;
        font-size:${this.Size / 3}px;
        border-radius:${this.Size * 2}px;`;
    }

    constructor() { }

    ngOnInit(): void {
    }

}
