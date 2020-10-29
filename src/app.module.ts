import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';
import { NewsService } from './news/news.service';

@Module({
  imports: [],
  controllers: [AppController, ArticleController],
  providers: [AppService, NewsService],
})
export class AppModule {}
