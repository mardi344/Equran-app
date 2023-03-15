import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewTafsir = ({ suratId, ayatId }) => {
  const [tafsir, setTafsir] = useState("");

  const isiTafsir = (id) => {
    axios.get(`https://equran.id/api/v2/tafsir/${id}`).then((res) => {
      setTafsir(res.data.data.tafsir);
    });
  };

  useEffect(() => {
    isiTafsir(suratId);
    console.log(suratId, ayatId);
  }, []);

  if (!tafsir) {
    return <div>Afwan, lagi Loading... IG: marrdianto</div>;
  }

  return (
    <div className="tafsir">
      <header>
        <img src={`${process.env.PUBLIC_URL}/logosimbol.png`} alt="Logo" />
        <h3>Tafsir</h3>
        <h4>Ayat : {tafsir[ayatId - 1].ayat}</h4>
        <img src={`${process.env.PUBLIC_URL}/logosimbol.png`} alt="Logo" />
      </header>
      <p>{tafsir[ayatId - 1].teks}</p>
      <footer>
        <a href="https://equran.id/apidev">Sumber Api Quran kemenag</a>
      </footer>
    </div>
  );
};

export default ViewTafsir;
