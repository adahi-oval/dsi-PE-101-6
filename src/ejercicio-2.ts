export class Vehiculo {
  constructor(public readonly matricula_: string){
  }
}

export class Coche extends Vehiculo {
  constructor(public readonly matricula_: string, public readonly numPuertas_: number){
    super(matricula_);
  }
}

export interface bikeType {
  tipo: string;
}

export class Moto extends Vehiculo {
  constructor(public readonly matricula_: string, public readonly tipo_: bikeType){
    super(matricula_);
  }
}

export type tipoPlaza = 'Coche' | 'Moto';

export interface Plaza {
  tipo: tipoPlaza;
}

export class Parking {
  constructor(private estacionados: Vehiculo[], private plazasDisp: Plaza[]){}
  
  private addCar(vehic: Vehiculo){
    this.estacionados.push(vehic);
    this.plazasDisp.pop();
  }
}