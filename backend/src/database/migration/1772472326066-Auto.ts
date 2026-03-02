import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1772472326066 implements MigrationInterface {
    name = 'Auto1772472326066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teacher_personal_details" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "dob" character varying NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying NOT NULL, CONSTRAINT "PK_b7c0a93c3684018c56b33816159" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "teacher_personal_details"`);
    }

}
