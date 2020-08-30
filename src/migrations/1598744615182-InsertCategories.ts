import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertCategories1598744615182 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "category" (id, name) VALUES(1, 'Category 1');`);
        await queryRunner.query(`INSERT INTO "category" (id, name) VALUES(2, 'Category 2');`);
        await queryRunner.query(`INSERT INTO "category" (id, name) VALUES(3, 'Category 3');`);
        await queryRunner.query(`INSERT INTO "category" (id, name) VALUES(4, 'Category 4');`);
        await queryRunner.query(`INSERT INTO "category" (id, name) VALUES(5, 'Category 5');`);
        await queryRunner.query(`INSERT INTO "category" (id, name) VALUES(6, 'Category 6');`);
        await queryRunner.query(`INSERT INTO "category" (id, name) VALUES(7, 'Category 7');`);
        await queryRunner.query(`INSERT INTO "category" (id, name) VALUES(8, 'Category 8');`);
        await queryRunner.query(`INSERT INTO "category" (id, name) VALUES(9, 'Category 9');`);
        await queryRunner.query(`INSERT INTO "category" (id, name) VALUES(10, 'Category 10');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE "category";`);
    }

}
