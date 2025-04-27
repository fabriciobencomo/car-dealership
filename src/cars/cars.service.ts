import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid'
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

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
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car With Id ${id} Not Found`);
    }
    return car;
  }

  create(createCarDto: CreateCarDto){
    const newCar: Car = {
      id: uuid(),
      ...createCarDto
    }
    this.cars.push(newCar)
    return newCar
  }

  update(id:string, updateCarDto: UpdateCarDto){
    let carDB = this.findONeById(id);
    this.cars = this.cars.map(car => {
      if(car.id === id  ) {
        carDB = {...carDB, ...updateCarDto, id}
        return carDB
      }
      return car
    })
    return carDB
  }

  delete(id:string){
    let carDB = this.findONeById(id);
    this.cars = this.cars.filter(car => car.id !== id)
    return 
  }    

  fillCarsWithSeedData(cars = []){
    this.cars = cars
  }
}
