function deleteNote(noteID){
    fetch('/delete-note', {
        method:'POSt',
        body:JSON.stringify({noteID: noteID}),
    }).then((_res) => {
        window.location.href = '/'
    });
}