import { BebeNatimorto } from "./BebeNatimorto";
import { BebeNormal } from "./BebeNormal";
import { BebePrematuro } from "./BebePrematuro";

const be1= new BebeNatimorto (`3333322`,`toti`, 45, 1.77, `Feiura`);
be1.setId(`678765`);
be1.setNome(`hkdkd`);
be1.setPeso(199);
be1.setAltura(1.65);
be1.setCausa(`Dor`);
console.log(be1.getId());
console.log(be1.getNome());
console.log(be1.getPeso());
console.log(be1.getAltura());
console.log(be1.getCausa());

const be2= new BebeNormal (`7635678`,`kiko`, 49, 1.00, true);
be2.setId(`0987645678`);
be2.setNome(`Hala`);
be2.setPeso(103);
be2.setAltura(1.60);
be2.setVacinado(false);
console.log(be2.getId());
console.log(be2.getNome());
console.log(be2.getPeso());
console.log(be2.getAltura());
console.log(be2.getVacinado());

const be3= new BebePrematuro (`4567086784`,`Kili`, 44, 1.96, 39);
be3.setId(`98789`);
be3.setNome(`Toyo`);
be3.setPeso(191);
be3.setAltura(1.64);
be3.setSemanasGestacao(43);
console.log(be3.getId());
console.log(be3.getNome());
console.log(be3.getPeso());
console.log(be3.getAltura());
console.log(be3.getSemanasGestacao());