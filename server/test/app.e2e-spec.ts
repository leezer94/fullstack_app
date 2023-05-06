import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as pactum from 'pactum';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import { AuthDto } from '../src/auth/dto/auth.dto';
import { EditBookmarkDto } from '../src/bookmark/dto/edit-bookmark.dto';
import { CreateBookmarkDto } from '../src/bookmark/dto/create-bookmark.dto';
import { EditUserDto } from '../src/user/dto/edit-user.dto';
import { CreateTodoDto } from '../src/todo/dto/create-todo.dto';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);

    await prisma.cleanDb();

    pactum.request.setBaseUrl('http://localhost:3333');
  });

  afterAll(() => app.close());

  describe('/auth', () => {
    const dto: AuthDto = {
      email: '2kunhee94@gmail.com',
      password: '!rjsgml94',
    };

    describe('POST /auth/signup', () => {
      it('should throw an error with status code 400 if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({ password: dto.password })
          .expectStatus(400);
      });

      it('should throw an error with status code 400 if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({ email: dto.email })
          .expectStatus(400);
      });

      it('should throw an error with status code 400 if body is not given', () => {
        return pactum.spec().post('/auth/signup').expectStatus(400);
      });

      it('should sign up', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto)
          .expectStatus(201);
      });
    });

    describe('POST /auth/signin', () => {
      it('should throw an error with status code 401 if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({ password: dto.password })
          .expectStatus(400);
      });

      it('should throw an error with status code 400 if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({ email: dto.email })
          .expectStatus(400);
      });

      it('should throw an error with status code 400 if body is not given', () => {
        return pactum.spec().post('/auth/signin').expectStatus(400);
      });

      it('should sign in', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody(dto)
          .expectStatus(200)
          .stores('access_token', 'access_token')
          .stores('refresh_token', 'refresh_token');
      });
    });

    describe('POST refresh tokens', () => {
      it('should throw an error with status code 401 when refresh token is not given', () => {
        return pactum.spec().post('/auth/refresh').expectStatus(401);
      });

      it('should update access token and refresh token', () => {
        return pactum
          .spec()
          .post('/auth/refresh')
          .withHeaders({
            Authorization: `Bearer $S{refresh_token}`,
          })
          .expectStatus(200);
      });
    });

    describe('POST logout', () => {
      it('should delete hashed refresh token', () => {
        return pactum
          .spec()
          .post('/auth/logout')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .withPathParams('id', '$S{userId}')
          .expectStatus(200);
      });

      it('should throw an error with status 401 if access token is not given', () => {
        return pactum
          .spec()
          .post('/auth/logout')
          .withPathParams('id', '$S{userId}')
          .expectStatus(401);
      });
    });
  });

  // Users
  describe('/users', () => {
    describe('GET /users/me', () => {
      it('should throw an error with status code 401 if token is not given', () => {
        return pactum.spec().get('/users/me').expectStatus(401);
      });

      it('should get current user', () => {
        return pactum
          .spec()
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .get('/users/me')
          .expectStatus(200);
      });
    });

    describe('PATCH /users', () => {
      it('should edit user details', () => {
        const dto: EditUserDto = {
          firstName: 'Keonhee',
          lastName: 'Lee',
          email: '2kunhee94@edited.com',
        };
        return pactum
          .spec()
          .patch('/users')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.firstName)
          .expectBodyContains(dto.email);
      });
    });
  });

  // Bookmarks
  describe('/bookmark', () => {
    describe('GET /bookmarks', () => {
      it('should get empty bookmarks', () => {
        return pactum
          .spec()
          .get('/bookmarks')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .expectStatus(200)
          .expectBody([]);
      });
    });

    describe('POST /bookmarks', () => {
      const dto: CreateBookmarkDto = {
        title: 'First Bookmark',
        link: 'https://youtu.be/GHTA143_b-s',
      };
      it('should create a bookmark', () => {
        return pactum
          .spec()
          .post('/bookmarks')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .withBody(dto)
          .expectStatus(201)
          .stores('bookmarkId', 'id');
      });
    });

    describe('GET /Bookmarks', () => {
      it('should get bookmarks', () => {
        return pactum
          .spec()
          .get('/bookmarks')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .expectStatus(200)
          .expectJsonLength(1);
      });
    });

    describe('GET /bookmarks/id', () => {
      it('should get bookmark by id', () => {
        return pactum
          .spec()
          .get('/bookmarks/{id}')
          .withPathParams('id', '$S{bookmarkId}')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .expectStatus(200)
          .expectBodyContains('$S{bookmarkId}');
      });
    });

    describe('PATCH /bookmarks/id', () => {
      const dto: EditBookmarkDto = {
        title: 'NestJs Course for Beginners - Create a REST API',
        description: 'NestJs Course for Beginners - Create a REST API',
      };

      it('should edit bookmark by id', () => {
        return pactum
          .spec()
          .patch('/bookmarks/{id}')
          .withPathParams('id', '$S{bookmarkId}')
          .withBody(dto)
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .expectBodyContains(dto.title)
          .expectBodyContains(dto.description)
          .expectStatus(200);
      });
    });

    describe('DELETE /bookmarks/id', () => {
      it('should delete bookmark by id', () => {
        return pactum
          .spec()
          .delete('/bookmarks/{id}')
          .withPathParams('id', '$S{bookmarkId}')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .expectStatus(204);
      });

      it('should get empty bookmarks', () => {
        return pactum
          .spec()
          .get('/bookmarks')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .expectStatus(200)
          .expectBody([]);
      });
    });
  });

  // Todos
  describe('/todos', () => {
    describe('GET /todos', () => {
      it('should return empty todos', () => {
        return pactum
          .spec()
          .get('/todos')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .expectStatus(200)
          .expectBody([]);
      });
    });
    describe('POST /todos', () => {
      const dto: CreateTodoDto = {
        title: 'new Todo',
        description: 'new Todo',
      };

      it('should create new todo', () => {
        return pactum
          .spec()
          .post('/todos')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .withBody(dto)
          .expectStatus(201)
          .stores('todoId', 'id');
      });
    });
    describe('PATCH /todos/id', () => {
      const dto: CreateTodoDto = {
        title: 'updated Todo',
        description: 'updated Todo',
        status: 'IN_PROGRESS',
      };

      it('should update todo by id', () => {
        return pactum
          .spec()
          .patch('/todos/{id}')
          .withPathParams('id', '$S{todoId}')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .withBody(dto)
          .expectStatus(200);
      });

      it('should throw an error with status code 401 when access_token is not given', () => {
        return pactum
          .spec()
          .patch('/todos/{id}')
          .withPathParams('id', '$S{todoId}')
          .withBody(dto)
          .expectStatus(401);
      });

      it('should throw an error with status code 402 when status is not given', () => {
        return pactum
          .spec()
          .patch('/todos/{id}')
          .withPathParams('id', '$S{todoId}')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .withBody({
            title: dto.title,
            description: dto.description,
          })
          .expectStatus(403);
      });
    });
    describe('DELETE /todos/id', () => {
      it('should delete todo by id', () => {
        return pactum
          .spec()
          .delete('/todos/{id}')
          .withPathParams('id', '$S{todoId}')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .expectStatus(204);
      });
    });

    describe('DELETE /todos', () => {
      it('should delete all todos of user', () => {
        return pactum
          .spec()
          .delete('/todos')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .expectStatus(204);
      });

      it('should return empty todos', () => {
        return pactum
          .spec()
          .get('/todos')
          .withHeaders({
            Authorization: `Bearer $S{access_token}`,
          })
          .expectStatus(200)
          .expectBody([]);
      });
    });
  });
});
