import { Injectable } from '@nestjs/common';
import { HEROES_SEED, PUBLISHERS_SEED } from './data/heroes.seed';

@Injectable()
export class SeedService {
  populateDB() {
    // HEROES_SEED
    // PUBLISHERS_SEED
    return 'Seed execute successfully';
  }
}
