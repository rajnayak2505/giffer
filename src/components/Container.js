import React, { useEffect, useRef, useState } from 'react'

const staticData = ["Trending", "Popular", "Funny", "Office Drama", "Meme", "Happy"]

const Container = () => {
    const searchText = useRef(null);
    const [gifs, setGif] = useState("");
    
    
    const getGif = async(qry) => {
        const data = await fetch("https://g.tenor.com/v1/search?q="+qry+"&key=LIVDSRZULELA&limit=20");
        const json = await data.json();
        // console.log(qry)
        setGif(json.results);
    };
    
    useEffect(() => {
        getGif()
    },[])

    if(!gifs) return;

    const handelGptSearchClick = () => {
        const qry =  searchText.current.value
        // console.log(qry)
        getGif(qry)
    };

    const getListItem = (e) => {
        const qry =  e.target.textContent
        // console.log(qry)
        getGif(qry)
    }

  return (
    <div className='container'>
        <div className="search-container">
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" className="search-input" placeholder="Search your emotion..." 
                ref={searchText}
            />
            <button className="search-button" onClick={handelGptSearchClick}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4He1lsW77_fFmyeBdsAk6V8r0tNX2V8k35A&s'/>
            </button>
            </form>
    </div>
        <div className='list-wrap'>
            <ul className='static-list'>
            {staticData?.map((item) => <li 
            key={item}
            onClick={getListItem}
            > {item} </li>)}
            </ul>
            <ul className='gif-data'>
                {gifs?.map((gif) => 
                <li key={gif?.id}>
                    <img src={gif?.media[0]?.gif?.url}/>
                </li>)}
            </ul>
        </div>
    </div>
  )
}

export default Container