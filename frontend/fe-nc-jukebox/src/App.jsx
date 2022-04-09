const App = () => {
  const playListTitle = '걸그룹노래 모음';
  const songs = [
    {
      id: 1,
      title: 'Dreams',
      artist: 'Fleetwood Mac',
      albumCover: 'https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG',
      previewURL: 'https://open.spotify.com/embed/track/0ofHAoxe9vBkTCp2UQIavz?utm_source=generator',
    },
    {
      id: 2,
      title: "Don't stop me now",
      artist: 'Queen',
      albumCover: 'https://upload.wikimedia.org/wikipedia/en/9/97/Queen-dont-stop-me-now-1979-6-s.jpg',
      previewURL: 'https://open.spotify.com/embed/track/5T8EDUDqKcs6OSOwEsfqG7?utm_source=generator',
    },
    {
      id: 3,
      title: 'Enter Sandman',
      artist: 'Metallica',
      albumCover: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Metallica_-_Metallica_cover.jpg',
      previewURL: 'https://open.spotify.com/embed/track/5sICkBXVmaCQk5aISGR3x1?utm_source=generator',
    },
    {
      id: 4,
      title: 'Sledgehammer',
      artist: 'Peter Gabriel',
      albumCover: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Sledgehammer_Cover.jpg',
      previewURL: 'https://open.spotify.com/track/029NqmIySn1kOY305AAhxT?si=a36b7d4e3f324363',
    },
  ];
  const playCounts = {
    Dreams: 10,
    'Enter Sandman': 5,
    "Don't stop me now": 8,
    Sledgehammer: 11,
  };
  const currentlyPlaying = "Don't stop me now";

  return (
    <div className="App">
      <Header playListTitle={playListTitle} />
      <Songs songs={songs} currentlyPlaying={currentlyPlaying} playCounts={playCounts} />
    </div>
  );
};

const Header = (props) => {
  const { playListTitle } = props;
  return <h1>{playListTitle}</h1>;
};

const Songs = (props) => {
  const { songs, currentlyPlaying, playCounts } = props;
  return (
    <>
      <h3 className="song-current">Now Playing: {currentlyPlaying}</h3>
      <h4>Total Play Count: </h4>
      <ol className="flex">
        {songs.map((song) => (
          <li key={song.id} className="list-item-new">
            <h2 key={song.title}>{song.title}</h2>
            <p key={song.artist}>{song.artist}</p>
            <img key={song.albumCover} src={song.albumCover} alt="album artwork" />
            <p>Play Count: {playCounts[song.title]}</p>
          </li>
        ))}
      </ol>
    </>
  );
};

export default App;

// Create your new Components here
