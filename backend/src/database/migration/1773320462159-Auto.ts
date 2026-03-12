import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1773320462159 implements MigrationInterface {
    name = 'Auto1773320462159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher_onboaring" ADD "documentIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "teacher_onboaring" ADD CONSTRAINT "UQ_58ae28caae9d2d6d67d3a7b656a" UNIQUE ("documentIdId")`);
        await queryRunner.query(`ALTER TABLE "teacher_onboaring" ADD CONSTRAINT "FK_58ae28caae9d2d6d67d3a7b656a" FOREIGN KEY ("documentIdId") REFERENCES "teacher_document_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher_onboaring" DROP CONSTRAINT "FK_58ae28caae9d2d6d67d3a7b656a"`);
        await queryRunner.query(`ALTER TABLE "teacher_onboaring" DROP CONSTRAINT "UQ_58ae28caae9d2d6d67d3a7b656a"`);
        await queryRunner.query(`ALTER TABLE "teacher_onboaring" DROP COLUMN "documentIdId"`);
    }

}
