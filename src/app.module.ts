import { Module } from '@nestjs/common';
import { HeroesModule } from './heroes/heroes.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [HeroesModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
