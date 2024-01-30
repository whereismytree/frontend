export class HTTPError extends Error {
  public errorMessage: string;

  constructor(
    message: string,
    public statusCode: number,
  ) {
    super(message);
    this.name = 'HttpError';

    switch (statusCode) {
      case 400:
        this.errorMessage = '잘못된 요청입니다. 데이터를 올바르게 요청했는지 다시 확인해주세요.';
        break;

      case 401:
        this.errorMessage = '해당 리소스에 대한 액세스 권한이 없습니다.';
        break;

      case 403:
        this.errorMessage = '해당 리소스에 대한 액세스가 허용되지 않았습니다.';
        break;

      case 404:
        this.errorMessage = '해당 리소스를 찾을 수 없습니다.';
        break;

      case 500:
        this.errorMessage =
          '웹 사이트 서버에 문제가 있습니다. 하지만 서버가 이 에러를 구체적으로 설명할 수 없습니다.';
        break;

      case 501:
        this.errorMessage = '요청한 URI가 존재하지 않는 엔드포인트입니다.';
        break;

      case 502:
        this.errorMessage = '서버가 잘못된 응답을 반환하였습니다.';
        break;

      default:
        this.errorMessage = `알 수 없는 에러입니다. 에러코드: ${statusCode}`;
    }
  }
}
