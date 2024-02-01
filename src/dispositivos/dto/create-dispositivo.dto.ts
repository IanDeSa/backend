import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: 'Dispositivo Teste',
    description: 'O nome do novo dispositivo',
  })
  nome: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Descrição do Dispositivo',
    description: 'A descrição do novo dispositivo',
  })
  descricao: string;

  @IsNumber()
  @Min(0)
  @ApiProperty({
    example: 120.99,
    description: 'O preço do dispositivo',
  })
  preco: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example:
      'data:image/webp;base64,UklGRuwMAABXRUJQVlA4WAoAAAAIAAAAxwAAxwAAVlA4IAwMAAAQOACdASrIAMgAPm00lkikIqIhJBDKYIANiU3bq9D0G/HayB2H8kvxu6wLYPwf+DHUtHF9O/eD9x/cfx67RP5x9gb9P/8N/S/yA7h/mD/X39qveO9Lv+R9QD+v/6jrV/Qr/aP01v3W+F790/2e9lX//9n/0v/U3sS/yPh/4QfVMkO43+N/fv9t5gd5/w30Ef5//o/yZ4I6zfoBdzP+D6gM0TqA9wDgN6AH5q89z6h8+P03+zXwGfrn/2PWM9kf7Te1mR5wQxow/f//pysJrX6fvmibpPOpepYBsPToWEPinaE2v///sFXJZ89X6Ulbhzs79Vk2wpvxn7EnV0H8clNt/AMsACbnqrbd3iey++4/ARA39JYiXvpaU',
    description: 'A imagem em base64 do dispositivo',
  })
  imagem: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    example: false,
    description: 'Status de habilitação do dispositivo',
  })
  habilitado?: boolean;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Smart',
    description: 'Categoria do dispositivo',
  })
  categoria: Categoria;
}
