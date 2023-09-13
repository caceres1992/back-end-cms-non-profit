import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Tag {
    COMMUNITY = 'Community',
    STUDENT = "Student",
    STARKIDS = 'Star Kids',
    RECEPI = 'Recepi',
}
@Schema({ timestamps: true })
export class Blog {
    @Prop()
    title: String;
    @Prop()
    article: String;
    @Prop()
    mainImageUrl: String;
    @Prop({ unique: true })
    slug: String;
    @Prop()
    tag: Tag[];
    @Prop()
    authorId: String;
}

export const BlogSchema = SchemaFactory.createForClass(Blog)