import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Viewayat = ({ suratId }) => {
  const [ayat, setAyat] = useState([]);

  const navigate = useNavigate();

  const isiAyat = (id) => {
    axios.get(`https://equran.id/api/v2/surat/${id}`).then((res) => {
      setAyat(res.data.data.ayat);
    });
  };

  useEffect(() => {
    isiAyat(suratId);
  }, []);

  if (!ayat) {
    return <div>Afwan, lagi Loading... IG: marrdianto</div>;
  }

  return (
    <div className="ayat">
      <header>
        <img src={`${process.env.PUBLIC_URL}/logosimbol.png`} alt="Logo" />
        <p>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
        <img src={`${process.env.PUBLIC_URL}/logosimbol.png`} alt="Logo" />
      </header>
      <ul>
        {ayat.map((item) => (
          <li key={item.nomorAyat}>
            <div className="arab-style  m20">{item.teksArab}</div>
            <div className="latin-style m20">{item.teksLatin}</div>
            <div className="indo-style m20">{item.teksIndonesia}</div>
            <NavLink className="navlink" to={`/tafsir/${suratId}/${item.nomorAyat}`}>
              Lihat Tafsir...
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Viewayat;
