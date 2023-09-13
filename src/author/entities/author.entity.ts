import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Charge {
    VOLUNTEER = 'Volunteer',
    PRESIENT = "Presient MAM",
    WORKER = 'Worker',
    COMMUNITY = 'Community'
}
@Schema(
    { timestamps: true }
)
export class Author {
    @Prop()
    name: String;
    @Prop()
    lastName: String;
    @Prop()
    avatar: String;
    @Prop()
    charge: Charge;
}

export const AuthorSchema = SchemaFactory.createForClass(Author)