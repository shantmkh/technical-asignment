import { apiUrl } from "utils/constants/api";
import { ApiStatuses } from "utils/constants/statuses";

export interface IResponseData {
  status: ApiStatuses;
  data?: any;
  message?: string;
}

class ResponseData implements IResponseData{
  constructor(
    public status: ApiStatuses,
    public data: any = null,
    public message: string = ''
  ){}
}

export class BaseApi {
  private apiUrl: string = apiUrl;
  constructor(public prefix?: string) {}

  private generateFetcher(url: string, method: string, body?: Record<string, any>) {
    const configs = {
      method,
      headers: {
        "content-type": "application/json"
      },
      ...(body && { body: JSON.stringify(body) })
    }

    return fetch(`${this.apiUrl}${this.prefix}${url}`, configs);
  }

  get(url: string): Promise<IResponseData> {
    return this.generateFetcher(url, "GET")
      .then(this.handleResponse)
      .catch(this.handleError)
  }

  post(url: string, body: Record<string, any>): Promise<IResponseData> {
    return this.generateFetcher(url, "POST", body)
      .then(this.handleResponse)
      .catch(this.handleError)
  }

  put(url: string, body: Record<string, any>): Promise<IResponseData> {
    return this.generateFetcher(url, "PUT", body)
      .then(this.handleResponse)
      .catch(this.handleError)
  }

  delete(url: string): Promise<IResponseData> {
    return this.generateFetcher(url, "DELETE")
      .then(this.handleResponse)
      .catch(this.handleError)
  }

  private handleResponse(res: Response) {
    const totlaCount = res.headers.get("X-Total-Count");
    return res.json()
      .then((res) => {
        return new ResponseData(
          ApiStatuses.SUCCESS,
          { data: res, ...(totlaCount && { totlaCount: +totlaCount }) }
        )
      });
  }

  private handleError(error: Error) {
    return new ResponseData(ApiStatuses.SUCCESS, null, error.message)
  }
}