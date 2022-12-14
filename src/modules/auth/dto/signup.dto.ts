import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
export class SignupDto {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}