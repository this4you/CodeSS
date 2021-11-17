export class RegisterModel {
    constructor(
        public Login?: string,
        public Password?: string,
        public Email?: string,
        public RepeatPassword?: string
    ) {}
}