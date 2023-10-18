import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from "./PessoaJuridica";

const pef= new PessoaFisica (`susu`,`98766789`);
pef.setNome(`Neti`);
pef.setCpf(`098709871`);
console.log(pef.getNome());
console.log(pef.getCpf());


const pej = new PessoaJuridica (`Sintia`,`09809821`);
pej.setNome(`Ursula`);
pej.setCnpj(`0980985421`);
console.log(pej.getNome());
console.log(pej.getCnpj());