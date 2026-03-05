import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('teacher_address_details')
export class addressDetailsEntity {
    @PrimaryGeneratedColumn('uuid')
    id?:string;

    @Column()
    address?:string

    @Column()
    city?:string

    @Column()
    state?:string

    @Column()
    country?:string

    @Column()
    pincode?:string

}