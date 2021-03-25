import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaModule } from './idea/idea.module';
import { HttpErrorFillter } from './shared/http-error.fillter';
import { LoggingInterceptor } from "./shared/logging.interceptor";

@Module({
  imports: [TypeOrmModule.forRoot(), IdeaModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFillter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    }
  ],
})
export class AppModule {}
