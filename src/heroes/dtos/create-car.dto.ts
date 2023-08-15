import { IsString } from 'class-validator';
import { IPublisherEnum } from '../interfaces/hero.interface';

export class CreateCarDto {
  @IsString()
  readonly superhero: string;
  @IsString()
  readonly publisher: IPublisherEnum;
  @IsString()
  readonly alter_ego: string;
  @IsString()
  readonly first_appearance: string;
  @IsString()
  readonly characters: string;
}
