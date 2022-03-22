import { DataService } from '@common/services/data-service/data.service';

class AuthService {
  private dataService: DataService;

  constructor() {
    this.dataService = new DataService();
  }

  async login(username: string, password: string) {
    await this.handleLogin(username, password);
  }

  logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  private async handleLogin(username: string, password: string) {
    if (username.toLowerCase() === 'dummy@email.com' && password.toLowerCase() === 'password') {
      return Promise.resolve();
    }
    return Promise.reject('wrong credentials - use dummy@email.com as username & password as password');
  }
}

export default AuthService;
