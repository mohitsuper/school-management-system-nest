import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('teacher_personal_details')
export class personalDetailsEntity {
    @PrimaryGeneratedColumn('uuid')
    id?:string;

    @Column()
    name?:string

    @Column()
    dob?:string

    @Column()
    email?:string

    @Column()
    phoneNumber?:string

}