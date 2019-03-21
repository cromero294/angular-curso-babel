export class Post {

    constructor(private _id: number, private _userid: string, private _title: string, private _body: string) {  }

    get id(): number {
        return this._id;
    }

    get userid(): string {
        return this._userid;
    }

    get title(): string {
        return this._title;
    }

    get body(): string {
        return this._body;
    }

}
