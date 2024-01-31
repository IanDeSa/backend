import { Categoria } from '@prisma/client';
import {
  IsString,
  IsNumber,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  Min,
} from 'class-validator';

export class CreateDispositivoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNumber()
  @Min(0)
  preco: number;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsOptional()
  @IsBoolean()
  habilitado?: boolean;

  @IsNotEmpty()
  @IsString()
  categoria: Categoria;
}
