import { useLocation } from 'react-router-dom';
import '../styles/App.css';

export default function Header() {
  const { pathname } = useLocation();
  let topic = undefined;

  if (pathname === '/') topic = 'All';
  else topic = pathname.split('/')[2];

  const first = topic[0].toUpperCase();
  const rest = topic.slice(1);
  const newTopic = first + rest;

  if (!isNaN(parseInt(first))) return null;

  return <h1 className='Header'>{newTopic} Articles</h1>;
}
