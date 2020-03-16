import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter6Icon from '@material-ui/icons/Filter6';
import Filter7Icon from '@material-ui/icons/Filter7';
import Filter8Icon from '@material-ui/icons/Filter8';
import Filter9Icon from '@material-ui/icons/Filter9';
import VisibilityIcon from '@material-ui/icons/Visibility';

const state = {

    subjects: [
        { id: 1, name: "ingreso" , title: "Ingreso UTN", icon: Filter1Icon, time: "(20)" },
        { id: 2, name: "discreta" , title: "Discreta", icon: Filter2Icon, time: "(18)" },
        { id: 3, name: "algoritmos" , title: "Algoritmos", icon: Filter3Icon, time: "(25)" },
        { id: 4, name: "algebra1" , title: "Algebra 1", icon: Filter4Icon, time: "(18)" },
        { id: 5, name: "algebra2" , title: "Algebra 2", icon: Filter5Icon, time: "(18)" },
        { id: 6, name: "analisis1" , title: "Análisis 1", icon: Filter6Icon, time: "(18)" },
        { id: 7, name: "analisis2" , title: "Análisis 2", icon: Filter7Icon, time: "(20)" },
        { id: 8, name: "fisica 1" , title: "Física 1", icon: Filter8Icon, time: "(18)" },
        { id: 9, name: "fisica 2" , title: "Física 2", icon: Filter9Icon, time: "(22)" }
    ],

    courses: [
        { id: 3, hours: 18, name: "Algoritmos", classes: [
            { id: 1, topic: "Compilación/ Funciones/ Ejercicios"},
            { id: 2, topic: "Estructura Decisión/ Ciclos Iterativos"},
            { id: 3, topic: "Corte De Control/ Ejerc Integradores"},
            { id: 4, topic: "Archivos Y Registros De Lectura"},
            { id: 5, topic: "Vectores/ Creación Y Funciones"},
            { id: 6, topic: "Integracion Archivos Y Vectores"},
            { id: 7, topic: "Matrices E Indexación/ Punteros"},
            { id: 8, topic: "Estructuras Dinámicas/ Listas"},
            { id: 9, topic: "Funciones Sobre Listas/ Archivos/ Array"},
            { id: 10, topic: "Estructura DeListas/ Pilas Y Colas"}]}
        ,
        { id: 9, hours: 22, name: "Física 2", classes: [
            { id: 1, topic: "Ley De Gauss/ Potencial Eléctrico"},
            { id: 2, topic: "Trabajo Conservativo/ Conductores"},
            { id: 3, topic: "Capacitores Y Dieléctricos"},
            { id: 4, topic: "Electrodinámica/ Ohm/ Kircchoff"},
            { id: 5, topic: "Ley De Ampere/ Fuerza Mágnetica"},
            { id: 6, topic: "Flujo Magnético/ Ley De Faraday"},
            { id: 7, topic: "Inductancias/ Solenides/ Toroides"},
            { id: 8, topic: "Circuitos De Corriente Alterna"},
            { id: 9, topic: "Calorimetría/ Transferencia De Calor"},
            { id: 10, topic: "1er y 2do Principio Termodinámica"}]}
        ,
        { id: 8, hours: 20, name: "Física 1", classes: [
            { id: 1, topic: "Optica Geométrica/ Espejos/ Lentes"},
            { id: 2, topic: "Cinemática/ Dinámica Sin Rozamiento"},
            { id: 3, topic: "Rozamiento Estático Y Dinámico"},
            { id: 4, topic: "Ley Del Trabajo Y La Energia"},
            { id: 5, topic: "Elasticidad Y Energía Mecánica"},
            { id: 6, topic: "Centro De Masa/ Momento Y Choques"},
            { id: 7, topic: "Dinámica Del Cuerpo Rígido"},
            { id: 8, topic: "Rodadura Del Cuerpo Rígido"},
            { id: 9, topic: "Momento Angular Del Cuerpo Rígido"},
            { id: 10, topic: "Hidrostática/ Hidrodinámica"}]}
    ]

}

export default state;