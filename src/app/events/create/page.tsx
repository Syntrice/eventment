import CenteredContainer from "@/components/common/CenteredContainer"
import FormContainer from "@/components/common/FormContainer"
import CreateEventForm from "@/components/events/CreateEventForm"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Create() {
  // Redirect if not logged in
  const session = await auth()
  if (!session) {
    redirect("/login")
  } else {
    return (
      <CenteredContainer>
        <FormContainer>
        <h1 className="text-2xl mb-10 text-center">Create a new event</h1>
        <CreateEventForm />
        </FormContainer>
      </CenteredContainer>
    )
  }
}
