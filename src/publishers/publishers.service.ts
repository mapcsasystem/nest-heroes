import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePublisherDto, UpdatePublisherDto } from './dto/';
import { Publisher } from './entities/publisher.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class PublishersService {
  private _publishers: Publisher[] = [];

  findAll() {
    return this._publishers;
  }

  create(createPublisherDto: CreatePublisherDto) {
    const date = new Date();
    const publisher: Publisher = {
      id: uuid(),
      name: createPublisherDto.name,
      createdAt: date,
      updatedAt: date,
    };
    this._publishers.push(publisher);
    return publisher;
  }

  findOneById(id: string) {
    const publisher = this._publishers.find((publisher) => publisher.id === id);
    if (!publisher) {
      throw new NotFoundException(`The publisher id '${id}' no exist`);
    }
    return publisher;
  }

  update(id: string, updatePublisherDto: UpdatePublisherDto) {
    let publisherDB = this.findOneById(id);

    this._publishers = this._publishers.map((publisher) => {
      if (publisher.id === id) {
        publisherDB.updatedAt = new Date();
        publisherDB = {
          ...publisherDB,
          ...updatePublisherDto,
        };
        return publisherDB;
      }
      return publisher;
    });
    return publisherDB;
  }

  remove(id: string) {
    this.findOneById(id);
    this._publishers = this._publishers.filter((hero) => hero.id !== id);
  }

  fillPublishersWithSeedData(publishers: Publisher[]) {
    this._publishers = publishers;
  }
}
