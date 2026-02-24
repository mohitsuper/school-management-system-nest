import { Teacher } from '../../teacher/entities/teacher.entity';
import { Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subject')
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name?: string;

  @Column()
  status?: boolean;

  @ManyToMany(()=>Teacher,teachers=>teachers.subjects)
  teachers?:Teacher[];
}
