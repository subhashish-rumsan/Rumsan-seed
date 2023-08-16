import { IsNumber, IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class EnvironmentVariables {
  @IsIn(['development', 'production', 'staging'])
  @IsNotEmpty()
  NODE_ENV: string;

  @IsNumber()
  @IsOptional()
  DEV_PORT: number;
}
