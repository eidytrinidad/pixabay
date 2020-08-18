import React,{createContext,useState,useEffect} from 'react'


export const GalleryContext = createContext();

function ContextProvider({children}) {

    const [pictures, setpictures] = useState([])
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("")

    const getPictures =()=>{
        fetch(`https://pixabay.com/api/?key=17493627-9211722c7435f039dfa51d502&q=${query}&image_type=photo`)
        .then(response=>response.json())
        .then(data=>{
            setpictures(data.hits)
        })
    }

    const HandleSubmit =(e)=>{
        e.preventDefault();
        setQuery(search);
        setSearch("")
    }

    useEffect(() => {
      getPictures()
    }, [query])
    return (
        <GalleryContext.Provider value={[pictures,search, setSearch,HandleSubmit]}>
            {
                children
            }
        </GalleryContext.Provider>
    )
}

export default ContextProvider
