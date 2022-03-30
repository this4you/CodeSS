import { CodeCategoryModel } from "./codecategory.model";

export class CodeModel {
    public id?: string;
    public name?: string;
    public text?: string;
    public codeCategory?: CodeCategoryModel;
    public updatedOn?: Date;
}