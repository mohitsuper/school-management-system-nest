import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { personalDetailsEntity } from "./personal-details.entity";

@Entity('teacher_onboaring')
export class TeacherOnboarding {
    @PrimaryGeneratedColumn('uuid')
    id?:string;

    @OneToOne(()=>personalDetailsEntity,{
        cascade:true,
        nullable:true
    })
    @JoinColumn()
    personalId?:personalDetailsEntity
}
