import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PublishersModule } from 'src/publishers/publishers.module';
import { HeroesModule } from 'src/heroes/heroes.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PublishersModule, HeroesModule],
})
export class SeedModule {}
