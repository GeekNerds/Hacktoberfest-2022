function getNoteId() {
    let noteObject = getExistingNotes()
    if(!noteObject){
        return
    }
    const keysArray = Object.keys(noteObject)
    const numberKeys = keysArray.map((key)=>Number(key))
    console.log(numberKeys)
    return Math.max( ...numberKeys) + 1
}

function getExistingNotes() {
    let notes = localStorage.getItem('notes')
    if(!notes){
        return null
    }
return JSON.parse(notes)
}