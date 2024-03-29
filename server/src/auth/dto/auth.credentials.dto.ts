import { IsString, MinLength, MaxLength } from "class-validator";

export class AuthCredentialsDto {
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  password: string;
}