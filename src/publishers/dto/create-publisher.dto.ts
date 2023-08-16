import { IsString, MinLength } from 'class-validator';

export class CreatePublisherDto {
  @IsString()
  @MinLength(1)
  name: string;
}
