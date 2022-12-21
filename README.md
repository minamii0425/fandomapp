# Node.js Express & PostgreSQL: CRUD Rest APIs example with Sequelize

## 使用コンポーネント

- React
- TypeScript
- Next.js
- axios
- Prisma

## もくじ

### 1. バックエンド

#### Next.js アプリの作成

```typescript
# npx create-next-app <app name> --typescript
```

#### Postgresql のセットアップ

AWS の無料枠内で PostgreSQL を使用する

ガバガバセキュリティだが下記のようにインバウンドルールを設定しローカルから DB にアクセスできるように
本当は EC2 踏み台にしてやるとかやるべきなんだろうが・・・

![](/fandom/images/2022-12-15-16-13-10.png)

#### Prisma のセットアップ

Next.js と PostgreSQL の接続を行う

##### 初期設定

TypeScript プロジェクトを初期化する。

```typescript
# npm init -y
Wrote to /Users/minamii0425/Library/CloudStorage/Box-Box/Work/Productive/SelfEducation/frontend_edu/next/nextjs-prisma-axios/prisma/package.json:

{
  "name": "prisma",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

開発依存関係として Prisma CLI を追加する。

```typescript
# npm install prisma typescript ts-node @types/node --save-dev

added 21 packages, and audited 22 packages in 6s

found 0 vulnerabilities
minamii0425@minamii0425 prisma %
```

TypeScript を初期化する。
これで Prisma CLI を npx をプレフィックスとして呼び出すことができるようになる。

```typescript
# npx tsc --init

Created a new tsconfig.json with:
                                                                                                                     TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
minamii0425@minamii0425 prisma %

```

以下のコマンドで Prisma スキーマ・ファイルを作成し、Prisma プロジェクトをセットアップします。
このコマンドは 2 つのことを行います。

- データベース接続変数とスキーマモデルを含む Prisma スキーマを含む schema.prisma というファイルを含む prisma という新しいディレクトリを作成します。
- プロジェクトのルート・ディレクトリに .env ファイルを作成します。このファイルは環境変数（データベース接続など）を定義するために使用されます

```typescript
# npx prisma init

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started

```

##### DB への接続

`.env`に接続先 DB のアドレスを記載

```bash
DATABASE_URL="postgresql://minamii0425:1seP@ssw0rd@localhost:5432/testdb?schema=public"
```

##### データベーススキーマの作成

Prisma Migrate を使用して、データベースのテーブルを作成します。
prisma/schema.prisma にある Prisma スキーマに、以下の Prisma データモデルを追加します。

```sql
model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String   @db.VarChar(255)
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}

model Profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  user   User    @relation(fields: [userId], references: [id])
  userId Int     @unique
}

model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  posts   Post[]
  profile Profile?
}
```

データモデルをデータベーススキーマにマッピングするには、prisma migrate CLI コマンドを使用する必要があります。
このコマンドは 2 つのことを行います。

- この移行のための新しい SQL 移行ファイルを作成します。
- データベースに対して SQL マイグレーションファイルを実行する

> 注意: generate はデフォルトでは、prisma migrate dev を実行した後に、フードの下で呼び出されます。prisma-client-js ジェネレータがスキーマで定義されている場合、これは@prisma/client がインストールされているかどうかをチェックし、それがない場合はインストールします。

```bash
minamii0425@minamii0425 nextjs-prisma-axios % npx prisma migrate dev --name init
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "testdb", schema "public" at "localhost:5432"

Drift detected: Your database schema is not in sync with your migration history.

The following is a summary of the differences between the expected database schema given your migrations files, and the actual schema of the database.

It should be understood as the set of changes to get from the expected schema to the actual schema.

If you are running this the first time on an existing database, please make sure to read this documentation page:
https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate/troubleshooting-development

[+] Added tables
  - Post
  - accounts
  - sessions
  - users
  - verificationtokens

[*] Changed the `Post` table
  [+] Added foreign key on columns (authorId)

[*] Changed the `accounts` table
  [+] Added unique index on columns (provider, provider_account_id)
  [+] Added foreign key on columns (user_id)

[*] Changed the `sessions` table
  [+] Added unique index on columns (session_token)
  [+] Added foreign key on columns (user_id)

[*] Changed the `users` table
  [+] Added unique index on columns (email)

[*] Changed the `verificationtokens` table
  [+] Added unique index on columns (identifier, token)
  [+] Added unique index on columns (token)

✔ We need to reset the PostgreSQL database "testdb" at "localhost:5432".
Do you want to continue? All data will be lost. … yes

Applying migration `20221213085957_init`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20221213085957_init/
    └─ migration.sql

Your database is now in sync with your schema.

Running generate... (Use --skip-generate to skip the generators)
yarn add v1.22.19
warning ../../../../../../../../../package.json: No license field
warning package-lock.json found. Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files. To clear this warning, remove package-lock.json.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 2 new dependencies.
info Direct dependencies
└─ @prisma/client@4.7.1
info All dependencies
├─ @prisma/client@4.7.1
└─ @prisma/engines-version@4.7.1-1.272861e07ab64f234d3ffc4094e32bd61775599c
✨  Done in 19.26s.

✔ Generated Prisma Client (4.7.1 | library) to ./node_modules/@prisma/client in 81ms


minamii0425@minamii0425 nextjs-prisma-axios %
```

Post、Profile、User の３つのテーブルが作成されている

```sql
testdb=# \d
                  List of relations
 Schema |        Name        |   Type   |    Owner
--------+--------------------+----------+-------------
 public | Post               | table    | minamii0425
 public | Post_id_seq        | sequence | minamii0425
 public | Profile            | table    | minamii0425
 public | Profile_id_seq     | sequence | minamii0425
 public | User               | table    | minamii0425
 public | User_id_seq        | sequence | minamii0425
 public | _prisma_migrations | table    | minamii0425
(7 rows)

testdb=#
```

##### Prisma クライアントのインストール

Prisma クライアントを使用するには、@prisma/client パッケージをインストールする必要があります。
インストールコマンドは自動的に prisma generate を起動し、Prisma スキーマを読み込んで、モデルに合わせたバージョンの Prisma Client を生成することに注意してください。
今後、Prisma スキーマを変更する場合は、Prisma Client API の変更に対応するため、手動で prisma generate を呼び出す必要があります。

```bash
minamii0425@minamii0425 nextjs-prisma-axios % npm install @prisma/client

up to date, audited 273 packages in 3s

88 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
minamii0425@minamii0425 nextjs-prisma-axios %
```

##### データベースのクエリ

Prisma Client を生成したので、データベースのデータを読み書きするためのクエリを書き始めることができます。このガイドでは、プレーンな Node.js スクリプトを使用して、Prisma Client の基本的な機能をいくつか見ていきます。

index.ts という名前のファイルを新規に作成し、次のコードを追加します。

### 2. フロントエンド

#### axios の設定

React と Next.js の接続を行う
