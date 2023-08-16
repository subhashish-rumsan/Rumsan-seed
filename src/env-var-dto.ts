import { plainToClass } from 'class-transformer';
import {
  IsNumber,
  validateSync,
  IsString,
  IsBoolean,
  IsIn,
} from 'class-validator';

class EnvironmentVariables {
  @IsNumber()
  DEV_PORT: number;

  @IsNumber()
  PROD_PORT: number;

  @IsBoolean()
  DEBUG: boolean;

  @IsString()
  @IsIn(['development', 'staging', 'production'])
  NODE_ENV: string;

  @IsString()
  API_VERSION: string;

  // For development
  @IsString()
  DB_DEVELOPMENT_USER_NAME: string;

  @IsString()
  DB_DEVELOPMENT_PASSWORD: string;

  @IsString()
  DB_DEVELOPMENT_DATABASE_NAME: string;

  @IsString()
  DB_DEVELOPMENT_HOST: string;

  // For staging
  @IsString()
  DB_STAGING_USER_NAME: string;

  @IsString()
  DB_STAGING_PASSWORD: string;

  @IsString()
  DB_STAGING_DATABASE_NAME: string;

  @IsString()
  DB_STAGING_HOST: string;

  // For production
  @IsString()
  DB_PRODUCTION_USER_NAME: string;

  @IsString()
  DB_PRODUCTION_PASSWORD: string;

  @IsString()
  DB_PRODUCTION_DATABASE_NAME: string;

  @IsString()
  DB_PRODUCTION_HOST: string;
}

export function validate(configuration: Record<string, unknown>) {
  const finalConfig = plainToClass(EnvironmentVariables, configuration, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(finalConfig, { skipMissingProperties: true });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return finalConfig;
}
