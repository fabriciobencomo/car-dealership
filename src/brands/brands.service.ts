import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [{
    id: uuid(),
    name: 'Toyota',
    createdAt: Date.now(),
  }]

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime(),
    }

    this.brands.push(brand);

    return brand
  }

  findAll() {
    return this.brands
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) throw new Error('Brand not found');
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id.toString());

    this.brands = this.brands.map(brand => {
      if(brand.id === brandDb.id){
        brandDb.updatedAt = new Date().getTime();
        brandDb = {
          ...brandDb, ...updateBrandDto, id: brandDb.id
        }
        return brandDb
      }
      return brand
    })

    return brandDb
  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id !== id.toString())
  }

  
  fillBrandsWithSeedData(brands = []){
    this.brands = brands
  }
}
