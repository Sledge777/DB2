import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @Post('/find')
    FindOne(@Body() body: { email: string }) {
        return this.usersService.getContactByEmail(body.email)
    }
}