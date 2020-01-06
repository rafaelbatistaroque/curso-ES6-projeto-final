import ScrollSuaveMenu from "./modules/scroll-suave.js";
import ativarAnimacaoSections from "./modules/animacao-sections.js";
import mostrarRespostasFAQ from "./modules/animacao-faq.js";
import mostrarDescricaoAnimais from "./modules/tab-animais.js";
import mostrarModalLogin from "./modules/modal.js";
import mostrarToolTip from "./modules/tool-tip.js";
import mostrarDropDownMenu from "./modules/dropdown-menu.js";
import mostrarMenuMobile from "./modules/menu-mobile.js";
import tratarDadosAnimais from "./modules/numeros-animais.js";
import mostrarExpediente from "./modules/expediente.js";
import mostrarPrecoBitcoin from "./modules/cafezinho-bitcoin.js";

const scrollSuave = new ScrollSuaveMenu('[data-tab="nav"] a[href^="#"]');
scrollSuave.iniciar();

ativarAnimacaoSections();
mostrarDescricaoAnimais();
mostrarRespostasFAQ();
mostrarModalLogin();
mostrarToolTip();
mostrarDropDownMenu();
mostrarMenuMobile();
mostrarExpediente();
tratarDadosAnimais();
mostrarPrecoBitcoin();