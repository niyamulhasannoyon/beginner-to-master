import React from 'react';


function App() {

  const pets = 
    [
      {
          "id": "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
          "type": "Men's Sneaker",
          "name": "ULTRABOOST 22 SHOES",
          "seller": "Addidas",
          "price": 420,
          "stock": 20,
          "ratings": 4,
          "ratingsCount": 3725,
          "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
          "shipping": 1,
          "quantity": 0
      },
      {
          "id": "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
          "type": "Men's Sneaker",
          "name": "ULTRABOOST DNA SHOES",
          "seller": "Addidas",
          "price": 196,
          "stock": 19,
          "ratings": 5,
          "ratingsCount": 4355,
          "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
          "shipping": 14,
          "quantity": 0
      },
      {
          "id": "307f166f-1d04-4573-bc37-2f461ea9d4f7",
          "type": "Men's Sneaker",
          "name": "SUPERNOVA SHOES",
          "seller": "Addidas",
          "price": 245,
          "stock": 20,
          "ratings": 4,
          "ratingsCount": 3972,
          "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
          "shipping": 1,
          "quantity": 0
      },
      {
          "id": "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
          "type": "Men's Sneaker",
          "name": "LITE RACER 3.0 SHOES",
          "seller": "Addidas",
          "price": 229,
          "stock": 10,
          "ratings": 5,
          "ratingsCount": 1764,
          "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
          "shipping": 32,
          "quantity": 0
      },
      {
          "id": "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
          "type": "Men's Sneaker",
          "name": "4DFWD SHOES",
          "seller": "Addidas",
          "price": 287,
          "stock": 11,
          "ratings": 4,
          "ratingsCount": 799,
          "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
          "shipping": 49,
          "quantity": 0
      },
  ];

  return (
    <div className="App">
      <h1>My pets</h1>
      <ul className= 'container'>
        {
          pets.map((pet, index) => {
            return(
              <li key={index}>
                <h2>{pet.name}</h2>
                <p>{pet.type}</p>
                <p>${pet.price}</p>
                <img src={pet.img} alt={pet.name} width='200px' />
              </li>
            )
          })
        };
      </ul>
      <ul>

      </ul>

    </div>
  );
}

export default App;
