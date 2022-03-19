const URL = "https://rickandmortyapi.com/api/character/"

export async function getCharactersApi(){
    try{
        const request = await fetch(`${URL}?page=11`);
        const response = await request.json();
        return response.results;
    }catch(err){
        throw Error(err);
    }
}

export async function getCharactersByIdApi(){
    try{
        const request = await fetch(`${URL}`);
        const response = await request.json();
        return response;
    }catch(err){
        throw Error(err);
    }
}

export async function getEpisodeName(url) {
    try{
        const request = await fetch(url);
        const response = await request.json();
        return response.name;
    }catch (err) {
        throw Error(err);
    }
}
