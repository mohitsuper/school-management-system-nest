import { MigrationInterface, QueryRunner } from "typeorm";

export class FixManyToMany1771919586869 implements MigrationInterface {
    name = 'FixManyToMany1771919586869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teachers_subjects_subject" ("teachersId" uuid NOT NULL, "subjectId" uuid NOT NULL, CONSTRAINT "PK_a1f57ab4ad89d2290d5b4f9d1c3" PRIMARY KEY ("teachersId", "subjectId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b77397f8ce78e873d6ee760a90" ON "teachers_subjects_subject" ("teachersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_15e17bc28614196bf30cc9df3c" ON "teachers_subjects_subject" ("subjectId") `);
        await queryRunner.query(`ALTER TABLE "teachers_subjects_subject" ADD CONSTRAINT "FK_b77397f8ce78e873d6ee760a90e" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "teachers_subjects_subject" ADD CONSTRAINT "FK_15e17bc28614196bf30cc9df3c8" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teachers_subjects_subject" DROP CONSTRAINT "FK_15e17bc28614196bf30cc9df3c8"`);
        await queryRunner.query(`ALTER TABLE "teachers_subjects_subject" DROP CONSTRAINT "FK_b77397f8ce78e873d6ee760a90e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_15e17bc28614196bf30cc9df3c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b77397f8ce78e873d6ee760a90"`);
        await queryRunner.query(`DROP TABLE "teachers_subjects_subject"`);
    }

}
