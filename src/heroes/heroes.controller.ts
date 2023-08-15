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
import { IHeroe } from './interfaces/hero.interface';
import { CreateCarDto } from './dtos/create-car.dto';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly _heroesService: HeroesService) {}
  @Get()
  getAllHeroes(
    @Query('q') query: string,
    @Query('_limit') limit: string,
  ): IHeroe[] {
    return this._heroesService.findAll(limit, query);
  }

  @Get(':id')
  getHeroById(@Param('id', ParseUUIDPipe) id: string): IHeroe {
    return this._heroesService.findOne(id);
  }

  @Post()
  createHero(@Body() createCarDto: CreateCarDto) {
    return this._heroesService.create(createCarDto);
  }

  @Patch(':id')
  updateHero(@Param('id', ParseUUIDPipe) id: string) {
    return this._heroesService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this._heroesService.findOne(id);
  }
}
