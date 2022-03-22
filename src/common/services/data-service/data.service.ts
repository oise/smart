export class DataService {
  private baseUrl = 'https://cdn.jsdelivr.net/gh/oise/smart@main/';

  async get<Type>(url: string): Promise<Type> {
    return fetch(`${this.baseUrl}${url}`, {
      method: 'GET'
    }).then(this.processResponse);
  }

  async post<Type>(url: string, body: any): Promise<Type> {
    return fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(this.processResponse);
  }

  private async processResponse(response: Response) {
    if (response.ok) {
      return await response.json();
    } else {
      const error = await response.json();
      return Promise.reject(error);
    }
  }
}
