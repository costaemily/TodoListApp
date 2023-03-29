export class Task {
  private _id: string;
  private _description: string;
  private _dateIn: Date;
  private _dateModification: Date;
  private _isDone: boolean;

  constructor(
    id: string,
    description: string,
    dateIn: Date,
    dateModification: Date,
    isDone: boolean,
  ) {
    this._id = id;
    this._description = description;
    this._dateIn = dateIn;
    this._dateModification = dateModification;
    this._isDone = isDone;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get dateIn(): Date {
    return this._dateIn;
  }
  public set dateIn(value: Date) {
    this._dateIn = value;
  }
  public get dateModification(): Date {
    return this._dateModification;
  }
  public set dateModification(value: Date) {
    this._dateModification = value;
  }
  public get isDone(): boolean {
    return this._isDone;
  }
  public set isDone(value: boolean) {
    this._isDone = value;
  }
}
