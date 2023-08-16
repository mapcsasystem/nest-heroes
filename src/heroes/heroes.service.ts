import { Injectable, NotFoundException } from '@nestjs/common';
import { IHeroe, IPublisherEnum } from './interfaces/hero.interface';
import { v4 as uuid } from 'uuid';
import { CreateHeroDto, UpdateHeroDto } from './dtos';

@Injectable()
export class HeroesService {
  findAll(limit: string, query: string): IHeroe[] {
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
    const hero: IHeroe = {
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

  private _heroes: IHeroe[] = [
    // {
    //   id: uuid(),
    //   superhero: 'Batman',
    //   publisher: IPublisherEnum.DCComics,
    //   alter_ego: 'Bruce Wayne',
    //   first_appearance: 'Detective Comics #27',
    //   characters: 'Bruce Wayne',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Superman',
    //   publisher: IPublisherEnum.DCComics,
    //   alter_ego: 'Kal-El',
    //   first_appearance: 'Action Comics #1',
    //   characters: 'Kal-El',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Flash',
    //   publisher: IPublisherEnum.DCComics,
    //   alter_ego: 'Jay Garrick',
    //   first_appearance: 'Flash Comics #1',
    //   characters: 'Jay Garrick, Barry Allen, Wally West, Bart Allen',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Green Lantern',
    //   publisher: IPublisherEnum.DCComics,
    //   alter_ego: 'Alan Scott',
    //   first_appearance: 'All-American Comics #16',
    //   characters:
    //     'Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Green Arrow',
    //   publisher: IPublisherEnum.DCComics,
    //   alter_ego: 'Oliver Queen',
    //   first_appearance: 'More Fun Comics #73',
    //   characters: 'Oliver Queen',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Wonder Woman',
    //   publisher: IPublisherEnum.DCComics,
    //   alter_ego: 'Princess Diana',
    //   first_appearance: 'All Star Comics #8',
    //   characters: 'Princess Diana',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Martian Manhunter',
    //   publisher: IPublisherEnum.DCComics,
    //   alter_ego: 'J"onn J"onzz',
    //   first_appearance: 'Detective Comics #225',
    //   characters: 'Martian Manhunter',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Robin/Nightwing',
    //   publisher: IPublisherEnum.DCComics,
    //   alter_ego: 'Dick Grayson',
    //   first_appearance: 'Detective Comics #38',
    //   characters: 'Dick Grayson',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Blue Beetle',
    //   publisher: IPublisherEnum.DCComics,
    //   alter_ego: 'Dan Garret',
    //   first_appearance: 'Mystery Men Comics #1',
    //   characters: 'Dan Garret, Ted Kord, Jaime Reyes',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Black Canary',
    //   publisher: IPublisherEnum.DCComics,
    //   alter_ego: 'Dinah Drake',
    //   first_appearance: 'Flash Comics #86',
    //   characters: 'Dinah Drake, Dinah Lance',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Spider Man',
    //   publisher: IPublisherEnum.MarvelComics,
    //   alter_ego: 'Peter Parker',
    //   first_appearance: 'Amazing Fantasy #15',
    //   characters: 'Peter Parker',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Captain America',
    //   publisher: IPublisherEnum.MarvelComics,
    //   alter_ego: 'Steve Rogers',
    //   first_appearance: 'Captain America Comics #1',
    //   characters: 'Steve Rogers',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Iron Man',
    //   publisher: IPublisherEnum.MarvelComics,
    //   alter_ego: 'Tony Stark',
    //   first_appearance: 'Tales of Suspense #39',
    //   characters: 'Tony Stark',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Thor',
    //   publisher: IPublisherEnum.MarvelComics,
    //   alter_ego: 'Thor Odinson',
    //   first_appearance: 'Journey into Myster #83',
    //   characters: 'Thor Odinson',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Hulk',
    //   publisher: IPublisherEnum.MarvelComics,
    //   alter_ego: 'Bruce Banner',
    //   first_appearance: 'The Incredible Hulk #1',
    //   characters: 'Bruce Banner',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Wolverine',
    //   publisher: IPublisherEnum.MarvelComics,
    //   alter_ego: 'James Howlett',
    //   first_appearance: 'The Incredible Hulk #180',
    //   characters: 'James Howlett',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Daredevil',
    //   publisher: IPublisherEnum.MarvelComics,
    //   alter_ego: 'Matthew Michael Murdock',
    //   first_appearance: 'Daredevil #1',
    //   characters: 'Matthew Michael Murdock',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Hawkeye',
    //   publisher: IPublisherEnum.MarvelComics,
    //   alter_ego: 'Clinton Francis Barton',
    //   first_appearance: 'Tales of Suspense #57',
    //   characters: 'Clinton Francis Barton',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Cyclops',
    //   publisher: IPublisherEnum.MarvelComics,
    //   alter_ego: 'Scott Summers',
    //   first_appearance: 'X-Men #1',
    //   characters: 'Scott Summers',
    // },
    // {
    //   id: uuid(),
    //   superhero: 'Silver Surfer',
    //   publisher: IPublisherEnum.MarvelComics,
    //   alter_ego: 'Norrin Radd',
    //   first_appearance: 'The Fantastic Four #48',
    //   characters: 'Norrin Radd',
    // },
  ];
}
