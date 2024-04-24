import axios from 'axios' 

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=J4LOZ7zk0xnXe-HqNqYh8SEN0ehn0ndx0O4ZeUAb6T4'
    const response = await axios.get(url,{
        params:{
            query: term
        }
    })
    
    console.log(term)
    console.log(response.data.results)

return response.data.results
}

export default searchImage