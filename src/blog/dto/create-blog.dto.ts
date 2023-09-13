import { Tag } from "../entities/blog.entity";

export class CreateBlogDto {
    readonly title: string;
    readonly article: string;
    readonly mainImageUrl: string;
    slug: string;
    readonly tag: Tag[];
    readonly authorId: String;
}