import { CodeCategoryModel } from "./codecategory.model";

export class CodeModel {
    constructor(
        public Id?: string,
        public Name?: string,
        public Title?: string,
        public Text?: string,
        public Category? : CodeCategoryModel
    ) {}
}