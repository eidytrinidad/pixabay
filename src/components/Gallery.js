import React,{useContext} from 'react';
import { GalleryContext } from './ContextProvider';


function Gallery({setSelectedImg}) {


const [pictures,search, setSearch,HandleSubmit] = useContext(GalleryContext)
return (
<>

    <form onSubmit={HandleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Search Pictures / Eg:dog" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button">
                Search
            </button>
        </div>
    </form>

    <section className="Gallery">
        {
        pictures.map((picture)=>(
        <article key={picture.id} className="max-w-xs rounded overflow-hidden shadow-lg mb-5">

            <img onClick={()=>setSelectedImg(picture.largeImageURL)} src={picture.webformatURL} alt="Display" />
            <div className="px-6 py-4">

                <p className="font-bold text-purple-500 text-xl mb-2">Photo by {picture.user}</p>


                <p><strong>Views:</strong> {picture.views}</p>
                <p><strong>Downloads:</strong> {picture.downloads}</p>
                <p><strong>Likes:</strong> {picture.likes}</p>

            </div>
            <div className="px-6 py-4">

                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{picture.tags}</span>

            </div>
        </article >
        ))
        }

    </section>

</>


)
}

export default Gallery