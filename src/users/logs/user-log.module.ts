import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserLog, UserLogSchema } from './schemas/user-log.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserLog.name, schema: UserLogSchema }])],
  exports: [MongooseModule],
})

export class UserLogModule {}
