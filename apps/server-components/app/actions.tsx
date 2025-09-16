"use server";

import { messageSchema } from "./validation";

export type ActionState = {
  success: boolean;
  message?: string;
  errors?: {
    message?: string[];
  };
};

export async function submitMessage(
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  const raw = {
    message: formData.get("message")?.toString() ?? "",
  };

  const result = messageSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      errors: { message: result.error.flatten().fieldErrors.message },
    };
  }


  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    message: `Server got: ${raw.message}`,
  };
}
