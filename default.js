import news from "./model/news.js";
import { data } from "./constants/data.js";

const DefaultData = async()=>{
    try{
        await news.deleteMany({});
        await news.insertMany(data);
        console.log('Data imported Successfully');
    }catch(error){
        console.log('Error: ', error.message);
    }
}

export default DefaultData;