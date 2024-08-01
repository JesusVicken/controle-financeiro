import ResumeItem from "../ResumeItem/ResumeItem";
import * as C from "./style";  //carregando todos os styles e atribuindo para C 
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItem title="Entrada" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItem title="Saída" Icon={FaRegArrowAltCircleDown} value={expense} />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  )
}

export default Resume;