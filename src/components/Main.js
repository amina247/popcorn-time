function Main(){

    const moviesArray = [
        {
          "id": 1,
          "title": "The Godfather",
          "rating": 9
        },
        {
          "id": 2,
          "title": "Forrest Gump",
          "rating": 9
        },
        {
          "id": 3,
          "title": "Gladiator",
          "rating": 8
        },
      ]


    return(
        <div className="Main">
            {moviesArray.forEach( movieObj => {
                return <p>Does it work ???</p>
            })}
        </div>
    )
}

export default Main;