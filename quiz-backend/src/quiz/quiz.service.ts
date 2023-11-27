import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';

@Injectable()
export class QuizService {
  constructor(private prisma: PrismaService) {}

  async create(createQuizDtos: CreateQuizDto[]) {
    const createdQuestions = [];

    for (const quizDto of createQuizDtos) {
      const { answers, ...questionData } = quizDto;

      const createdQuestion = await this.prisma.question.create({
        data: {
          ...questionData,
          answers: {
            create: answers,
          },
        },
      });

      createdQuestions.push(createdQuestion);
    }

    return createdQuestions;
  }

  async findAllHtmlQuizzes(category: string) {
    return await this.prisma.question.findMany({
      where: {
        category,
      },
      include: {
        answers: true,
      },
    });
  }

  async findByCategory(category: string) {
    return await this.prisma.question.findMany({
      where: {
        category,
      },
      include: {
        answers: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} quiz`;
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
