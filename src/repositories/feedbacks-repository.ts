export interface FeedBackData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedBackData) => Promise<void>;
}