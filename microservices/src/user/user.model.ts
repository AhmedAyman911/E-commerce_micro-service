/* eslint-disable */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

    @Prop({ required: true })
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true})
    name: string;
    @Prop({required: true})
    phone: string;
    @Prop({})
    address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
