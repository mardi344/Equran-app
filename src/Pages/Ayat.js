import { useParams } from "react-router-dom";
import Viewayat from "../Components/ComponentAyat";

const Ayat = () => {
  const params = useParams();

  return <Viewayat suratId={params.suratid} />;
};

export default Ayat;
