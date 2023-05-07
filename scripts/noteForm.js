import { saveNote } from "./noteDataProvider.js"

const contentTarget = document.querySelector(".note-form-container")
const eventHub = document.querySelector(".container")
const noteFormComponent = () => {
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "save-note") {
      const newNote = {
        title: document.querySelector("#note-title").value,
        text: document.querySelector("#note-text").value,
        date: Date.now()

      }

      saveNote(newNote)
    }
  })
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "show-notes") {
      const message = new CustomEvent("showNoteButtonClicked")
      eventHub.dispatchEvent(message)
    }
  })
  const render = () => {
    contentTarget.innerHTML = `
    <div>
    <div class="note-field">Title: <input type="text" id ="note-title"></div>
    <div class="note-field">Text: <input type="text" id="note-text"></div>
    <button id="save-note">Save Note</button>
    <button id="show-note">Show all notes</button>
    </div>
    `
  }
  render()
}

export default noteFormComponent