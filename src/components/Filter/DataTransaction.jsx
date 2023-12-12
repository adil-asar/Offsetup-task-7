import React from "react";
import Dialogbox from "./Dialogbox";
import EditNoteIcon from '@mui/icons-material/EditNote';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
const handleClick = (title) => {
  console.log(`You clicked me! ${title}`);
};

const columns = [
  {
    name: "Date",
    selector: row => row.title,
    sortable: true,
    cell: (d) => (
      <p
        style={{
          fontSize: "16px",
          color: "rgb(83, 92, 104)",
          fontWeight: "400",
          letterSpacing: "1px",
          fontFamily: "Titillium Web, sans-serif",
        }}
      >
        {d.title}
      </p>
    ),
  },
  {
    name: "Director",
    selector: "director",
    sortable: true,
    cell: (d) => (
      <p
        style={{
          fontSize: "16px",
          color: "rgb(83, 92, 104)",
          fontWeight: "400",
          letterSpacing: "1px",
          fontFamily: "Titillium Web, sans-serif",
        }}
      >
        {d.director}
      </p>
    ),
  },
  {
    name: "Genres",
    selector: "genres",
    sortable: true,
    cell: (d) => (
      <p
        style={{
          fontSize: "16px",
          color: "rgb(83, 92, 104)",
          fontWeight: "400",
          letterSpacing: "1px",
          fontFamily: "Titillium Web, sans-serif",
        }}
      >
        {d.genres.join(", ")}
      </p>
    ),
  },
  {
    name: "Year",
    selector: "year",
    sortable: true,
    cell: (d) => (
      <p
        style={{
          fontSize: "16px",
          color: "rgb(83, 92, 104)",
          fontWeight: "400",
          letterSpacing: "1px",
          fontFamily: "Titillium Web, sans-serif",
        }}
      >
        {d.year}
      </p>
    ),
  },
  {
    name: "Action",
    sortable: false,
    selector: "null",
    cell: (d) => [
      <i>
<VisibilitySharpIcon fontSize="large"  sx={{color:'#FF9F43',marginRight:'10px',borderRadius:'4px' ,padding:'5px', bgcolor:"#fff"}}/>
      </i>,
       <i>
       <EditNoteIcon fontSize="large"  sx={{color:'#FF9F43',marginRight:'10px',borderRadius:'4px' ,padding:'5px', bgcolor:"#fff"}}/>
             </i>,
      <i>
<Dialogbox/>
      </i>,
    ],
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",

    genres: ["Comedy", "Fantasy"],
    director: "Tim Burton",
  },
  {
    id: 2,
    title: "The Cotton Club",
    year: "1984",

    genres: ["Crime", "Drama", "Music"],
    director: "Francis Ford Coppola",
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    year: "1994",

    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
  },
  {
    id: 4,
    title: "Crocodile Dundee",
    year: "1986",
    genres: ["Adventure", "Comedy"],
    director: "Peter Faiman",
  },
  {
    id: 5,
    title: "Valkyrie",
    year: "2008",
    genres: ["Drama", "History", "Thriller"],
    director: "Bryan Singer",
  },
  {
    id: 6,
    title: "Ratatouille",
    year: "2007",
    runtime: "111",
    genres: ["Animation", "Comedy", "Family"],
    director: "Brad Bird, Jan Pinkava",
  },
  {
    id: 7,
    title: "City of God",
    year: "2002",
    runtime: "130",
    genres: ["Crime", "Drama"],
    director: "Fernando Meirelles, Kátia Lund",
  },
  {
    id: 8,
    title: "Memento",
    year: "2000",
    genres: ["Mystery", "Thriller"],
    director: "Christopher Nolan",
  },
  {
    id: 9,
    title: "The Intouchables",
    year: "2011",
    genres: ["Biography", "Comedy", "Drama"],
    director: "Olivier Nakache, Eric Toledano",
  },
  {
    id: 10,
    title: "Stardust",
    year: "2007",
    genres: ["Adventure", "Family", "Fantasy"],
    director: "Matthew Vaughn",
  },
  {
    id: 11,
    title: "Apocalypto",
    year: "2006",
    genres: ["Action", "Adventure", "Drama"],
    director: "Mel Gibson",
  },
  {
    id: 12,
    title: "Taxi Driver",
    year: "1976",
    genres: ["Crime", "Drama"],
    director: "Martin Scorsese",
  },
  {
    id: 13,
    title: "No Country for Old Men",
    year: "2007",
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: 14,
    title: "Planet 51",
    year: "2009",
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Jorge Blanco, Javier Abad, Marcos Martínez",
  },
  {
    id: 15,
    title: "Looper",
    year: "2012",
    genres: ["Action", "Crime", "Drama"],
    director: "Rian Johnson",
  },
  {
    id: 16,
    title: "Corpse Bride",
    year: "2005",
    genres: ["Animation", "Drama", "Family"],
    director: "Tim Burton, Mike Johnson",
  },
  {
    id: 17,
    title: "The Third Man",
    year: "1949",
    genres: ["Film-Noir", "Mystery", "Thriller"],
    director: "Carol Reed",
  },
  {
    id: 18,
    title: "The Beach",
    year: "2000",
    genres: ["Adventure", "Drama", "Romance"],
    director: "Danny Boyle",
    actors:
      "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
  },
  {
    id: 19,
    title: "Scarface",
    year: "1983",
    genres: ["Crime", "Drama"],
    director: "Brian De Palma",
  },
  {
    id: 20,
    title: "Sid and Nancy",
    year: "1986",
    genres: ["Biography", "Drama", "Music"],
    director: "Alex Cox",
  },
];

export { columns, data };
