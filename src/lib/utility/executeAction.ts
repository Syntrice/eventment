import { isRedirectError } from "next/dist/client/components/redirect-error"

/**
 * A utility function representing the result of a server actions execution.
 * https://github.com/codegenixdev/auth-nextjs-tutorial/blob/master/src/lib/executeAction.ts
 */

type Options<T> = {
  actionFn: () => Promise<T>
  successMessage?: string
}

export default async function executeAction<T>({
  actionFn,
  successMessage = "The action was successful",
}: Options<T>): Promise<{ success: boolean; message: string }> {
  try {
    await actionFn()

    return { success: true, message: successMessage }
  } catch (error) {
    if (isRedirectError(error)) {
      return { success: false, message: error.message }
    }
    return {
      success: false,
      message: "An error occurred on executing the action.",
    }
  }
}
