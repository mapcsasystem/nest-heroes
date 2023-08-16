import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateHeroDto, UpdateHeroDto } from './dtos';
import { Heroe } from './entities/hero.entities';

@Injectable()
export class HeroesService {
  findAll(limit: string, query: string): Heroe[] {
    if (!limit && !query) {
      return this._heroes;
    }
    const matchingHeroes = this._heroes.filter((hero) =>
      JSON.stringify(hero).toLowerCase().includes(query.trim()),
    );
    query = query.trim();
    if (query.length === 0) {
      return [];
    }
    if (+limit <= 0) {
      return matchingHeroes.slice(0, 1);
    }
    return matchingHeroes.slice(0, +limit);
  }

  findOneById(id: string) {
    const hero = this._heroes.find((hero) => hero.id === id);
    if (!hero) {
      throw new NotFoundException(`Hero by id '${id}' no exist`);
    }
    return hero;
  }

  create(createHeroDto: CreateHeroDto): CreateHeroDto {
    const hero: Heroe = {
      id: uuid(),
      ...createHeroDto,
    };
    this._heroes.push(hero);
    return hero;
  }

  update(id: string, updateHeroDto: UpdateHeroDto) {
    let heroDB = this.findOneById(id);
    this._heroes = this._heroes.map((heroe) => {
      if (heroDB.id === id) {
        heroDB = { ...heroDB, ...updateHeroDto, id };
        return;
      }
      return heroe;
    });
    return heroDB;
  }

  delete(id: string) {
    this.findOneById(id);
    this._heroes = this._heroes.filter((hero) => hero.id !== id);
  }

  private _heroes: Heroe[] = [];
}
