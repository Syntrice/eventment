"use client"

import createEvent from "@/lib/actions/create-event"
import { useActionState } from "react"

export default function CreateEventForm() {
  const [state, action, pending] = useActionState(createEvent, undefined)

  return (
    <form className="flex flex-col gap-5" action={action}>
      <label className="text-left" htmlFor="title" aria-required={true}>
        Title
      </label>
      <input className="input-text" type="text" name="title" id="" />
      {state?.errors?.title && (
        <p className="text-red-400 mb-5 text-left">{state.errors.title}</p>
      )}
      <label className="text-left" htmlFor="description">
        Description
      </label>
      <textarea
        className="input-text resize-none"
        rows={6}
        name="description"
        id=""
      ></textarea>
      {state?.errors?.description && (
        <p className="text-red-400 mb-5 text-left">
          {state.errors.description}
        </p>
      )}
      <label aria-required={true} className="text-left" htmlFor="date">
        Date
      </label>
      <input className="input-text" type="date" name="date" id="date" />
      {state?.errors?.date && (
        <p className="text-red-400 mb-5 text-left">{state.errors.date}</p>
      )}
      <button
        disabled={pending}
        aria-disabled={pending}
        className="form-button"
      >
        Create Event
      </button>
    </form>
  )
}
