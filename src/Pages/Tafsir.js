import { useParams } from "react-router-dom";
import ViewTafsir from "../Components/ComponentTafsir";

const Tafsir = () => {
  const params = useParams();

  return <ViewTafsir suratId={params.suratid} ayatId={params.ayatid} />;
};

export default Tafsir;
