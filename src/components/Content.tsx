import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

type MovieProps = {
  imdbID: string
  Title: string
  Poster: string
  Ratings: Array<{
    Source: string
    Value: string
  }>
  Runtime: string
}

type SelectedGenreProps = {
  title: string
}

interface MoviesProps {
  movies: MovieProps[]
  selectedGenre: SelectedGenreProps
}

export function Content({ movies, selectedGenre }: MoviesProps) {
  return (
    <div className="container">
      <Header
       title={selectedGenre.title}
      />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}