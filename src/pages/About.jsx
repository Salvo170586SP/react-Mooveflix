import Navabr from "../components/Navbar";
import "./About.scss";

const About = () => {
  return (
    <>
      <Navabr />
      <div className="about">
        <div className="mx-5 mt-10">
          <p className="uppercase">
            Mooveflix è un app demo realizzata con React riguardo l'interfaccia
            grafica la raccolta dei dati e Redux che si occupa della chiamata
            alla API da <span className="italic">The movie db</span>. <br /> E'
            possibile effettuare la ricerca tramite l'apposito campo nella home
            page del sito e cercare i migliori film in circolazione messi a
            disposizione dal servizio. Oltre a entrare nell'apposita pagina per vederne i relativi dettagli.

          </p>
        </div>
      </div>
    </>
  );
};

export default About;
