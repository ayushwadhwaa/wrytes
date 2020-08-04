const saveNote = async (contentText, id)=> {
    const data = {
        content: contentText
    }
    const url = "http://localhost:3000/saveNote?noteId="+id;
    try{
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }catch(err){
        return err;
    }
}