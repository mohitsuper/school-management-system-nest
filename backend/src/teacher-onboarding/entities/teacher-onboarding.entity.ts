import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { personalDetailsEntity } from "./personal-details.entity";
import { addressDetailsEntity } from "./address-details.entity";
import { seleryDetailsEntity } from "./selery-details.entity";
import { documentDetailsEntity } from "./document-details.entity";

@Entity('teacher_onboaring')
export class TeacherOnboarding {
    @PrimaryGeneratedColumn('uuid')
    id?:number;

    @OneToOne(()=>personalDetailsEntity,{
        cascade:true,
        nullable:true
    })
    @JoinColumn()
    personalId?:personalDetailsEntity


    @OneToOne(()=>addressDetailsEntity,{
        cascade:true,
        nullable:true
    })
    @JoinColumn()
    addressId?:addressDetailsEntity


     @OneToOne(()=>seleryDetailsEntity,{
        cascade:true,
        nullable:true
    })
    @JoinColumn()
    seleryId?:seleryDetailsEntity


     @OneToOne(()=>documentDetailsEntity,{
        cascade:true,
        nullable:true
    })
    @JoinColumn()
    documentId?:documentDetailsEntity
}
