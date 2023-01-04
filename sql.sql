CREATE TABLE "hand" (
  "id" uuid PRIMARY KEY,
  "title" text,
  "text" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "users" (
  "id" uuid PRIMARY KEY,
  "hand_id" uuid,
  "name" text,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "hand_card" (
  "id" uuid PRIMARY KEY,
  "hand_id" uuid,
  "card_id" uuid,
  "order" integer
);

CREATE TABLE "card" (
  "id" uuid PRIMARY KEY,
  "num" text,
  "mark" text
);

CREATE TABLE "label" (
  "id" uuid PRIMARY KEY,
  "name" text,
  "hand_id" uuid
);

CREATE TABLE "action" (
  "id" uuid PRIMARY KEY,
  "hand_id" uuid,
  "street" integer,
  "order" integer,
  "position" text,
  "move" text,
  "size" real
);

CREATE TABLE "pot" (
  "id" uuid PRIMARY KEY,
  "hand_id" uuid,
  "street" integer,
  "size" real
);

ALTER TABLE "hand_card" ADD FOREIGN KEY ("hand_id") REFERENCES "hand" ("id");

ALTER TABLE "hand_card" ADD FOREIGN KEY ("card_id") REFERENCES "card" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("hand_id") REFERENCES "hand" ("id");

ALTER TABLE "label" ADD FOREIGN KEY ("hand_id") REFERENCES "hand" ("id");

ALTER TABLE "action" ADD FOREIGN KEY ("hand_id") REFERENCES "hand" ("id");

ALTER TABLE "pot" ADD FOREIGN KEY ("hand_id") REFERENCES "hand" ("id");
