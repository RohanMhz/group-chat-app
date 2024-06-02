import { IsString, IsEmail, Length } from 'class-validator';
import { IsUnique } from 'src/common/validators/is-unique.validator';

export class RegisterUserDto {
    @IsString()
    @Length(4, 20)
    // @IsUnique()
    username: string;

    @IsEmail()
    // @IsUnique()
    email: string;

    @IsString()
    password: string;
}