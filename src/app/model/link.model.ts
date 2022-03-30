import { BaseModel } from "./base.model"
export class Link implements BaseModel {
    id: string;
    createdOn: Date;
    updateOn: Date;

    title: string;
    url: string;
    description: string;
};