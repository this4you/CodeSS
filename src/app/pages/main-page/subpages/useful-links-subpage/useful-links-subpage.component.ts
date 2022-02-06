import { Component, OnInit } from '@angular/core';

export type LinkModel = {
  Name: string;
  Description: string;
  Url: string;
};

const ELEMENT_DATA: LinkModel[] = [
  {Name: "Test", Description: "Description", Url: "http://example.com"},
  {Name: "Test", Description: "Description", Url: "http://example.com"},
  {Name: "Test", Description: "Description", Url: "http://example.com"},
  {Name: "Test", Description: "Description", Url: "http://example.com"},
  {Name: "Test", Description: "Description", Url: "http://example.com"},
  {Name: "Test", Description: "Description", Url: "http://example.com"},
  {Name: "Test", Description: "Description", Url: "http://example.com"},
];


@Component({
  selector: 'code-ss-useful-links-subpage',
  templateUrl: './useful-links-subpage.component.html',
  styleUrls: ['./useful-links-subpage.component.scss']
})
export class UsefulLinksSubpageComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Url', 'Description'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
