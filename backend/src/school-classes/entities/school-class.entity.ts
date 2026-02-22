import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('school-class')
export class SchoolClass {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name?: string;

  @Column()
  status?: boolean;

  @Column()
  room?: string;
}
