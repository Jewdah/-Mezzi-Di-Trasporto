export class Motocicleta {

public marca:string;
public modelo:string;
public cilindraje:number;
public color:string;
public velocidad:number;
public velocidad_max:number;
public marcha:number;
public marcha_max:number;

constructor (marca:string, modelo:string, cilindraje:number, 
    velocidad:number, velocidad_max:number, color:string) 
{

    this.marca = marca;
    this.modelo = modelo;
    this.cilindraje = cilindraje;
    this.velocidad = velocidad;
    this.velocidad = velocidad_max;
    this.color = color;

}

public set Acelerar(LaVelocidad:number)
{

    this.velocidad = this.velocidad + 5;

}


public set Frenar (Lavelocidad:number){

    this.velocidad = this.velocidad - 2;

}

public get Velocimetro(){

return this.velocidad;
return this.marcha;


}

public set CambiarMarcha (LaMarcha:number){

    this.marcha = this.marcha + 1;

}

}


let Moto1 = new Motocicleta('TVS', '2016', 160, 0, 130, 'rojo');

console.log(Moto1.Velocimetro);
console.log(Moto1.Acelerar);
console.log(Moto1.CambiarMarcha);
console.log(Moto1.Velocimetro);