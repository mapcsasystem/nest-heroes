import { IsString, IsNotEmpty, IsUUID, IsOptional } from 'class-validator';
import { IPublisherEnum } from '../interfaces/hero.interface';

export class UpdateHeroDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id: string;

  @IsString()
  @IsOptional()
  readonly superhero: string;

  @IsString()
  @IsOptional()
  readonly publisher: IPublisherEnum;

  @IsString()
  @IsOptional()
  readonly alter_ego: string;

  @IsString()
  @IsOptional()
  readonly first_appearance: string;

  @IsString()
  @IsOptional()
  readonly characters: string;
}
