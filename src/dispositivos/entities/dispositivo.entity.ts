import { Categoria } from '@prisma/client';

export class Dispositivo {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  habilitado: boolean;
  categoria: Categoria;
}
