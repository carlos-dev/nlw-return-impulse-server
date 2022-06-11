import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendEmail: sendEmailSpy }
);

describe("Submit Feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "bug",
        comment: "bug",
        screenshot: "data:image/png;base64,8t34hc8",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendEmailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback whitout type", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "",
        comment: "bug",
        screenshot: "data:image/png;base64,8t34hc8",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback whitout comment", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "bug",
        comment: "",
        screenshot: "data:image/png;base64,8t34hc8",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "bug",
        comment: "comment",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });
});
