export class DataService {
  async get<Type>(url: string): Promise<Type> {
    return fetch(url, {
      method: 'GET'
    }).then(this.processResponse);
  }

  async post<Type>(url: string, body: any): Promise<Type> {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(this.processResponse);
  }

  private async processResponse(response: Response) {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    } else {
      const error = await response.json();
      return Promise.reject(error);
    }
  }
}
