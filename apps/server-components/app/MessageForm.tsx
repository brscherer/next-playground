"use client";

import { submitMessage, ActionState } from "./actions";
import { useActionState } from "react";

export default function MessageForm() {
  const initialState: ActionState = {
    success: false,
    message: undefined,
    errors: undefined,
  };

  const [state, formAction] = useActionState(submitMessage, initialState);

  return (
    <form action={formAction} className="space-y-4" noValidate>
      <div>
        <label htmlFor="messageInput" className="block font-medium">
          Message
        </label>
        <textarea
          id="messageInput"
          name="message"
          required
          minLength={1}
          maxLength={200}
          className="mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue=""
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-600">
            {state.errors.message.join(", ")}
          </p>
        )}
      </div>
      {state.message && state.success && (
        <p className="text-green-600">{state.message}</p>
      )}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        disabled={!state.success && !!state.errors}
      >
        Submit
      </button>
    </form>
  );
}
