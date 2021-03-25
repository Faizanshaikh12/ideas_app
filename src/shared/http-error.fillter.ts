import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException, HttpStatus,
  Logger
} from "@nestjs/common";

@Catch()
export class HttpErrorFillter implements ExceptionFilter {
  private error: Boolean;
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    const status = (this.error instanceof HttpException) ? this.error.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = {
      code: status,
      timeStamp: new Date().toLocaleDateString(),
      path: request.url,
      method: request.message,
      message: exception.message,
    };

    Logger.error(
      `${request.method} ${request.url}`,
      JSON.stringify(errorResponse),
      'ExceptionFillter',
    );

    response.status(status).json(errorResponse);
  }
}
