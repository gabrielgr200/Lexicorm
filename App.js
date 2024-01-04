import { StatusBar } from 'react-native';
import Navigation from './src/routes/Routes';
import { useEffect } from 'react';

export default function App() {

  // useEffect(() => {
  //   StatusBar.setTranslucent(true);
  //   StatusBar.setBackgroundColor('transparent');
  // }, []);

  return (
    <>
    <StatusBar />
    <Navigation/>
    </>
  );
}