import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

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
    return this.carsService.create(createCarDto)
  }

  @Patch(':id')
  updateCarById(@Param('id', ParseUUIDPipe) id: string, @Body() updateCarDto: UpdateCarDto){
    return updateCarDto
  }

  @Delete(':id')
  deleteCarById(@Param('id', ParseUUIDPipe) id: string){
    return this.carsService.delete(id)
  }


}
