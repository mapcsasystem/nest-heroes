import { Controller, Get, Param } from '@nestjs/common';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly _heroesService: HeroesService) {}
  @Get()
  getAllHeroes() {
    return this._heroesService.findAll();
  }

  @Get(':id')
  getHeroById(@Param('id') id: string) {
    return this._heroesService.findOne(id);
  }
}
