import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

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
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const user = config.get('MONGO_USER');
        const pass = config.get('MONGO_PASSWORD');
        const host = config.get('MONGO_HOST');
        const port = config.get('MONGO_PORT');
        const db = config.get('MONGO_DB');
        return {
          uri: `mongodb://${user}:${pass}@${host}:${port}/${db}`,
        };
      },
    }),
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}