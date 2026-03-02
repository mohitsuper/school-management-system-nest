import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1772473115195 implements MigrationInterface {
    name = 'Auto1772473115195'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teacher_onboaring" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "personalIdId" uuid, CONSTRAINT "REL_98b43445e1fab074c433a6dada" UNIQUE ("personalIdId"), CONSTRAINT "PK_7b5aab9225d90c6becceb590a3d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "teacher_onboaring" ADD CONSTRAINT "FK_98b43445e1fab074c433a6dadac" FOREIGN KEY ("personalIdId") REFERENCES "teacher_personal_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher_onboaring" DROP CONSTRAINT "FK_98b43445e1fab074c433a6dadac"`);
        await queryRunner.query(`DROP TABLE "teacher_onboaring"`);
    }

}
