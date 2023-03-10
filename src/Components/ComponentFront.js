import { useNavigate } from "react-router-dom";

const First = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header>
        <img src={`${process.env.PUBLIC_URL}/logosimbol.png`} alt="Logo" />
        <p>
          AL-Quran <br />{" "}
          <span>
            sumber dari Aplikasi <br /> quran kementrian Agama RI
          </span>
        </p>
      </header>
      <div className="title">
        <h1 class="animate__animated animate__bounce">
          E-Quran <br /> & Tafsir
        </h1>
        <button onClick={() => navigate("/surat")}>OPEN</button>
      </div>
    </div>
  );
};

export default First;
