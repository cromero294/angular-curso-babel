export class Tarea {
    constructor(private _id: number, private _nombre: string, private _completa: boolean = false) {  }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nuevoNombre: string) {
        this._nombre = nuevoNombre;
    }

    get completa(): boolean {
        return this._completa;
    }

    set completa(completa: boolean) {
        this._completa = completa;
    }

    changeCompleta() {
        this.completa = !this.completa;
    }

    get id(): number{
        return this._id;
    }

    set id(idNuevo: number){
        this._id = idNuevo;
    }
}
