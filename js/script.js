import ScrollSuaveMenu from "./modules/scroll-suave.js";
import AnimacaoSection from "./modules/animacao-sections.js";
import AcordeonAnimacao from "./modules/animacao-faq.js";
import TabDescricaoAnimais from "./modules/tab-animais.js";
import ModalLogin from "./modules/modal.js";
import ToolTip from "./modules/tool-tip.js";
import DropDownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import tratarDadosAnimais from "./modules/numeros-animais.js";
import Expediente from "./modules/expediente.js";
import mostrarPrecoBitcoin from "./modules/cafezinho-bitcoin.js";

const scrollSuave = new ScrollSuaveMenu('[data-tab="nav"] a[href^="#"]');
scrollSuave.iniciar();

const acordeonAnimacao = new AcordeonAnimacao('[data-tab="acordeon"] dt');
acordeonAnimacao.iniciar();

const tabDescricaoAnimais = new TabDescricaoAnimais('[data-tab="menu"] li', '[data-tab="content"] section');
tabDescricaoAnimais.iniciar();

const janelaModalLogin = new ModalLogin('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
janelaModalLogin.iniciar();

const toolTipMapa = new ToolTip('[data-tooltip]');
toolTipMapa.iniciar();

const animacaoSection = new AnimacaoSection('[data-anime="scroll"]');
animacaoSection.iniciar();

const dropDownMenu = new DropDownMenu('[data-dropdown]');
dropDownMenu.iniciar();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="lista-menu"]');
menuMobile.iniciar();

const expediente = new Expediente('[data-semana]');
expediente.iniciar();

tratarDadosAnimais();
mostrarPrecoBitcoin();