import React from 'react';
import { Link } from 'react-router-dom';


const Artistlist =(props) => {
    console.log("in the list>>>",props)
        const list = ({allArtist}) => {
            if(allArtist){
                
                return allArtist.map((data) => {
                    const style={
                        background:`url('/images/covers/${data.cover}.jpg')`
                    }
                    return(
                        <Link to={`/artist/${data.id}`} className="artist_item"
                        style={style}>
                            <div>{data.name}</div>
                        </Link>
                    )
                })
            }
        }
        return(
            <div className="artist_list">
                <h4>List of Artists</h4>
                {list(props)}
            </div>
        )
    
}

export default Artistlist