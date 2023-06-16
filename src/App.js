import Menu from './components/Menu/Menu';
import Header from './components/UI/Header/Header';
import './index.css';

const MENU_ITEMS = [
  {
    id: "00",
    title: "Premium mixed box - 48 pieces",
    cost: "$57"
  },
  {
    id: "01",
    title: "White Chocolate Truffle - 12 pieces",
    cost: "$23.50"
  },
  {
    id: "02",
    title: "Bag of Chocolate Covered Almonds - 2lb",
    cost: "$18.99"
  },
  {
    id: "03",
    title: "Mystery Mix - Includes old favorites and new delights",
    cost: "$15"
  },
]

function App() {
  return (
    <>
      <Header />
      <Menu items={MENU_ITEMS}/>
    </>
  );
}

export default App;
