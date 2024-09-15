import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return newItem.save();
  }
}