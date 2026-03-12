import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1773292142148 implements MigrationInterface {
    name = 'Auto1773292142148'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teacher_document_details" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "addharNumber" character varying NOT NULL, "panNumber" character varying NOT NULL, "status" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_2c5b88a883aba2096524eed3fd8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "teacher_document_details"`);
    }

}
