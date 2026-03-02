import path from 'path';
import { DataSource } from 'typeorm';


export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'school_management_system',
entities: [path.join(__dirname, '/../**/*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '/../database/migration/*{.ts,.js}')],
  migrationsRun:true,
  synchronize: false,
});