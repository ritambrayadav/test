
import './App.css';
import './component/style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive, productData, responsive_1, responsive_2, productData_1, productData_2 } from './component/data';
import Header from './component/Header';
import Firstsec from './component/Firstsec';
import Secondsec from './component/Secondsec';
import Categ from './component/Categ';

function App() {

  const product = productData.map((item) => (
    <Categ
      cat={item.cat} />
  ))

  const product_1 = productData_1.map((item) => (
    <Firstsec
      heading={item.heading}
      url={item.imageurl}
      description={item.description} />
  ))

  const product_2 = productData_2.map((item) => (
    <Secondsec
      url={item.imageurl}
      location={item.location}
      description={item.description}
      price={item.price} />
  ))
  return (
    <div className="App">
      <Header />
      <div>
        <h2 style={{ color: "black", textAlign: "left" }}>New this week</h2>
        <Carousel responsive={responsive_1} >
          {product_1}
        </Carousel>

      </div>

      <div>
        <Carousel responsive={responsive}>
          {product}
        </Carousel>
      </div>

      <div>
        <h3 style={{ color: "black", textAlign: "left" }}>Top sellers</h3>
        <Carousel responsive={responsive_2}>
          {product_2}
        </Carousel>
      </div>

    </div>
  );
}

export default App;
