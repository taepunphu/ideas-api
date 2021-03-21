import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { IdeaDto } from './idea.dto';
import { IdeaService } from './idea.service';

@Controller('idea')
export class IdeaController {
  constructor(private ideaService: IdeaService) {}

  @Get()
  showAllIdeas() {
    return this.ideaService.showAll();
  }

  @Post()
  createIde(@Body() data: IdeaDto) {
    return this.ideaService.create(data);
  }

  @Get(':id')
  readIdea(@Param('id') id: number) {
    return this.ideaService.read(id);
  }

  @Put(':id')
  updateIdea(@Param('id') id: number, @Body() data: Partial<IdeaDto>) {
    return this.ideaService.update(id, data);
  }

  @Delete(':id')
  destroyIdeea(@Param('id') id: number) {
    return this.ideaService.destroy(id);
  }
}
