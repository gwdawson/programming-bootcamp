const formatAlbums = require('../format-albums.js');

describe('formatAlbums', () => {
  const albums = [
    { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
    { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
  ];
  const artistIdReference = {
    Grammatics: 9923,
    Doves: 324
  };

  it('given an array of albums, return an array of albums with the artistId', () => {
    expect(formatAlbums(albums, artistIdReference)).toEqual([
      { name: 'Grammatics', artistId: 9923, releaseYear: 2009 },
      { name: 'Kingdom of Rust', artistId: 324, releaseYear: 2009 }
    ]);
  });
  it('the albums array should not be mutated', () => {
    expect(formatAlbums(albums, artistIdReference)).not.toEqual(albums);
  });
});
