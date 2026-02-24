import { SchoolClass } from '../../school-classes/entities/school-class.entity';
import { Subject } from '../../subjects/entities/subject.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teachers')
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name?: string;

  @Column()
  email?: string;

  @ManyToMany(()=>Subject,subjects=>subjects.teachers,{
    cascade:true
  })
  @JoinTable()
  subjects?: Subject[];

  @ManyToMany(()=>SchoolClass,Classes=>Classes.teachers,{
    cascade:true
  })
  @JoinTable()
  classes:SchoolClass[]
}
