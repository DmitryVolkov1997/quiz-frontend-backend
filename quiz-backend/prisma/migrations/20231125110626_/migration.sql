-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "quizId" INTEGER;

-- CreateTable
CREATE TABLE "Quiz" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE SET NULL ON UPDATE CASCADE;
