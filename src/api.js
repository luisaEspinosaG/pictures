import axios from 'axios' 

const searchImage = async(term) => {
    const url = 'htpps://api.unsplash.com/search/?client_id=wrBeybcu-MZu7CAqbyiKJsQ3CUbSbZqzkGwJ6H9e7xYJ4LOZ7zk0xnXe-HqNqYh8SEN0ehn0ndx0O4ZeUAb6T4'
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