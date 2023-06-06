import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { TodoModule } from './todo/todo.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/guard/jwt.guard';
import { OauthModule } from './oauth/oauth.module';
import { RoomModule } from './room/room.module';
import { RssModule } from './rss/rss.module';
import { GithubModule } from './github/github.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
    TodoModule,
    OauthModule,
    RoomModule,
    RssModule,
    GithubModule,
  ],
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: JwtGuard,
  //   },
  // ],
})
export class AppModule {}
