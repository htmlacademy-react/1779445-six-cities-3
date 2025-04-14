import MainScreen from '../../pages/main-screen/main-screen.tsx';

type AppPlaceCArdCount = {
  placeCardCount: number;
}
export default function App({placeCardCount}: AppPlaceCArdCount): JSX.Element {
  return (
    <MainScreen placeCardCount={placeCardCount}/>
  );
}
