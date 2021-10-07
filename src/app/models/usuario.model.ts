export class Usuario {
    constructor(
        public nombre   : string,
        public email    : string,
        public img?     : string,
        public uid?     : string,
        public password?: string,
        public google?  : boolean,
        public role?    : string,

     ){}
}