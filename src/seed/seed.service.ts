import { Injectable } from '@nestjs/common';
import { HEROES_SEED, PUBLISHERS_SEED } from './data/heroes.seed';
import { HeroesService } from 'src/heroes/heroes.service';
import { PublishersService } from 'src/publishers/publishers.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly _heroesService: HeroesService,
    private readonly _publishersService: PublishersService,
  ) {}

  populateDB() {
    this._heroesService.fillHeroesWithSeedData(HEROES_SEED);
    this._publishersService.fillPublishersWithSeedData(PUBLISHERS_SEED);
    return 'Seed execute successfully';
  }
}
