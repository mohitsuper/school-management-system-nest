import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1772814888533 implements MigrationInterface {
    name = 'Auto1772814888533'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teacher_selery_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_ec3456cbd7b8d0aef9caac26a0b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teacher_address_details" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "country" character varying NOT NULL, "pincode" character varying NOT NULL, CONSTRAINT "PK_80295d57268aee8ae8def1c2a58" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "teacher_address_details"`);
        await queryRunner.query(`DROP TABLE "teacher_selery_info"`);
    }

}
