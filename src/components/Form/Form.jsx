import * as C from "./style";  //carregando todos os styles e atribuindo para C 
import { useState } from "react";


const Form = () => {

    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setIsExpense] = useState(false);

    const handleSave = () => {
        if (!desc || amount) {
            alert("Informe a descrição e o valor!")
            return;
        } else if (amount < 1) {
            alert("O valor tem q ser positivo!")
            return;
        }
    }

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </C.InputContent>

                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
                </C.InputContent>

                <C.RadioGroup>
                    <C.Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setIsExpense(!isExpense)}
                    />

                    <C.Label htmlFor="rIncome">Entrada</C.Label>

                    <C.Input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setIsExpense(!isExpense)}
                    />

                    <C.Label htmlFor="rIncome">Saída</C.Label>


                </C.RadioGroup>



            </C.Container>
        </>

    )
}

export default Form