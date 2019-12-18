import { Controller, HttpCode, Get, Post, Header, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AppDto } from './app.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('dto')
  async appDtoTest(@Body() appDto: AppDto){
    return 'dto :' + JSON.stringify(appDto);
  }

  @Get('ab*cd') 
  wildcards() {
    return 'wildcard'; 
  }

  @Get('status')
  @HttpCode(500)
  StatusCodeRes(){
    return 'code 500';
  }

  @Get(':id')
  findOne(@Param() params):string{
    console.log(params.id);
    return `returns a #${params.id}`;
  }

}
