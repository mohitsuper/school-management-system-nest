import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teachers')
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name?: string;

  @Column()
  email?: string;

  @Column()
  subject?: string;
}
