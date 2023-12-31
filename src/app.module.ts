import { Module } from '@nestjs/common';
import { HeroesModule } from './heroes/heroes.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { PublishersModule } from './publishers/publishers.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    HeroesModule,
    PublishersModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
