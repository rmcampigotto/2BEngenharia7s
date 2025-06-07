import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const isProduction = config.get('NODE_ENV') === 'production';
        if (!isProduction) {
          console.warn('[!] TypeORM está com synchronize: true (modo dev)');
        }

        return {
          type: 'postgres',
          host: config.get('POSTGRES_HOST'),
          port: parseInt(config.get('POSTGRES_PORT'), 10),
          username: config.get('POSTGRES_USER'),
          password: config.get('POSTGRES_PASSWORD'),
          database: config.get('POSTGRES_DB'),
          autoLoadEntities: true,
          synchronize: !isProduction,
        };
      },
    }),
    UsersModule,
    AuthModule,
    TasksModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}