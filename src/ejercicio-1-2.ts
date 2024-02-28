export interface Arithmeticable<T> {
  add(other: T): T;
  sub(other: T): T;
  mult(other: T): T;
  div(other: T): T;
}

export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  
  constructor(private items: T[])
  {}

  /**
   * addArithmeticable
   */
  public addArithmeticable(element: T): void {
    this.items.push(element);
  }

  /**
   * getArithmeticable
   * @param index El indice del parametro que queremos
   * @returns El elemento deseado
   */
  public getArithmeticable(index: number): T {
    if(index < 0 || index >= this.items.length){
      throw new Error("El índice está fuera de rango.");
    }
    return this.items[index];
  }

  /**
   * getNumberofArithmeticals
   */
  public getNumberofArithmeticals(): number {
    let count: number = 0;
    this.items.forEach(element => {
      count++;
    });
    return count;
  }

}