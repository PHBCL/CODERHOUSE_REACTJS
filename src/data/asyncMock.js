export const productos = [
  {
    id: 1,
    nombre: "Remera Studio Ghibli Miyazaki",
    precio: 8500,
    categoria: "Remeras",
    stock: 5,
    descripcion:
      "Las remeras son 100% algodón peinado 24/1 (Premium).No se deforman, ni pierden el color.",
    img: "https://acdn.mitiendanube.com/stores/819/313/products/208h1-add4872d6d76a1ea8716530734948442-1024-1024.jpg",
  },
  {
    id: 2,
    nombre: "Buzo El viaje de Chihiro",
    precio: 13000,
    categoria: "Buzos",
    stock: 2,
    descripcion:
      "Buzo Unisex 100% Algodón. Cuello Redondo con refuerzo en los cuellos y mangas",
    img: "https://i0.wp.com/rockdreams.com.co/wp-content/uploads/2024/04/Photo-11-04-24-10-37-27%E2%80%AFAM-14-1.jpg?fit=1080%2C1350&ssl=1p",
  },
  {
    id: 3,
    nombre: "Pijama Totoro",
    precio: 8900,
    categoria: "Pijamas",
    stock: 5,
    descripcion:
      "Los Pants son de lycra y modal calidad premium, cómodos, súper suaves, livianos y frescos para usarlos tranqui en casa o dónde quieras. Tienen cintura elastizada con con cordón regulable para ajustarlos hasta estar cómodos. La tela no encoje, los estampados no decoloran y es por eso que todas nuestras prendas cuentan con garantía de estampado.",
    img: "https://peluchemania.fr/cdn/shop/files/H7c880b4462a64fe78a88816f7d14f94eF.jpg?v=1696758933",
  },
  {
    id: 4,
    nombre: "Remera Mononoke Poster",
    precio: 9900,
    categoria: "Remeras",
    stock: 5,
    descripcion:
      "Los remerones son 100% algodón peinado 24/1 (Premium).No se deforman, ni pierden el color.",
    img: "https://acdn.mitiendanube.com/stores/819/313/products/1063h1-34d306afad7d74bc7f16530740622289-1024-1024.webp",
  },
  {
    id: 5,
    nombre: "Zapatillas Studio Ghibli",
    precio: 14900,
    categoria: "Zapatillas",
    stock: 5,
    descripcion:
      "Zapatilla de lona reforzada. Pintada a mano con pintura de calidad.",
    img: "https://ghibli-merch.com/wp-content/uploads/2022/11/Ghibli-Characters-Light-Blue-AJ-Shoes.jpg",
  },
];

export const getProducts = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(productos);
    }, 2000);
  });
};

export const getProductsByCategory = (categoria) => {
  return new Promise((res) => {
    const productosFiltrados = productos.filter((prod) => prod.categoria === categoria);
    setTimeout(() => {res(productosFiltrados);
    }, 2000);
  });
};



export const getProductsById = (id) => {
  return new Promise((res) => {
    const producto = productos.find((prod) => prod.id === parseInt(id, 10));
    setTimeout(() => {res(producto);
    }, 2000);
  });
};
