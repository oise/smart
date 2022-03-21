import { DataService } from '@common/services/data-service/data.service';
import { Actor } from '@common/models/Actor';
import { Voice } from '@common/models/Voice';
import { Background } from '@common/models/Background';

class CreateService {
  private dataService: DataService;

  constructor() {
    this.dataService = new DataService();
  }

  async actors() {
    return this.dataService.get<Actor[]>('data/actor.json');
  }

  async voices() {
    return this.dataService.get<Voice[]>('data/voice.json');
  }

  async backgrounds() {
    return this.dataService.get<Background>('data/background.json');
  }
}

export default CreateService;
