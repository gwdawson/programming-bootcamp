### formatAlbums

Create a function (`formatAlbums`) that:

- Takes an array of albums and a lookup object (containing artists with their corresponding ids)
- Doesn't mutate the original input
- Switches out the `artistName` for the appropriate `id`

```js
const albums = [
  { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
  { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
];

const artistIdReference = {
  Grammatics: 9923,
  Doves: 324
};

formatAlbums(albums, artistIdReference);
/*
returns [
  { name: 'Grammatics', artistId: 9923, releaseYear: 2009 },
  { name: 'Kingdom of Rust', artistId: 324, releaseYear: 2009 },
];
*/
```
