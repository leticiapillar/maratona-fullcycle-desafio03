import { Controller, Get, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from 'src/models/category.entity';

@Controller('categories')
export class CategoriesController {

    constructor(
        @InjectRepository(Category)
        private categorytRepository: Repository<Category>,
    ) { }
    
    @Get()
    async index(): Promise<Category[]> {
        return this.categorytRepository.find();
    }

    @Post()
    async store(@Body() dto: Category): Promise<Category> {
        const category = this.categorytRepository.create(dto);
        return this.categorytRepository.save(category);
    }
    
}
