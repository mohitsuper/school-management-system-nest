import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('teacher_document_details')
export class documentDetailsEntity {
    @PrimaryGeneratedColumn('uuid')
    id?:string;

    @Column()
    addharNumber?:string

    @Column()
    panNumber?:string

    @Column({default:false})
    status?:boolean
}