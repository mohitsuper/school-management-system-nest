import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('teacher_selery_info')
export class seleryDetailsEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string
}