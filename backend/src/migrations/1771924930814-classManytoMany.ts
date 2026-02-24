import { MigrationInterface, QueryRunner } from "typeorm";

export class ClassManytoMany1771924930814 implements MigrationInterface {
    name = 'ClassManytoMany1771924930814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teachers_classes_school-class" ("teachersId" uuid NOT NULL, "schoolClassId" uuid NOT NULL, CONSTRAINT "PK_4d61aeae8b443bf3ff89da1d210" PRIMARY KEY ("teachersId", "schoolClassId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_59e01a746bd39405cf77457bfc" ON "teachers_classes_school-class" ("teachersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_38c7902602007e91a8fe3d5169" ON "teachers_classes_school-class" ("schoolClassId") `);
        await queryRunner.query(`ALTER TABLE "teachers_classes_school-class" ADD CONSTRAINT "FK_59e01a746bd39405cf77457bfce" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "teachers_classes_school-class" ADD CONSTRAINT "FK_38c7902602007e91a8fe3d51690" FOREIGN KEY ("schoolClassId") REFERENCES "school-class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teachers_classes_school-class" DROP CONSTRAINT "FK_38c7902602007e91a8fe3d51690"`);
        await queryRunner.query(`ALTER TABLE "teachers_classes_school-class" DROP CONSTRAINT "FK_59e01a746bd39405cf77457bfce"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_38c7902602007e91a8fe3d5169"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_59e01a746bd39405cf77457bfc"`);
        await queryRunner.query(`DROP TABLE "teachers_classes_school-class"`);
    }

}
