import { Controller, Get, Param, Query } from '@nestjs/common';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly _heroesService: HeroesService) {}
  @Get()
  getAllHeroes(@Query('q') query: string, @Query('_limit') limit: number) {
    console.log({ limit, query });

    return this._heroesService.findAll(limit, query);
  }
  //   @Get()
  //   getHeroes(@Query('q') query: string, @Query('_limit') limit: number) {
  //     // Aquí puedes realizar la lógica para procesar la consulta y limitar los resultados
  //     return `Query: ${query}, Limit: ${limit}`;
  //   }

  @Get(':id')
  getHeroById(@Param('id') id: string) {
    return this._heroesService.findOne(id);
  }
}
