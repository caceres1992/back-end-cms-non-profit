import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
    timestamps: true
})

export class Banner {
    @Prop()
    title: string;
    @Prop()
    bannerUrl: string;
}

export const BannerSchema = SchemaFactory.createForClass(Banner)