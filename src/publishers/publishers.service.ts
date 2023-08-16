import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { Publisher } from './entities/publisher.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class PublishersService {
  findAll() {
    return this._publisher;
  }

  create(createPublisherDto: CreatePublisherDto) {
    const date = new Date();
    const publisher: Publisher = {
      id: uuid(),
      name: createPublisherDto.name,
      createdAt: date,
      updatedAt: date,
    };
    this._publisher.push(publisher);
    return publisher;
  }

  findOneById(id: string) {
    const publisher = this._publisher.find((publisher) => publisher.id === id);
    if (!publisher) {
      throw new NotFoundException(`The publisher id '${id}' no exist`);
    }
    return publisher;
  }

  update(id: string, updatePublisherDto: UpdatePublisherDto) {
    let publisherDB = this.findOneById(id);
    publisherDB = this._findByName(publisherDB, updatePublisherDto);
    this._publisher = this._publisher.map((publisher) => {
      if (publisher.id === id) {
        (publisher.updatedAt = new Date()),
          (publisherDB = {
            ...publisherDB,
            ...updatePublisherDto,
            id,
          });
        return publisher;
      }
    });
    return publisherDB;
  }

  remove(id: string) {
    this.findOneById(id);
    this._publisher = this._publisher.filter((hero) => hero.id !== id);
  }

  private _publisher: Publisher[] = [
    // {
    //   id: uuid(),
    //   name: 'DC Comics',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   id: uuid(),
    //   name: 'Marvel Comics',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
  ];

  private _findByName(
    publisherDB: Publisher,
    updatePublisherDto: UpdatePublisherDto,
  ) {
    const publisher = this._publisher.find(
      (publisher) => publisher.name === updatePublisherDto.name,
    );
    if (publisher) {
      throw new NotFoundException(
        `The publisher name '${publisher.name}' exist`,
      );
    }
    return publisher;
  }
}
