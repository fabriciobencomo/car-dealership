import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';

@Controller('cars')
export class CarsController {

  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(){
    return this.carsService.findAll()
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string){
    return this.carsService.findONeById(id)
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto){
    return createCarDto
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
