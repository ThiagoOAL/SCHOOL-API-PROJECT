import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { user, userSchema } from './entities/user.entity';
import { IsNameUnic, IsNameUnicConstraint } from './is-name-unic.validator';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: user.name, schema: userSchema }])],
  controllers: [UsersController],
  providers: [
    UsersService,
    IsNameUnicConstraint  
  ]
})
export class UsersModule {}
