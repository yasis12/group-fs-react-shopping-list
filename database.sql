
CREATE TABLE "list" (
  "id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"quantity" decimal (6,2) NOT NULL,
	"unit" VARCHAR(20) 
);

INSERT INTO "list" ("name", "quantity", "unit") 
VALUES ('bread', 2, 'loaf'), ('Apple', 5, 'lbs'), ('Mac & Cheese', 3, 'boxes')