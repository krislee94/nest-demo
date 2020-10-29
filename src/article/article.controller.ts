import { Controller, Get, Query, Post, Body, Response } from '@nestjs/common';
import { NewsService } from '../news/news.service';
@Controller('article')
export class ArticleController {
  constructor(private newsServices: NewsService) {}
  @Get()
  index() {
    return {
      dataList: this.newsServices.findAll(),
    };
  }
  @Get('add')
  add(): string {
    return '这是article里面的Add';
  }
  /**
   * 如果访问
   * 1. http://localhost:7003/article/about  => {}
   * 2. http://localhost:7003/article/about?query=1 => {query:1}
   * 3. http://localhost:7003/article/about?query=1&dit=2 { query: '1', dit: '2'}
   * @param query
   */
  @Get('about')
  getAbout(@Query() query): string {
    console.log(query);
    return query;
  }
  /**
   * http://localhost:7003/article/list?id=3.1415926 => 3.1415926
   *
   * @param query
   */
  @Get('list')
  getNews(@Query('id') query): string {
    console.log(query); //这里获取的就是Get传值里面的Id的值
    return query;
  }

  @Post('doAdd')
  doAdd(@Body() body, @Response() res) {
    console.log(body);
    // console.log(res);
    res.redirect('/article');
  }
}
