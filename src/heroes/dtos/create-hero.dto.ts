import { IsString, IsNotEmpty } from 'class-validator';

export class CreateHeroDto {
  @IsString()
  @IsNotEmpty()
  readonly superhero: string;
  @IsString()
  @IsNotEmpty()
  readonly publisher: string;
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
