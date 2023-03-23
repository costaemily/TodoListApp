export class Task {
  description: string;
  dateIn: Date;
  dateModification: Date;
  isDone: boolean;

  constructor(
    description: string,
    dateIn: Date,
    dateModification: Date,
    isDone: boolean,
  ) {
    this.description = description;
    this.dateIn = dateIn;
    this.dateModification = dateModification;
    this.isDone = isDone;
  }
}
