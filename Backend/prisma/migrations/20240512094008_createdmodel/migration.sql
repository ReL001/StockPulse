-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "phoneNumber" VARCHAR(15) NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "address" VARCHAR(255),
    "profile_image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "watchList" (
    "id" SERIAL NOT NULL,
    "stocks" TEXT[],
    "userID" INTEGER NOT NULL,

    CONSTRAINT "watchList_pkey" PRIMARY KEY ("id")
);
