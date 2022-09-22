export class Caculator {
  private _num1: number;
  private _num2: number;
  private _sign: string;
  private _total: number;

  get num1(): number {
    return this._num1;
  }

  set num1(value: number) {
    this._num1 = value;
  }

  get num2(): number {
    return this._num2;
  }

  set num2(value: number) {
    this._num2 = value;
  }

  get sign(): string {
    return this._sign;
  }

  set sign(value: string) {
    this._sign = value;
  }


  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }
}
