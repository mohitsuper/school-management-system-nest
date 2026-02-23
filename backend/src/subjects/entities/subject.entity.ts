import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subject')
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name?: string;

  @Column()
  status?: boolean;

  @ManyToMany(()=>Teacher,teacher=>teacher.subjects)
  teacher?:Teacher
}
