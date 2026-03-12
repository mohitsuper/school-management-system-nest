import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teacher_selery_info')
export class seleryDetailsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  bankName: string;

  @Column()
  accountNumber: string;

  @Column()
  ifsc_code: string;

  @Column()
  basicSelery: string;
  
}
