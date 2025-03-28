import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(){
    return this.carsService.findAll()
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number){
    return this.carsService.findONeById(id)
  }

  @Post()
  createCar(@Body() body){
    return body
  }

  @Patch(':id')
  updateCarById(@Param('id', ParseIntPipe) id: number, @Body() body){
    return body
  }

  @Delete(':id')
  deleteCarById(@Param('id', ParseIntPipe) id: number){
    return {
      method: 'DELETE',
      id
    }
  }


}
