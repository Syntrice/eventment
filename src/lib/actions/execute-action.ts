import { isRedirectError } from "next/dist/client/components/redirect-error"

export default async function executeAction<T>(action: () => Promise<T>) {
  try {
    return await action()
  } catch (error) {
    if (isRedirectError(error)) {
      // this error should be handled further up the call stack (as it is may trigger a redirect)
      throw error
    }
    console.log(error)
  }
}
