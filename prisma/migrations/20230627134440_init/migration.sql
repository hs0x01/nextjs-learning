-- CreateTable
CREATE TABLE "employees" (
    "empNumber" TEXT NOT NULL PRIMARY KEY,
    "empName" TEXT NOT NULL,
    "deptNumber" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "departments" (
    "deptNumber" TEXT NOT NULL PRIMARY KEY,
    "deptName" TEXT NOT NULL
);
