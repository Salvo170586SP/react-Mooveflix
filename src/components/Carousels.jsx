import { Carousel } from "flowbite-react";


const Carousels = () => {
  return (
    <>
      <div id="carousel" className="  h-56 h-64 xl:h-80  mb-6">
        <Carousel>
          <img
            src="https://i.pinimg.com/736x/58/e8/7c/58e87ca9ff67c3e9e3387d623badd96f.jpg"
            alt="locandina"
          />

          <img
            src="https://marvelnewsdesk.com/wp-content/uploads/2018/08/PCTV-1660000039-hcdl.jpg"
            alt="locandina"
          />

          <img
            src="https://www.risoitaliano.eu/wp-content/uploads/2017/07/Cult-Stories-back-to-the-future-film-poster-locandina-pellicola-cinema-Zemeckis-Ritorno-al-futuro-80.jpg"
            alt="locandina"
          />

          <img
            src="https://meramuda.com/wp-content/uploads/2022/01/The-Matrix-4-2.jpg"
            alt="locandina"
          />
        </Carousel>
      </div>
    </>
  );
};

export default Carousels;
