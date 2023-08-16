import { IsString, IsNotEmpty } from 'class-validator';
import { IPublisherEnum } from '../interfaces/hero.interface';

export class CreateHeroDto {
  @IsString()
  @IsNotEmpty()
  readonly superhero: string;
  @IsString()
  @IsNotEmpty()
  readonly publisher: IPublisherEnum;
  @IsString()
  @IsNotEmpty()
  readonly alter_ego: string;
  @IsString()
  @IsNotEmpty()
  readonly first_appearance: string;
  @IsString()
  @IsNotEmpty()
  readonly characters: string;
}
