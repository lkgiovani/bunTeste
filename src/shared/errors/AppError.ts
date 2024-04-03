export class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly fileName: string;

  constructor(message: string, statusCode = 400, fileName: string) {
    this.message = message;
    this.statusCode = statusCode;
    this.fileName = fileName;
  }
}
