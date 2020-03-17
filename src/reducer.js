import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter6Icon from '@material-ui/icons/Filter6';
import Filter7Icon from '@material-ui/icons/Filter7';
import Filter8Icon from '@material-ui/icons/Filter8';

const state = {

    profileMessage: {
        title: "Rodrigo Clases",
        subtitle: "Modalidad De Clases",
        topics: [
            "Clases Intensivas de 2 o 3 Horas",
            "Un Tema Por Clase",
            "Explicación Y Práctica De Finales",
            "Consultas Por Whatsapp"
        ]
    },

    subjects: [
        { id: 1, name: "ingreso" , title: "Ingreso UTN", icon: Filter1Icon, time: "(40)" },
        { id: 2, name: "biofisica CBC" , title: "Biofísica CBC", icon: Filter2Icon, time: "(20)" },
        { id: 3, name: "algoritmos" , title: "Algoritmos", icon: Filter3Icon, time: "(25)" },
        { id: 4, name: "algebra" , title: "Algebra", icon: Filter4Icon, time: "(18)" },
        { id: 5, name: "analisis1" , title: "Análisis 1", icon: Filter5Icon, time: "(18)" },
        { id: 6, name: "analisis2" , title: "Análisis 2", icon: Filter6Icon, time: "(20)" },
        { id: 7, name: "fisica 1" , title: "Física 1", icon: Filter7Icon, time: "(18)" },
        { id: 8, name: "fisica 2" , title: "Física 2", icon: Filter8Icon, time: "(22)" }
    ],

    courses: [
        { id: 1, hours: 40, name: "Ingreso UTN", classes: [
            { id: 1, topic: "Estudio Y Gráfico De Funciones"},
            { id: 3, topic: "Sistema De Ecuaciones"},
            { id: 2, topic: "Polinomios De Distinto Grado"},
            { id: 4, topic: "Geometría Del Plano"},
            { id: 5, topic: "Geometría Del Espacio"},
            { id: 6, topic: "Integración De Conceptos"},
            { id: 7, topic: "Cinemática (1da Parte)"},
            { id: 8, topic: "Cinemática (2da Parte)"},
            { id: 9, topic: "Estática 1 (Fuerzas Newtonianas)"},
            { id: 10, topic: "Estática 2 (Fuerzas Newtonianas)"}]}
        ,
        { id: 2, hours: 20, name: "Biofísica CBC", classes: [
            { id: 1, topic: "Cinemática"},
            { id: 2, topic: "Dinámica"},
            { id: 3, topic: "Energía Mecánica"},
            { id: 4, topic: "Elasticidad"},
            { id: 5, topic: "Corriente Continua"},
            { id: 6, topic: "Electrostática (Campo Eléctrico)"},
            { id: 7, topic: "Electrostática (Potencial)"},
            { id: 8, topic: "Calorimetria/ Transf. De Calor"},
            { id: 9, topic: "Principios De Termodinámica"},
            { id: 10, topic: "Hidrostática/ Hidrodinámica"}]}
        ,
        { id: 3, hours: 18, name: "Algoritmos", classes: [
            { id: 1, topic: "Compilación/ Funciones/ Ejercicios"},
            { id: 2, topic: "Estruct. Decisión/ Ciclos Iterativos"},
            { id: 3, topic: "Corte De Control/ Ejerc Integradores"},
            { id: 4, topic: "Archivos Y Registros De Lectura"},
            { id: 5, topic: "Vectores/ Creación Y Funciones"},
            { id: 6, topic: "Integracion Archivos Y Vectores"},
            { id: 7, topic: "Matrices E Indexación/ Punteros"},
            { id: 8, topic: "Estructuras Dinámicas/ Listas"},
            { id: 9, topic: "Integración Listas/ Archivos/ Array"},
            { id: 10, topic: "Estructura De Pilas Y Colas"}]}
        ,
        { id: 4, hours: 20, name: "Algebra", classes: [
            { id: 1, topic: "Numeros Complejos"},
            { id: 2, topic: "Rectas En El Plano (R2)"},
            { id: 3, topic: "Rectas En El Espacio (R3)"},
            { id: 4, topic: "Matrices Y Determinantes"},
            { id: 5, topic: "Espacios Vectoriales"},
            { id: 6, topic: "Transformaciones Lineales (1)"},
            { id: 7, topic: "Transformaciones Lineales (2)"},
            { id: 8, topic: "Conicas (Circunf, Elipse, Parábola)"},
            { id: 9, topic: "Autovalores/ Superficies"},
            { id: 10, topic: "Rototraslacion"}]}
        ,
        { id: 5, hours: 20, name: "Análisis 1", classes: [
            { id: 1, topic: "Funciones Y Limites"},
            { id: 2, topic: "Continudad De Una Función"},
            { id: 3, topic: "Derivadas Primera Parte"},
            { id: 4, topic: "Derivadas Segunda Parte"},
            { id: 5, topic: "Estudios De Funciones/ Gráficos"},
            { id: 6, topic: "Integrales Indefinidas"},
            { id: 7, topic: "Integrales Definidas"},
            { id: 8, topic: "Estudio De funciones"},
            { id: 9, topic: "Calculo De Areas"},
            { id: 10, topic: "Series Y Sucesiones"}]}
        ,
        { id: 6, hours: 20, name: "Análisis 2", classes: [
            { id: 1, topic: "Ecuac. Diferenciales/ Curvas"},
            { id: 2, topic: "Limites Y Derivadas en R2"},
            { id: 3, topic: "Diferenciabilidad "},
            { id: 4, topic: "Matriz Jacobiana/ Schwartz"},
            { id: 5, topic: "Función Compuesta/ Derivadas"},
            { id: 6, topic: "Integrales Dobles/ Areas en R2"},
            { id: 7, topic: "Integrales Dobles/ Areas en R3"},
            { id: 8, topic: "Circulación/ Flujo (R2 - R3)"},
            { id: 9, topic: "Integrales Triples Vol/ Masa/ Flujo"},
            { id: 10, topic: "Ecuac. Diferenciales/ Extremos"}]}
        
        ,
        { id: 7, hours: 20, name: "Física 1", classes: [
            { id: 1, topic: "Optica/ Espejos/ Lentes"},
            { id: 2, topic: "MRUV/ Dinámica S/ Rozamiento"},
            { id: 3, topic: "Rozamiento Estático Y Dinámico"},
            { id: 4, topic: "Ley Del Trabajo Y La Energia"},
            { id: 5, topic: "Elasticidad Y Energía Mecánica"},
            { id: 6, topic: "Centro De Masa/ Momento Lineal"},
            { id: 7, topic: "Dinámica Del Cuerpo Rígido"},
            { id: 8, topic: "Rodadura Del Cuerpo Rígido"},
            { id: 9, topic: "Momento Angular Cuerpo Rígido"},
            { id: 10, topic: "Hidrostática/ Hidrodinámica"}]}
        ,
        { id: 8, hours: 22, name: "Física 2", classes: [
            { id: 1, topic: "Ley De Gauss/ Potencial Eléctrico"},
            { id: 2, topic: "Trabajo Conservativo/ Conductores"},
            { id: 3, topic: "Capacitores Y Dieléctricos"},
            { id: 4, topic: "Electrodinámica/ Ohm/ Kircchoff"},
            { id: 5, topic: "Ley De Ampere/ Fuerza Mágnetica"},
            { id: 6, topic: "Flujo Magnético/ Ley De Faraday"},
            { id: 7, topic: "Inductancias/ Solenides/ Toroides"},
            { id: 8, topic: "Circuitos De Corriente Alterna"},
            { id: 9, topic: "Calorimetría/ Transferenc. De Calor"},
            { id: 10, topic: "1er y 2do Principio Termodinámica"}]}
        ]
}

export default state;