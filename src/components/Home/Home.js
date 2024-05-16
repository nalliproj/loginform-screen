import { useEffect, useState } from "react";
import { AppConstants as config} from '../../app.constants';

const Home = () => {
    const [image, setImage] = useState(null);
  
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const getRes = await fetch(config.API_URL);
                const imgData = await getRes.json();
                if(getRes.ok){
                    setImage(imgData.message);
                }else {
                    console.error("Failed to fetch dog image:", imgData);
                }
    
            }catch (error) {
                console.error("Error", error);
            }
        };
        
        fetchImage();
    },[]);

    return (
        <div className="home-container"> 
            <img src={image} alt="image" width="500" height="500"/>
        </div>
    )
}

export default Home;