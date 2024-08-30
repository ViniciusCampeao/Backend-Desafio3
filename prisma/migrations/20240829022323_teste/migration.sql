-- CreateTable
CREATE TABLE "Tour" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "maxPeople" INTEGER NOT NULL,
    "urlImage" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "initialDate" DATETIME NOT NULL,
    "finalDate" DATETIME NOT NULL,
    "avarageRating" REAL NOT NULL,
    "duration" INTEGER NOT NULL,
    "overview" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,
    "minAge" INTEGER NOT NULL,
    CONSTRAINT "Tour_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Types" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tour_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "services" REAL NOT NULL,
    "location" REAL NOT NULL,
    "Amenities" REAL NOT NULL,
    "Prices" REAL NOT NULL,
    "Food" REAL NOT NULL,
    "comfort" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "tourId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Review_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Types" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,
    CONSTRAINT "City_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "continentId" INTEGER NOT NULL,
    CONSTRAINT "Country_continentId_fkey" FOREIGN KEY ("continentId") REFERENCES "Continent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Continent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Types_name_key" ON "Types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Continent_name_key" ON "Continent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
