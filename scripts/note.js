const noteComponent = (notes) => {


  return `
    <div>
      <div>${notes.title}</div>
      <div>${notes.text}</div>
      <div>${new Date(notes.date).toDateString('en-US') + " " + new Date(notes.date).toTimeString().split("GMT")[0]}</div>
    </div>
  `
}

export default noteComponent