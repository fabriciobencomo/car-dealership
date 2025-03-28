import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ]

  findAll() {
    return this.cars
  }

  findONeById(id: number){
    const car = this.cars.filter((car) => car.id == id)
    if(!car.length) {
      throw new NotFoundException(`Car With Id ${id} Not Found`)
    }
    return car
  }
}
