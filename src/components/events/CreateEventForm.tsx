"use client"

export default function CreateEventForm() {
  return (
    <form className="flex flex-col gap-5">
      <label className="text-left" htmlFor="title" aria-required={true}>
        Title
      </label>
      <input className="input-text" type="text" name="title" id="" />
      <label className="text-left" htmlFor="description">
        Description
      </label>
      <textarea
        className="input-text resize-none"
        rows={6}
        name="description"
        id=""
      ></textarea>
      <label aria-required={true} className="text-left" htmlFor="date">
        Date
      </label>
      <input className="input-text" type="date" name="date" id="date" />
      <button className="form-button">Create Event</button>
    </form>
  )
}
