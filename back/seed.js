const Product = require("./models/Product");
require("./config/db");

const libros = [
  {
    titulo: "Peters Zedalis",
    autor: "Tabatha",
    precio: "$3,216.71",
    imagen: "http://placehold.it/32x32",
    num_paginas: 23,
    editorial: "SCHOOLIO",
    edicion: 4,
    reseqna:
      "Ex voluptate eu cillum adipisicing. Magna tempor aliqua nostrud excepteur Lorem. Non nisi in culpa esse nisi laborum cillum Lorem aute elit eu.",
  },
  {
    titulo: "Browning Panzent",
    autor: "Stacy",
    precio: "$2,494.21",
    imagen: "http://placehold.it/32x32",
    num_paginas: 26,
    editorial: "RENOVIZE",
    edicion: 2,
    reseqna:
      "Pariatur nisi non eu incididunt anim quis anim Lorem labore exercitation duis reprehenderit amet consequat. Ipsum aliquip pariatur veniam tempor excepteur qui laborum ea laborum. Nulla proident labore aliquip est dolor. Eiusmod ipsum velit aute duis eu deserunt laboris. Magna voluptate laborum cillum incididunt do deserunt ea. Labore aliquip veniam incididunt officia cillum quis deserunt fugiat fugiat irure qui sint.",
  },
  {
    titulo: "Christian Zounds",
    autor: "Hebert",
    precio: "$3,814.91",
    imagen: "http://placehold.it/32x32",
    num_paginas: 33,
    editorial: "SYNKGEN",
    edicion: 5,
    reseqna:
      "Fugiat officia nulla dolor magna. Est adipisicing ullamco qui aute duis. Ea cillum anim reprehenderit et fugiat esse enim labore amet nostrud quis ex id consectetur.",
  },
  {
    titulo: "Lara Combogen",
    autor: "Weeks",
    precio: "$1,387.87",
    imagen: "http://placehold.it/32x32",
    num_paginas: 26,
    editorial: "SLOGANAUT",
    edicion: 7,
    reseqna:
      "Quis ea culpa nostrud nostrud qui labore nostrud et voluptate laboris. Adipisicing ea Lorem eu ea id nostrud enim ea. Do enim ut id culpa labore cillum anim elit Lorem occaecat cupidatat sit. Occaecat ullamco Lorem occaecat eiusmod ipsum enim ex do aute reprehenderit sint minim ex. In cillum sit enim ea veniam reprehenderit est consectetur dolore consectetur laborum quis Lorem. Mollit ea excepteur excepteur laboris officia aliquip officia cupidatat Lorem laboris excepteur do.",
  },
  {
    titulo: "Velez Boilcat",
    autor: "Stephanie",
    precio: "$1,078.41",
    imagen: "http://placehold.it/32x32",
    num_paginas: 31,
    editorial: "COLUMELLA",
    edicion: 2,
    reseqna:
      "Elit magna voluptate minim ipsum non sint nisi. Ad irure veniam elit ea. Excepteur duis deserunt proident nulla Lorem excepteur sint ex excepteur sunt ullamco. Non ad velit in laborum enim. Laboris ut velit id occaecat sint.",
  },
];

Product.insertMany([...libros])
.then(libros => {
    console.log(libros)
    process.exit();
})
