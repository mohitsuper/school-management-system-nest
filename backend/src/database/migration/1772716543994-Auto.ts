import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1772716543994 implements MigrationInterface {
    name = 'Auto1772716543994'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teacher_personal_details" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "dob" character varying NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying NOT NULL, CONSTRAINT "PK_b7c0a93c3684018c56b33816159" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teacher_onboaring" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "personalIdId" uuid, CONSTRAINT "REL_98b43445e1fab074c433a6dada" UNIQUE ("personalIdId"), CONSTRAINT "PK_7b5aab9225d90c6becceb590a3d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teacher_address_details" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "country" character varying NOT NULL, "pincode" character varying NOT NULL, CONSTRAINT "PK_80295d57268aee8ae8def1c2a58" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "teacher_onboaring" ADD CONSTRAINT "FK_98b43445e1fab074c433a6dadac" FOREIGN KEY ("personalIdId") REFERENCES "teacher_personal_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher_onboaring" DROP CONSTRAINT "FK_98b43445e1fab074c433a6dadac"`);
        await queryRunner.query(`DROP TABLE "teacher_address_details"`);
        await queryRunner.query(`DROP TABLE "teacher_onboaring"`);
        await queryRunner.query(`DROP TABLE "teacher_personal_details"`);
    }

}
