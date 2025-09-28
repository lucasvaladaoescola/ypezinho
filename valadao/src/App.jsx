import { useState } from 'react'
import './App.css'
import Carmy from './assets/detergente.jpg'
import Cjoa from './assets/esponja.webp'
import Curs from './assets/sabaoempo.webp'
import slider1 from './assets/rosa.png'
import slider2 from './assets/slider2.png'
import slider3 from './assets/slider3.png'
import slider4 from './assets/slider4.png'
// import Swiper JS
import { Swiper, SwiperSlide }from 'swiper/react'
// import Swiper styles
import 'swiper/css'
import { Autoplay } from 'swiper/modules'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <main>
        <header>
          <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay:3000,
        disableOnInteraction: false
      }}
      loop= {true}
      className="myswiper"
    >
      <SwiperSlide>
        <img src= {slider1} alt="rosa.jpg" />
      </SwiperSlide>
      <SwiperSlide>
         <img src= {slider2} alt="slider2" />
      </SwiperSlide>
       <SwiperSlide> 
        <img src= {slider3} alt="slider3" />
      </SwiperSlide>
      <SwiperSlide> 
        <img src= {slider4} alt="slider4" />
      </SwiperSlide>
    </Swiper>
    </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">Esponja Multiuso Lava Louça</h2>
              <p className="desc">Maior praticidade no seu dia-a-dia além de possuir maior desempenho na limpeza de louças</p>
              <p className="preco">R$ 5,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">Detergente YPE (500ML)</h2>
              <p className="desc">Compre Agora com melhor preço do Brasil! Parcele em até 3x ! Não Perca essa oportunidade!!</p>
              <p className="preco">R$ 6,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">Sabão em pó - TIXAN YPE</h2>
              <p className="desc">Produtos Ypê: Qualidade Que Se Vê, Certeza Que É Ypê!</p>
              <p className="preco">R$ 19,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque">
        <iframe src="https://www.youtube.com/embed/dxCR16M1SFA?autoplay=1&mute=1&controls=0&loop=1&playlist=dxCR16M1SFA&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe></section>
        <footer> 
          <img src="" alt="" className="logo-footer" />
          <div className="social-icons">
            <div className="icon">
              <img src="assets" alt="" id="WhatsApp" />
            </div>
            <div className="icon">
              <img src="" alt="" id="Instagram" />
            </div>
            <div className="icon"> 
                <img src="" alt="" id="X"/>
            </div>
            <div className="icon">
              <img src="" alt="" id=""youtube />
            </div>
          </div>
        </footer>
  
      </main>
    </>
  )
}

export default App
