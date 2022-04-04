const createRef = require('../create-ref.js');

describe('createRef', () => {
  const people = [
    {
      name: 'vel',
      phoneNumber: '01134445566',
      address: 'Northcoders, Leeds'
    },
    {
      name: 'ant',
      phoneNumber: '01612223344',
      address: 'Northcoders, Manchester'
    },
    {
      name: 'mitch',
      phoneNumber: '07777777777',
      address: null
    }
  ];
  const songs = [
    {
      track: '11:11',
      artist: 'Dinosaur Pile-Up',
      releaseYear: 2015,
      album: 'Eleven Eleven'
    },
    {
      track: 'Powder Blue',
      artist: 'Elbow',
      releaseYear: 2001,
      album: 'Asleep In The Back'
    }
  ];

  it('returns a ref of all all users numbers', () => {
    expect(createRef(people)).toEqual({
      vel: '01134445566',
      ant: '01612223344',
      mitch: '07777777777'
    });
  });
  it('given more than one argument, use those values to create ref', () => {
    expect(createRef(people, 'name', 'phoneNumber')).toEqual({
      vel: '01134445566',
      ant: '01612223344',
      mitch: '07777777777'
    });
    expect(createRef(people, 'name', 'address')).toEqual({
      vel: 'Northcoders, Leeds',
      ant: 'Northcoders, Manchester',
      mitch: null
    });
  });
  it('given an array of any items + arguments return a ref', () => {
    expect(createRef(songs, 'track', 'artist')).toEqual({
      '11:11': 'Dinosaur Pile-Up',
      'Powder Blue': 'Elbow'
    });
  });
});
