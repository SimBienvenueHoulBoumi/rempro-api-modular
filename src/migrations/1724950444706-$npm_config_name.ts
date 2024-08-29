import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1724950444706 implements MigrationInterface {
  name = ' $npmConfigName1724950444706';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "anime_or_webtoon_vue" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "platform" varchar NOT NULL, "progression" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "updatedAt" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "userId" varchar)`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "role" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "updatedAt" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_anime_or_webtoon_vue" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "platform" varchar NOT NULL, "progression" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "updatedAt" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "userId" varchar, CONSTRAINT "FK_3c554a26ff56e792426c1e9f005" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_anime_or_webtoon_vue"("id", "name", "platform", "progression", "createdAt", "updatedAt", "userId") SELECT "id", "name", "platform", "progression", "createdAt", "updatedAt", "userId" FROM "anime_or_webtoon_vue"`,
    );
    await queryRunner.query(`DROP TABLE "anime_or_webtoon_vue"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_anime_or_webtoon_vue" RENAME TO "anime_or_webtoon_vue"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "anime_or_webtoon_vue" RENAME TO "temporary_anime_or_webtoon_vue"`,
    );
    await queryRunner.query(
      `CREATE TABLE "anime_or_webtoon_vue" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "platform" varchar NOT NULL, "progression" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "updatedAt" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "userId" varchar)`,
    );
    await queryRunner.query(
      `INSERT INTO "anime_or_webtoon_vue"("id", "name", "platform", "progression", "createdAt", "updatedAt", "userId") SELECT "id", "name", "platform", "progression", "createdAt", "updatedAt", "userId" FROM "temporary_anime_or_webtoon_vue"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_anime_or_webtoon_vue"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "anime_or_webtoon_vue"`);
  }
}
