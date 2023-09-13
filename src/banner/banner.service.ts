import { Injectable } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Banner } from './entities/banner.entity';
import mongoose, { FilterQuery } from 'mongoose';

@Injectable()
export class BannerService {

  constructor(@InjectModel(Banner.name) private bannerModel: mongoose.Model<Banner>) { }
  async create(createBannerDto: CreateBannerDto): Promise<Banner> {
    const res = await this.bannerModel.create(createBannerDto)
    return res;
  }

  async findAll(): Promise<Banner[]> {
    const res = await this.bannerModel.find()
    return res;
  }

  async findOne(name: FilterQuery<string>): Promise<Banner> {
    const foundBanner = await this.bannerModel.findOne({title: name})
    return foundBanner;
  }

  async update(id: string, updateBannerDto: UpdateBannerDto): Promise<Banner> {
    const _banner = await this.bannerModel.findByIdAndUpdate(id, updateBannerDto, { new: true, runValidators: true })
    return _banner;
  }

  async remove(id: string): Promise<String> {
    const isValidId = await this.bannerModel.findById(id) || false;
    if (!isValidId){
      return 'ID not found, please try again'
    }
      await this.bannerModel.findByIdAndRemove(id, { new: true, runValidators: true })
    return 'banner removed'
  }
}
