import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid'
import { CreateCarDto } from './dtos/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ]

  findAll() {
    return this.cars
  }

  findONeById(id: string){
    const car = this.cars.filter((car) => car.id == id)
    if(!car.length) {
      throw new NotFoundException(`Car With Id ${id} Not Found`)
    }
    return car
  }

  create(createCarDto: CreateCarDto){
    const newCar: Car = {
      id: uuid(),
      ...createCarDto
    }
    this.cars.push(newCar)
    return newCar
  }
}
