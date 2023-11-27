import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post('html')
  createHtmlQuiz(@Body(new ValidationPipe()) createQuizDto: CreateQuizDto[]) {
    return this.quizService.create(createQuizDto);
  }

  @Post('css')
  createCssQuiz(@Body(new ValidationPipe()) createQuizDto: CreateQuizDto[]) {
    return this.quizService.create(createQuizDto);
  }

  @Post('javascript')
  createJavascriptQuiz(
    @Body(new ValidationPipe()) createQuizDto: CreateQuizDto[],
  ) {
    return this.quizService.create(createQuizDto);
  }

  @Post('accessibility')
  createAccessibilityQuiz(
    @Body(new ValidationPipe()) createQuizDto: CreateQuizDto[],
  ) {
    return this.quizService.create(createQuizDto);
  }

  @Get()
  findByCategory(@Query('category') category: string) {
    return this.quizService.findByCategory(category);
  }

  @Get()
  findAllHtml(@Query('category') category: string) {
    return this.quizService.findAllHtmlQuizzes(category);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizService.update(+id, updateQuizDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizService.remove(+id);
  }
}
