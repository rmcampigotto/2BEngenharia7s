import { Body, Controller, Get, Post, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(
    @Body() body: { 
      username: string; 
      password: string;
      adminCode: string }
  ) {
    const validAdminCode = process.env.ADMIN_CODE;
    if (body.adminCode !== validAdminCode) {
      throw new UnauthorizedException('Invalid admin code');
    }
    return this.usersService.create(
      body.username, 
      body.password
    );
  }

  @Get('listAll')
  async findAll(@Body() body: { adminCode: string }) {
    const validAdminCode = process.env.ADMIN_CODE;
    if (body.adminCode !== validAdminCode) {
      throw new UnauthorizedException('Invalid admin code');
    }
    return this.usersService.findAll();
  }

}
