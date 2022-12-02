import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllTopics } from '../utils/api';
import '../styles/App.css';

export default function Nav() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const makeAsync = async () => {
      const topics = await getAllTopics();
      setTopics(topics);
    };
    makeAsync();
  }, []);

  return (
    <>
      <div className='Nav'>
        <Link key='all' className='NavChild' to='/'>
          All
        </Link>
        {topics.map((topic) => {
          const first = topic.slug[0].toUpperCase();
          const rest = topic.slug.slice(1);
          const newTopic = first + rest;
          return (
            <Link key={topic.slug} className='NavChild' to={`/topics/${topic.slug}`}>
              {newTopic}
            </Link>
          );
        })}
      </div>
    </>
  );
}
