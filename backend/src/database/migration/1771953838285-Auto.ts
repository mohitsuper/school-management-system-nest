import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1771953838285 implements MigrationInterface {
    name = 'Auto1771953838285'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teachers_subjects_subject" ("teachersId" uuid NOT NULL, "subjectId" uuid NOT NULL, CONSTRAINT "PK_a1f57ab4ad89d2290d5b4f9d1c3" PRIMARY KEY ("teachersId", "subjectId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b77397f8ce78e873d6ee760a90" ON "teachers_subjects_subject" ("teachersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_15e17bc28614196bf30cc9df3c" ON "teachers_subjects_subject" ("subjectId") `);
        await queryRunner.query(`CREATE TABLE "teachers_classes_school-class" ("teachersId" uuid NOT NULL, "schoolClassId" uuid NOT NULL, CONSTRAINT "PK_4d61aeae8b443bf3ff89da1d210" PRIMARY KEY ("teachersId", "schoolClassId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_59e01a746bd39405cf77457bfc" ON "teachers_classes_school-class" ("teachersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_38c7902602007e91a8fe3d5169" ON "teachers_classes_school-class" ("schoolClassId") `);
        await queryRunner.query(`ALTER TABLE "school-class" ADD "teachersId" uuid`);
        await queryRunner.query(`ALTER TABLE "school-class" ADD CONSTRAINT "FK_cd79e0de4f210333b74a9f984dd" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teachers_subjects_subject" ADD CONSTRAINT "FK_b77397f8ce78e873d6ee760a90e" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "teachers_subjects_subject" ADD CONSTRAINT "FK_15e17bc28614196bf30cc9df3c8" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teachers_classes_school-class" ADD CONSTRAINT "FK_59e01a746bd39405cf77457bfce" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "teachers_classes_school-class" ADD CONSTRAINT "FK_38c7902602007e91a8fe3d51690" FOREIGN KEY ("schoolClassId") REFERENCES "school-class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teachers_classes_school-class" DROP CONSTRAINT "FK_38c7902602007e91a8fe3d51690"`);
        await queryRunner.query(`ALTER TABLE "teachers_classes_school-class" DROP CONSTRAINT "FK_59e01a746bd39405cf77457bfce"`);
        await queryRunner.query(`ALTER TABLE "teachers_subjects_subject" DROP CONSTRAINT "FK_15e17bc28614196bf30cc9df3c8"`);
        await queryRunner.query(`ALTER TABLE "teachers_subjects_subject" DROP CONSTRAINT "FK_b77397f8ce78e873d6ee760a90e"`);
        await queryRunner.query(`ALTER TABLE "school-class" DROP CONSTRAINT "FK_cd79e0de4f210333b74a9f984dd"`);
        await queryRunner.query(`ALTER TABLE "school-class" DROP COLUMN "teachersId"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_38c7902602007e91a8fe3d5169"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_59e01a746bd39405cf77457bfc"`);
        await queryRunner.query(`DROP TABLE "teachers_classes_school-class"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_15e17bc28614196bf30cc9df3c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b77397f8ce78e873d6ee760a90"`);
        await queryRunner.query(`DROP TABLE "teachers_subjects_subject"`);
    }

}
