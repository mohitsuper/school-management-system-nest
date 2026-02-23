import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(()=>Teacher,teacher=>teacher.class)
  teacher:Teacher
  
}
