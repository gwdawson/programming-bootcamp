const formatAlbums = (albums, artistIdRef) => {
  const updatedAlbums = [];
  albums.forEach((album) => {
    const { name, artist, releaseYear } = album;
    updatedAlbums.push({
      name: name,
      artistId: artistIdRef[artist],
      releaseYear: releaseYear
    });
  });
  return updatedAlbums;
};

module.exports = formatAlbums;
