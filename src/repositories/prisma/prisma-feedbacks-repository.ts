import { prisma } from "../../prisma";
import { FeedBackData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
 async create({ type, comment, screenshot}: FeedBackData) {
  await prisma.feedBack.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });
 };
}