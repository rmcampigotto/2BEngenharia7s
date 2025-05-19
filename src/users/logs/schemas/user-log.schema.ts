import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserLogDocument = UserLog & Document;

@Schema({ timestamps: true })
export class UserLog {
  @Prop({ required: true })
  action: 'create' | 'update' | 'delete';

  @Prop({ required: true })
  userId: number;

  @Prop({ type: Object })
  before: any; 

  @Prop({ type: Object })
  after: any;

}

export const UserLogSchema = SchemaFactory.createForClass(UserLog);
