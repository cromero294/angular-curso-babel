export class Post {

    constructor(private _id: number, private _userid: number, private _title: string, private _body: string) {  }

    get id(): number {
        return this._id;
    }

    get userid(): number {
        return this._userid;
    }

    get title(): string {
        return this._title;
    }

    get body(): string {
        return this._body;
    }

}
