import axios from 'axios'



export default async function getApi(name, page) {
    const URL ='https://pixabay.com/api/';
    const MY_KEY = '32634738-c4f3b04753ac88df1d3aaa7b6'
    const opt = `q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
    
    
    try {
            const response = await axios.get(`${URL}?key=${MY_KEY}&${opt}&page=${page}`);
            return response;
        } catch (error){
            // console.error(error);
            return error;
        }
}

