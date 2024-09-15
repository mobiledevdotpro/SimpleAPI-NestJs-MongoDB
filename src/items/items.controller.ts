import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './schemas/item.schema';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  async create(@Body() item: Item): Promise<Item> {
    return this.itemsService.create(item);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

    @Put(':id')
    async update(@Param('id') id: string, @Body() item: Item): Promise<Item> {
    return this.itemsService.update(id, item);
    }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Item> {
    return this.itemsService.remove(id);
  }
  
}