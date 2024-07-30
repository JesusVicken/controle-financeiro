import ResumeItem from "../ResumeItem/ResumeItem";
import * as C from "./style";  //carregando todos os styles e atribuindo para C 
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
  return (
    <C.Container>
      <ResumeItem title="Entrada" Icon={FaRegArrowAltCircleUp} value="1000" />
      <ResumeItem title="Saída" Icon={FaRegArrowAltCircleDown} value="1000" />
      <ResumeItem title="Total" Icon={FaDollarSign} value="1000" />
    </C.Container>
  )
}

export default Resume;