import { SchoolClass } from 'src/school-classes/entities/school-class.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teachers')
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name?: string;

  @Column()
  email?: string;

  @ManyToMany(()=>Subject,subject=>subject.teacher)
  @JoinColumn()
  subjects?: Subject[];

  @ManyToMany(()=>SchoolClass,Classes=>Classes.teacher)
  class:SchoolClass[]
}
