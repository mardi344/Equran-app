import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pagesurat = () => {
  const [surat, setSurat] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const isiSurat = () => {
    axios.get("https://equran.id/api/v2/surat").then((res) => {
      setSurat(res.data.data);
    });
  };

  useEffect(() => {
    isiSurat();
  }, []);

  const searchSurat = () => {
    return surat.filter((item) => {
      return `${item.namaLatin}`.toLowerCase().includes(search.toLowerCase());
    });
  };

  if (!surat) {
    return <div>Afwan, lagi Loading... IG: marrdianto</div>;
  }

  return (
    <div className="surat">
      <header>
        <img src={`${process.env.PUBLIC_URL}/logosimbol.png`} alt="Logo" />
        <div name className="input">
          <input placeholder="Search surah..." onChange={(e) => setSearch(e.currentTarget.value)} />
        </div>
        <img src={`${process.env.PUBLIC_URL}/logosimbol.png`} alt="Logo" />
      </header>
      <div className="Nama-surat">
        {searchSurat().map((surat) => (
          <div key={surat.nomor} className="surah-style">
            <h1 onClick={() => navigate(`/surat/${surat.nomor}`)}>
              {surat.nomor}. {surat.namaLatin} <br /> <span>({surat.arti}) </span>
            </h1>
            <p>
              {surat.tempatTurun} , {surat.jumlahAyat} ayat
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagesurat;
