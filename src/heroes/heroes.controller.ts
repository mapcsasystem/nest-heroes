import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDto, UpdateHeroDto } from './dtos';
import { Heroe } from './entities/hero.entities';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly _heroesService: HeroesService) {}
  @Get()
  getAllHeroes(
    @Query('q') query: string,
    @Query('_limit') limit: string,
  ): Heroe[] {
    return this._heroesService.findAll(limit, query);
  }

  @Get(':id')
  getHeroById(@Param('id', ParseUUIDPipe) id: string): Heroe {
    return this._heroesService.findOneById(id);
  }

  @Post()
  createHero(@Body() createCarDto: CreateHeroDto) {
    return this._heroesService.create(createCarDto);
  }

  @Patch(':id')
  updateHero(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateHeroDto,
  ) {
    return this._heroesService.update(id, updateCarDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this._heroesService.delete(id);
  }
}
