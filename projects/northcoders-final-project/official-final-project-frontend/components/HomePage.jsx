import NextPrompt from './NextPrompt';
import MedCalendar from './MedCalendar';
import NavButtons from './NavButtons';
import { useState } from 'react';
import { ScrollView, View } from 'react-native-web';

export default function HomePage({ setPage, user }) {
  const [Reminders, setReminders] = useState([]);
  return (
    <>
      <NextPrompt Reminders={Reminders} />
      <MedCalendar user={user} setReminders={setReminders} Reminders={Reminders} />
      <NavButtons setPage={setPage} />
    </>
  );
}
