import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
// import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DispositivosService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(CreateDispositivoDto: CreateDispositivoDto) {
    return await this.prismaService.dispositivo.create({
      data: {
        nome: CreateDispositivoDto.nome,
        descricao: CreateDispositivoDto.descricao,
        preco: CreateDispositivoDto.preco,
        imagem: CreateDispositivoDto.imagem,
        habilitado: CreateDispositivoDto.habilitado,
        categoria: CreateDispositivoDto.categoria,
      },
    });
  }

  async findAll() {
    return await this.prismaService.dispositivo.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.dispositivo.findFirst({
      where: {
        id,
      },
    });
  }

  // update(id: number, updateDispositivoDto: UpdateDispositivoDto) {
  //   return `This action updates a #${id} dispositivo`;
  // }

  async remove(id: string) {
    const data = await this.findOne(id);
    console.log(data);

    if (!data) {
      throw new HttpException(
        'Dispositivo não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return await this.prismaService.dispositivo.delete({
      where: {
        id,
      },
    });
  }
}
