import { getNotes } from "./noteDataProvider.js"
import noteList from "./noteList.js"
import noteFormComponent from "./noteForm.js"

getNotes().then(noteFormComponent).then(noteList)