export class Empleado{
    private _nombre:string;
    private _apellido:string;
    private _sueldo:number;
    private _cargo:string;
    constructor(nombre:string,apellido:string,sueldo:number,cargo:string){
        this._nombre=nombre;
        this._apellido=apellido;
        this._sueldo=sueldo;
        this._cargo=cargo;
    }
    get nombre():string{
        return this._nombre;
    }
    set nombre(nombre:string){
         this._nombre=nombre;
    }
    get apellido():string{
        return this._apellido;
    }
    set apellido(apellido:string){
         this._apellido=apellido;
    }
    get sueldo():number{
        return this._sueldo;
    }
    set sueldo(sueldo:number){
         this._sueldo=sueldo;
    }
    get cargo():string{
        return this._cargo;
    }
    set cargo(cargo:string){
         this._cargo=cargo;
    }
}