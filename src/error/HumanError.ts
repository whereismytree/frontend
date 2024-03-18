/* eslint-disable max-classes-per-file */
class HumanError extends Error {}

export class InvalidPathError extends HumanError {
  public path: string;

  constructor(message: string, path: string) {
    super(message);
    this.name = 'InvalidPathError';
    this.path = path;
  }
}

export class InvalidDateError extends HumanError {
  public date: string;

  constructor(message: string, invalidDate: string) {
    super(message);
    this.name = 'DateIsNotValidError';
    this.date = invalidDate;
  }
}
