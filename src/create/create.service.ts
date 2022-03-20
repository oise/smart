import { DataService } from '@common/services/data-service/data.service';
import { Actor } from '@common/models/Actor';

class CreateService {
  private dataService: DataService;

  constructor() {
    this.dataService = new DataService();
  }

  async actors() {
    return this.dataService.get<Actor[]>('https://cdn.jsdelivr.net/gh/oise/smart@main/data/actor.json');
  }
}

export default CreateService;
