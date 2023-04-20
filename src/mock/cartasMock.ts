import { cardInterface } from "src/app/card/interfaces/card-interface";

export const cartas: cardInterface[] = [
    {
    titulo: 'Thor',
    indice: 'B3',
    atributos: [
      { titulo: 'Força', valor: 1 },
      { titulo: 'Agilidade', valor: 2 },
      { titulo: 'Inteligência', valor: 3 },
      { titulo: 'Magia', valor: 4 },
      { titulo: 'Velocidade', valor: 5 },
    ],
    cor: '#fff',
    imageUrl: 'https://i.pinimg.com/originals/60/08/33/6008331c18580e1eb3d6b7804d4c4c1a.jpg'
 },
 {
  titulo: 'Miranha',
  indice: 'A3',
  atributos: [
    { titulo: 'Força', valor: 6 },
    { titulo: 'Agilidade', valor: 7 },
    { titulo: 'Inteligência', valor: 8 },
    { titulo: 'Magia', valor: 9 },
    { titulo: 'Velocidade', valor: 10 },
  ],
  cor: '#fff',
  imageUrl: ''
 },
 {
  titulo: 'Hulk',
  indice: 'H39',
  atributos: [
    { titulo: 'Força', valor: 11 },
    { titulo: 'Agilidade', valor: 12 },
    { titulo: 'Inteligência', valor: 13 },
    { titulo: 'Magia', valor: 14 },
    { titulo: 'Velocidade', valor: 15 },
  ],
  cor: '#fff',
  imageUrl: ''
 },
 {
  titulo: 'Capitão America',
  indice: 'S10',
  atributos: [
    { titulo: 'Força', valor: 16 },
    { titulo: 'Agilidade', valor: 17 },
    { titulo: 'Inteligência', valor: 18 },
    { titulo: 'Magia', valor: 19 },
    { titulo: 'Velocidade', valor: 20 },
  ],
  cor: '#fff',
  imageUrl: ''
 },/*
 {
  titulo: 'Doutor maluko',
  indice: 'A20',
  atributos: [
    { titulo: 'Força', valor: 21 },
    { titulo: 'Agilidade', valor: 22 },
    { titulo: 'Inteligência', valor: 23 },
    { titulo: 'Magia', valor: 24 },
    { titulo: 'Velocidade', valor: 25 },
  ],
  cor: '#fff',
  imageUrl: ''
 },
 {
  titulo: 'Viuva negra',
  indice: 'm8',
  atributos: [
    { titulo: 'Força', valor: 26 },
    { titulo: 'Agilidade', valor: 27 },
    { titulo: 'Inteligência', valor: 28 },
    { titulo: 'Magia', valor: 29 },
    { titulo: 'Velocidade', valor: 30 },
  ],
  cor: '#fff',
  imageUrl: ''
 },
 {
  titulo: 'Pantera negra',
  indice: 'm0',
  atributos: [
    { titulo: 'Força', valor: 31 },
    { titulo: 'Agilidade', valor: 32 },
    { titulo: 'Inteligência', valor: 33 },
    { titulo: 'Magia', valor: 34 },
    { titulo: 'Velocidade', valor: 35 },
  ],
  cor: '#fff',
  imageUrl: ''
 },

 {
  titulo: 'Flash',
  indice: 'A23',
  atributos: [
    { titulo: 'Força', valor: 36 },
    { titulo: 'Agilidade', valor: 37 },
    { titulo: 'Inteligência', valor: 38 },
    { titulo: 'Magia', valor: 39 },
    { titulo: 'Velocidade', valor: 40 },
  ],
  cor: '#fff',
  imageUrl: ''
 },
 {
  titulo: 'Homen formiga',
  indice: 'A32',
  atributos: [
    { titulo: 'Força', valor: 41 },
    { titulo: 'Agilidade', valor: 42 },
    { titulo: 'Inteligência', valor: 43 },
    { titulo: 'Magia', valor: 44 },
    { titulo: 'Velocidade', valor: 45 },
  ],
  cor: '#fff',
  imageUrl: ''
 },
 {
  titulo: 'Super Man',
  indice: 'A09',
  atributos: [
    { titulo: 'Força', valor: 46 },
    { titulo: 'Agilidade', valor: 47 },
    { titulo: 'Inteligência', valor: 48 },
    { titulo: 'Magia', valor: 49 },
    { titulo: 'Velocidade', valor: 50 },
  ],
  cor: '#fff',
  imageUrl: ''
 },
 {
  titulo: 'Mulher Maravilha',
  indice: 'AF0',
  atributos: [
    { titulo: 'Força', valor: 51 },
    { titulo: 'Agilidade', valor: 52 },
    { titulo: 'Inteligência', valor: 53 },
    { titulo: 'Magia', valor: 54 },
    { titulo: 'Velocidade', valor: 55 },
  ],
  cor: '#fff',
  imageUrl: ''
 },
 {
  titulo: 'Grout',
  indice: 'm0',
  atributos: [
    { titulo: 'Força', valor: 56 },
    { titulo: 'Agilidade', valor: 57 },
    { titulo: 'Inteligência', valor: 58 },
    { titulo: 'Magia', valor: 59 },
    { titulo: 'Velocidade', valor: 60 },
  ],
  cor: '#fff',
  imageUrl: ''
 },
 {
  titulo: 'Looki',
  indice: 'm0',
  atributos: [
    { titulo: 'Força', valor: 61 },
    { titulo: 'Agilidade', valor: 62 },
    { titulo: 'Inteligência', valor: 63 },
    { titulo: 'Magia', valor: 64 },
    { titulo: 'Velocidade', valor: 65 },
  ],
  cor: '#fff',
  imageUrl: ''
 },
 {
  titulo: 'Quill',
  indice: 'm0',
  atributos: [
    { titulo: 'Força', valor: 66 },
    { titulo: 'Agilidade', valor: 67 },
    { titulo: 'Inteligência', valor: 68 },
    { titulo: 'Magia', valor: 69 },
    { titulo: 'Velocidade', valor: 70 },
  ],
  cor: '#fff',
  imageUrl: ''
 },
 {
  titulo: 'Arqueiro',
  indice: 'm0',
  atributos: [
    { titulo: 'Força', valor: 71 },
    { titulo: 'Agilidade', valor: 72 },
    { titulo: 'Inteligência', valor: 73 },
    { titulo: 'Magia', valor: 74 },
    { titulo: 'Velocidade', valor: 75 },
  ],
  cor: '#fff',
  imageUrl: ''
 },
 {
  titulo: 'Hulk de Ferro',
  indice: 'm0',
  atributos: [
    { titulo: 'Força', valor: 76 },
    { titulo: 'Agilidade', valor: 77 },
    { titulo: 'Inteligência', valor: 78 },
    { titulo: 'Magia', valor: 79 },
    { titulo: 'Velocidade', valor: 80 },
  ],
  cor: '#fff',
  imageUrl: ''
 },*/
]
