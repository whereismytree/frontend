/* eslint-disable max-classes-per-file */
export class DateIsNotValidError extends Error {
  public invalidDate: string;

  constructor(message: string, invalidDate: string) {
    super(message);
    this.name = 'DateIsNotValidError';
    this.invalidDate = invalidDate;
  }
}

export class InvalidPathError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidPathError';
  }
}

export class HttpError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'HttpError';
  }
}
