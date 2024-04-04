import "../App.css" ;

const genres = [
    "Drama",
    "Crime",
    "Action",
    "Fantasy",
    "Western",
    "Science Fiction",
    "Thriller",
    "War",
    "Animation",
  ];


const GenerFilter = ({setSelectedGenre}) =>{

    function moviesFilter(genre){
        setSelectedGenre(genre);
        console.log("fitered by" , genre)
    }



    return (
        <div id="genre-conatiner">
            <h3>Filter by Genre</h3>
            <div className="genre-buttons">
                {
                    genres.map((genre)=> {
                       return(

                         <button
                            className="btn"
                            key={genre}
                            onClick={ () => moviesFilter(genre)}
                         >
                            {genre}
                         </button>
                         
                       )
                    })
                }

            </div>

        </div>
    );
    
};
 
export default GenerFilter;