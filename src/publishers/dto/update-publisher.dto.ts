// import { PartialType } from '@nestjs/mapped-types';
// import { CreatePublisherDto } from './create-publisher.dto';

// export class UpdatePublisherDto extends PartialType(CreatePublisherDto) {}

import { IsString, MinLength } from 'class-validator';

export class UpdatePublisherDto {
  @IsString()
  @MinLength(1)
  name: string;
}
