

// const lenten = {
//   'data': 'lenten',
//   'mini' : false,
//   'cat': {"EN":'Lenten',"RU":'Постное'},
//   'items': [
//       {
//           id: 91,
//           name:{'EN': 'Baked yams with mushrooms and zazaki sauce', 'RU':"Запеченный батат с грибами и соусом дзадзики"},
//           title:{'EN': 'Batat, mushrooms, oyster mushrooms, ceps, vegetable oil, garlic puree, cucumbers, lean sour cream, olive oil, truffle oil, pearl onions, green onions, ground olives, dill, salt, pepper, thyme', 'RU':"Батат, шампиньоны, вешенки, белые грибы, масло растительное, чесночное пюре, огурцы, постная сметана, масло оливковое, масло трюфельное, жемчужный лук, лук зеленый, земля из маслин, укроп, соль, перец, тимьян"},
//           price: 590,
//           count: 1,
//           grams: 270,
//           img: "https://eda.yandex.ru/images/3208959/0228a35b95534b8e8a2a9b3f66b1e0b4-450x300.jpeg",
//         },  {
//           id: 92,
//           name:{'EN': 'Pistachio cream with coconut milk', 'RU':"Фисташковый крем на кокосовом молоке"},
//           title:{'EN': 'Cream of coconut, pistachio paste, powdered sugar, lean cookie crumb, blueberries, freeze-dried raspberries, sunflower seeds', 'RU':"Сливки из кокоса, фисташковая паста, сахарная пудра, крошка из постного печенья, голубика, малина сублимированная, семечка подсолнечника"},
//           price: 370,
//           count: 1,
//           grams: 120,
//           img: "https://eda.yandex.ru/images/3337779/dba9330876324cf2b9fc5837dc33ad9f-450x300.jpeg",
//         },  {
//           id: 93,
//           name:{'EN': 'Baked zucchini with beet coulis', 'RU':"Печёный кабачок со свекольным кули"},
//           title:{'EN': 'Beets, avocado, mint, cilantro, zucchini, mini spinach, chuka, borado bread chips, kimchi sesame, garlic fraiche, lean sour cream, pumpkin puree, sunflower seeds, olive oil ground, olive oil, salt, pepper, zatar, honey', 'RU':"Свекла, авокадо, мята, кинза, кабачки, мини шпинат, чука, чипсы из бородинского хлеба, кунжут с кимчи, чесночный фреш, сметана постная, пюре тыквы, семечки подсолнечника, земля из маслин, масло оливковое, соль, перец, затар, мёд"},
//           price: 570,
//           count: 1,
//           grams: 225,
//           img: "https://eda.yandex.ru/images/3667559/f78601f42dd94e2fa9788763a06550f2-450x300.jpeg",
//         }, {
//           id: 94,
//           name:{'EN': 'Vegetable salad with your choice of dressing', 'RU':"Овощной салат с заправкой на выбор"},
//           title:{'EN': 'Cucumber, tomato, bell pepper, parsley, dill, green onion, fresh basil, red onion, tajas olives, olive oil, salt, black pepper, provan herbs', 'RU':"Огурец, помидор, болгарский перец, петрушка, укроп, лук зелёный, базилик свежий, лук красный, оливки таджасские, масло оливковое, соль, перец черный, прованские травы"},
//           price: 590,
//           modifier: {
//             'RU':[
//               'c оливковым маслом',
//               'c ароматным маслом',
//               'c постной сметаной: 100₽'
//             ],
//             'EN': [
//               'with olive oil',
//               'with fragrant oil',
//               'with lean sour cream: 100₽'
//             ]
//           },
//           count: 1,
//           grams: 188,
//           img: "https://eda.yandex.ru/images/3724421/cd721dd431634672b6980a0c65df1da0-450x300.jpeg",
//         },  {
//           id: 95,
//           name:{'EN': 'Lentil cream soup with artichokes and pickled onions', 'RU':"Крем-суп из чечевицы с артишоками и маринованным лучком"},
//           title:{'EN': 'Lentils, carrots, onions, potatoes, artichokes, pearl onions, green onions, seeds, ground olives, olive oil, vegetable oil, garlic, salt, pepper', 'RU':"Чечевица, морковь, лук репчатый, картофель, артишоки, лук жемчужный, лук зеленый, семечки, земля из маслин, оливковое масло, масло растительное, чеснок, соль, перец"},
//           price: 420,
//           count: 1,
//           grams: 330,
//           img: "https://eda.yandex.ru/images/3580810/96ad18ccda1d42e3b3949d156dbe14f1-450x300.jpeg",
//         },
//         {
//           id: 96,
//           name:{'EN': 'Hummus with grilled broccoli', 'RU':"Хумус с брокколи гриль"},
//           title:{'EN': 'Chickpeas, tahini, ground cumin, lemon juice, broccoli, olive oil, sea salt, slivered almonds, zatar, sesame oil, sunflower and pumpkin seeds, microgreens', 'RU':"Нут, тахини, кумин молотый, лимонный сок, брокколи, масло оливковое, соль морская, миндаль слайс, затар, масло кунжутное, семечка подсолничника и тыквы, микрозелень"},
//           price: 490,
//           count: 1,
//           grams: 270,
//           img: "https://eda.yandex.ru/images/3106738/aa1e9c65855440c8bfc59cc905a5db77-450x300.jpeg",
//         },
//         {
//           id: 97,
//           name:{'EN': 'Crispy falafel with babaganoush, dzadziki and fresh tomatoes', 'RU':"Хрустящий фалафель с бабагануш, дзадзики и свежими томатами"},
//           title:{'EN': 'Chickpeas, spinach, truffle paste, truffle oil, breadcrumbs, wheat flour, coconut milk, baked eggplant, tomatoes, cilantro, parsley, green onions, garlic puree, cucumber, lean sour cream, olive seeds, tomatoes, basil, black pepper, zatar, olive oil, salt', 'RU':"Нут, шпинат, трюфельная паста, масло трюфельное, панировочные сухари, мука пшеничная, молоко кокосовое, баклажан печёный, томаты, кинза, петрушка, лук зелёный, чесночное пюре, огурец, постная сметана, земля из маслин, помидоры, базилик, перец черный, затар, масло оливковое, соль"},
//           price: 690,
//           count: 1,
//           grams: 340,
//           img: "https://eda.yandex.ru/images/3682162/00c3527cf7ee4de79f4ef93660ff3ed9-450x300.jpeg",
//         }
//   ]
// }

// const autumn = {
//   'data' : 'autumn',
//   'mini' : false,
//   'cat' : {"EN":'autumn',"RU":'Осеннее'},
//   'items': [
//     {
//         id: 'au1',
//         name:{'EN':'Baked Camembert', 'RU':"Запечённый камамбер"}, 
//         title:{'EN':'', 'RU':""}, 
//         price: 1200,
//         count: 1,
//         grams: 240,
//         img: "https://eda.yandex/images/3472725/a4a96b4aaf3a44058c79c8bbed8581c5-450x300.jpeg",
//       },
//       {
//         id: 'au2',
//         name:{'EN':'Salad with pumpkin and gorgonzola cream', 'RU':"Салат с тыквой и кремом из горгонзолы"}, 
//         title:{'EN':'', 'RU':""}, 
//         price: 850,
//         count: 1,
//         grams: 240,
//         img: "https://eda.yandex/images/3472725/5981e64ce72f497ca1f9fc6dfe130bcd-450x300.jpeg",
//       },
//       {
//         id: 'au3',
//         name:{'EN':'Pumpkin cream soup with crab', 'RU':"Тыквенный крем-суп с крабом"}, 
//         title:{'EN':'', 'RU':""}, 
//         price: 650,
//         count: 1,
//         grams: 400,
//         img: "https://eda.yandex/images/2783965/76fbbe6a1f3343db8301c6a485d6d9c4-450x300.jpeg",
//       },
//       {
//         id: 'au4',
//         name:{'EN':'Roast beef with salted blackberries', 'RU':"Ростбиф с солёной ежевикой"}, 
//         title:{'EN':'', 'RU':""}, 
//         price: 1100,
//         count: 1,
//         grams: 230,
//         img: "https://eda.yandex/images/3518584/417a595ebe81435ea1b50d98f8bd4999-450x300.jpeg",
//       },
//       {
//         id: 'au5',
//         name:{'EN':'Scallop with truffle puree', 'RU':"Гребешок с трюфельным пюре"}, 
//         title:{'EN':'', 'RU':""}, 
//         price: 1350,
//         count: 1,
//         grams: 330,
//         img: "https://eda.yandex/images/3595156/da0b954187144760bb1b61624e15cd2d-450x300.jpeg",
//       },
//       {
//         id: 'au6',
//         name:{'EN':'Tuna steak with guacamole', 'RU':"Стейк из тунца с гуакамоле"}, 
//         title:{'EN':'', 'RU':""}, 
//         price: 950,
//         count: 1,
//         grams: 220,
//         img: "https://eda.yandex/images/3512182/9a568bb1365f439da4cfcc890082c29c-450x300.jpeg",
//       },
//       {
//         id: 'au7',
//         name:{'EN':'Duck breast with green garnish', 'RU':"Утиная грудка с зеленым гарниром"}, 
//         title:{'EN':'', 'RU':""}, 
//         price: 1100,
//         count: 1,
//         grams: 300,
//         img: "https://eda.yandex/images/3377781/7c48742bf15d4799a9ef1eddbdfcaea9-450x300.jpeg",
//       },
//       {
//         id: 'au8',
//         name:{'EN':'Linguini with smoked duck', 'RU':"Лингвини с копченой уткой"}, 
//         title:{'EN':'', 'RU':""}, 
//         price: 950,
//         count: 1,
//         grams: 260,
//         img: "https://eda.yandex/images/2415806/f44f46a3054a4f51b6b760fbb1b764fd-450x300.jpeg",
//       },
//       {
//         id: 'au8',
//         name:{'EN':'Scallop ceviche', 'RU':"Севиче из гребешка"}, 
//         title:{'EN':'', 'RU':""}, 
//         price: 1100,
//         count: 1,
//         grams: 140,
//         img: "/assets/img/scallopceviche.jpeg",
//       }
//     ]
// }




const items = [
  {
    'data': 'season',
    'mini':  false,
    'cat': {
      'EN': 'Season menu', 'RU': 'Сезонное меню'
    },
    items: [
      {
        id: 'rul6',
        name: {
          'EN': 'Ramiro pepper with ricotta and tarragon',
          'RU': 'Перец рамиро с рикоттой и эстрагоном'
        },
        price: 720,
        count: 1,
        grams: 200,
        img: "https://eda.yandex/images/3793239/63406e2911984686b49d6c8937ca14ce-400x400.jpeg",
      },
      {
        id: 'rul5',
        name: {
          'EN': 'Country salad',
          'RU': 'Салат деревенский'
        },
        price: 580,
        count: 1,
        grams: 225,
        img: "https://eda.yandex/images/3508859/922c81105afa4827bd4c2bc3bc1fc215-400x400.jpeg",
        modifier:{'EN':['Sour cream','Olive oil', 'Homemade Fragrance Oil'], 'RU':['Сметана','Оливковое масло', 'Домашнее ароматное масло']},
      },
      {
        id: 'rul4',
        name: {
          'EN': 'Salad with shrimps and wild garlic',
          'RU': 'Салат с креветками и черемшой'
        },
        price: 1090,
        count: 1,
        grams: 210,
        img: "https://eda.yandex/images/2761069/89cf07d3ac1a451da5befb1d01c064e9-400x400.jpeg",
      },
      {
        id: 'rul3',
        name: {
          'EN': 'Okroshka with beef tongue',
          'RU': 'Окрошка с говяжьим языком'
        },
        price: 650,
        count: 1,
        grams: 455,
        modifier:{'EN':['with kvass','on kefir'], 'RU':['на квасе','на кефире']},
        img: "https://eda.yandex/images/3191933/7e461dc7723645a1a42fa802352cd530-400x400.jpeg",
      },
      {
        id: 'rul2',
        name: {
          'EN': 'Gazpacho with crab',
          'RU': 'Гаспачо с крабом'
        },
        price: 910,
        count: 1,
        grams: 350,
        img: "https://eda.yandex/images/2761069/66533bae1e4f4193b94ad63b3ef78ce8-400x400.jpeg",
      },
      {
        id: 'rul1',
        name: {
          'EN': 'Crab cakes with fresh vegetables',
          'RU': 'Крабовые котлеты со свежими овощами'
        },
        price: 1450,
        count: 1,
        grams: 245,
        img: "https://eda.yandex/images/1463280/b7df6243da7f461da2a474506c708a16-400x400.jpeg",
      },
      {
        id: 'rul',
        name: {
          'EN': 'Baked eggplant with pesto',
          'RU': 'Запеченный баклажан с песто'
        },
        price: 750,
        count: 1,
        grams: 170,
        img: "",
      }
    ]
  },
  {
    'data' : 'breakfast',
    'mini' : false,
    'cat':{"EN":'Breakfasts until 14:00',"RU":'Завтраки до 14:00'}, 
    'items': [
      
          {
            id: 15,
            name:{'EN': 'Zucchini dredges with salmon and cream sauce', 'RU':"Драники из цукини с лососем и сметаной"} ,
            title:{'EN': 'Zucchini, egg, lightly salted salmon, cream sauce', 'RU':"Цукини, яйцо, лосось слабосоленый, соус сметанный"},
            price: 910,
            count: 1,
            grams: 200,
            img: "/assets/img/zucchinidredgeswithsalmonandcreamsauce.jpeg",
          },
        {
          id: "breakfast0108202401",
          name:{'EN': 'Casserole with Patissiere cream and fresh berries', 'RU':"Запеканка с кремом Патисьер и свежими ягодами"} ,
          title:{'EN': '', 'RU':""},
          price: 870,
          count: 1,
          grams: 220,
          img: "",
        },

          {
            id: 16,
            name:{'EN': 'Scramble with mortadella', 'RU':"Скрэмбл с мортаделлой"},
            title:{'EN': '', 'RU':""},
            price: 770,
            count: 1,
            grams: 265,
            img: "",
          },

          {
            id: 'z1',
            name:{'EN': 'Rice porridge with coconut milk and fresh berries', 'RU':"Рисовая каша на кокосовом молоке со свежими ягодами"},
            title:{'EN': 'Rice, milk, coconut milk, sugar, salt, vanilla sugar, cream, cherry topping, raspberries, blackberries, strawberries, blueberries', 'RU':"Рис, молоко, молоко кокосовое, сахар, соль, ванильный сахар, сливки, топпинг вишневый, малина, ежевика, клубника, голубика"},
            price: 540,
            count: 1,
            grams: 260,
            img: "/assets/img/z1.jpeg",
          },
          {
            id: 'z2',
            name:{'EN': 'Buckwheat porridge with poached egg and parmesan', 'RU':"Гречневая каша с яйцом пашот и пармезаном"},
            title:{'EN': 'Buckwheat, fried onions, butter, soy sauce, grana cheese, green onions, pâté, truffle paste, truffle hollandaise, microgreens, olive ground, truffle oil', 'RU':"Гречка, лук жареный, масло сливочное, соевый соус, грана сыр, лук зеленый, пашот, паста трюфельная, голландез трюфельный, микрозелень, земля из маслин, масло трюфельное"},
            price: 550,
            count: 1,
            grams: 370,
            img: "/assets/img/buckwheatporridgewithpoachedeggandparmesan.jpeg",
          },{
            id: 'z3',
            name:{'EN': 'Omelet with crab and truffle sauce', 'RU':"Омлет с крабом и трюфельным соусом"},
            title:{'EN': 'Egg, cream, salt, pepper, corn, grana cheese, truffle oil, crab, green onions, truffle sauce', 'RU':"Яйцо, сливки, соль, перец, корн, сыр грана, масло трюфельное, краб, зеленый лук, трюфельный соус"},
            price: 990,
            count: 1,
            grams: 220,
            img: "/assets/img/omeletwithcrabandtrufflesauce.jpeg",
          },
         
          {
            id: 22,
            name:{'EN': 'Cheesecakes with melted milk and sour cream', 'RU':"Сырники из топленого молока со сметаной"} ,
            title:{'EN': 'Cottage cheese, flour, chicken egg, sour cream', 'RU':"Творог, мука, яйцо куриное, сметана"} ,
            price: 420,
            count: 1,
            grams: 170,
            img: "/assets/img/cheesecakeswithmeltedmilkandsourcream.jpeg",
          },
          {
            id: "breakfast0108202403",
            name:{'EN': 'Benedict with salmon and truffle Golandaise', 'RU':"Бенедикт с лососем и трюфельным Голандез"} ,
            title:{'EN': '', 'RU':""} ,
            price: 990,
            count: 1,
            grams: 220,
            img: "/assets/img/eggsbenedictwithsalmononabriochebun.jpeg",
          },

      {
        id: "breakfast0108202402",
        name:{'EN': 'Benedict with mortadella and truffle Golandaise', 'RU':"Бенедикт с мортаделлой с трюфельным Голандез"} ,
        title:{'EN': '', 'RU':""} ,
        price: 990,
        count: 1,
        grams: 220,
        img: "",
      },
      {
        id: "breakfast0108202404",
        name:{'EN': 'Shakshuka', 'RU':"Шакшука"} ,
        title:{'EN': '', 'RU':""} ,
        price: 800,
        count: 1,
        grams: 300,
        img: "",
      },
      {
        id: 22,
        name:{'EN': 'Scrambled eggs with spinach', 'RU':"Яичница со шпинатом"} ,
        title:{'EN': '', 'RU':""} ,
        price: 500,
        count: 1,
        grams: 220,
        img: "",
      },
    ]
  },
  
  {
    'data' : 'rawbar',
    'mini' : false,
    'cat' : {"EN":'RAW BAR',"RU":'RAW BAR'},
    'items': [
        {
            id: 48,
            name:{'EN':'Sea urchin', 'RU':"Морской ёж"}, 
            title:{'EN':'Sea urchin, quail egg yolk, Ponzu sauce(1pc.)', 'RU':"Морской ёж, желток перепелиного яйца, соус Понзу(1шт.)"}, 
            price: 420,
            count: 1,
            grams: 10,
            img: "https://avatars.mds.yandex.net/get-eda/3805363/82fc446f3def42d7bdf6a79840d52018/450x300",
          },
         
          {
            id: 53,
            name:{'EN':'Oyster Pink Jolie', 'RU':"Устрица Розовая Джоли"},
            title:{'EN':'Oyster, lemon, wine sauce (1 unit)', 'RU':"Устрица, лимон, соус Винный (1шт.)"}, 
            price: 580,
            count: 1,
            grams: 10,
            img: "https://avatars.mds.yandex.net/get-eda/3781088/56f84fb3422f4c688bc61cb1a893c2c5/450x300",
          },
          {
            id: 54,
            name:{'EN':'Khasan Oyster', 'RU':"Устрица Хасанская"}, 
            title:{'EN':'Oyster, lemon, wine sauce (1 unit)', 'RU':"Устрица, лимон, соус Винный (1шт.)"}, 
            price: 420,
            count: 1,
            grams: 10,
            img: "https://avatars.mds.yandex.net/get-eda/3378693/2f86c58f9fa14d4d957448168544b397/450x300",
          },
       
          {
            id: 50,
            name:{'EN':'Salmon and avocado tartare', 'RU':"Тартар из лосося и авокадо"}, 
            title:{'EN':'Salmon fillet, avocado, sesame, olive oil, ponzu sauce, strawberries', 'RU':"Филе лосося, авокадо, кунжут, оливковое масло, соус понзу, клубника"},
            price: 920,
            count: 1,
            grams: 190,
            img: "/assets/img/salmonandavocadotartare.jpeg",
          },
          {
            id: 51,
            name:{'EN':'Tuna tartar', 'RU':"Тартар из тунца"}, 
            title:{'EN':'Tuna fillet, avocado, guacamole, sesame oil, soy sauce', 'RU':"Филе тунца, авокадо, гуакамоле, кунжутное масло, соевый соус"}, 
            price: 800,
            count: 1,
            grams: 200,
            img: "/assets/img/tunatartar.jpeg",
          },
          {
            id: 'rwb1',
            name:{'EN':'Beef tartare', 'RU':"Тартар из говядины"}, 
            title:{'EN':'Beef loin, capers, mustard, tabasco, olive oil, croutons', 'RU':"Говяжья вырезка, каперсы, горчица, табаско, оливковое масло, гренки"}, 
            price: 1080,
            count: 1,
            grams: 160,
            img: "https://eda.yandex/images/3518584/f4fd21be40974999bb5348c1f1c61776-450x300.jpeg",
          },
    ]
  },
  {
    'data': 'susi',
    'mini': false,
    'cat':{"EN":'Sushi',"RU":'Суши'},
    items: [
        {
          id: 1,
          name:{'EN': 'Sashimi Shrimp', 'RU': 'Сашими креветка'},
          title: {'EN': 'Shrimp, wasabi, ginger', 'RU':"Креветка, васаби, имбирь"},
          price: 780,
          count: 1,
          grams: 60,
          img: "/assets/items/Sashimishrimp.jpeg",
        },
        {
          id: 2,
          name:{'EN': 'Salmon Sashimi', 'RU': "Сашими лосось"},
          title:{'EN': 'Salmon, wasabi, ginger', 'RU': "Лосось, васаби, имбирь"},
          price: 880,
          count: 1,
          grams: 60,
          img: "/assets/items/Salmonsashimi.jpeg",
        },
        {
          id: 3,
          name:{'EN': 'Tuna Sashimi', 'RU': "Сашими тунец"},
          title:{'EN': 'Tuna, wasabi, ginger', 'RU': "Тунец, васаби, имбирь"},
          price: 920,
          count: 1,
          grams: 60,
          img: "/assets/img/tunaSashimi.jpeg",
        },
        {
          id: 4,
          name:{'EN': 'Sashimi eel', 'RU': "Сашими угорь"},
          price: 1150,
          count: 1,
          grams: 60,
          img: "/assets/img/sashimieel.jpeg",
        },
        {
          id: 5,
          name:{'EN': 'Spicy crab', 'RU': "Спайси с крабом"},
          title:{'EN': 'Crab, rice, nori, spicy sauce', 'RU': "Краб, рис, нори, спайси соус"},
          price: 380,
          count: 1,
          grams: 35,
          img: "/assets/img/spicycrab.jpeg",
        },
        {
          id: 6,
          name:{'EN': 'Spicy shrimp', 'RU': "Спайси с креветкой"},
          title:{'EN': 'Shrimp, rice, nori, spicy sauce', 'RU': "Креветка, рис, нори, спайси соус"},
          price: 240,
          count: 1,
          grams: 35,
          img: "/assets/img/spicyshrimp.jpeg",
        },
        {
          id: 7,
          name:{'EN': 'Spicy salmon', 'RU': "Спайси с лососем"},
          title:{'EN': 'Salmon, rice, nori, spicy sauce', 'RU': "Лосось, рис, нори, спайси соус"},
          price: 310,
          count: 1,
          grams: 35,
          img: "/assets/img/spicysalmon.jpeg",
        },
        {
          id: 8,
          name:{'EN': 'Spicy tuna', 'RU': "Спайси с тунцом"},
          title:{'EN': 'Tuna, rice, nori, spicy sauce', 'RU': "Тунец, рис, нори, спайси соус"},
          price: 310,
          count: 1,
          grams: 35,
          img: "/assets/img/spicytuna.jpeg",
        },
        {
          id: 9,
          name:{'EN': 'Spicy with eels', 'RU': "Спайси с угрем"},
          title:{'EN': 'Eel, rice, nori, spicy sauce', 'RU': "Угорь, рис, нори, спайси соус"},
          price: 380,
          count: 1,
          grams: 35,
          img: "/assets/img/spicywitheels.jpeg",
        },
        {
          id: 10,
          name:{'EN': 'Sushi with shrimp', 'RU': "Суши с креветкой"},
          title:{'EN': 'Shrimp, rice', 'RU': "Креветка, рис"},
          price: 240,
          count: 1,
          grams: 30,
          img: "/assets/items/Sushishrimp.jpeg",
        },
        {
          id: 11,
          name:{'EN': 'Sushi with salmon', 'RU': "Суши с лососем"},
          title:{'EN': 'Salmon, rice', 'RU': "Лосось, рис"},
          price: 290,
          count: 1,
          grams: 30,
          img: "/assets/img/sushiwithsalmon.jpeg",
        },
        {
          id: 12,
          name:{'EN': 'Sushi with tuna', 'RU': "Суши с тунцом"},
          title:{'EN': 'Tuna, rice', 'RU': "Тунец, рис"},
          price: 270,
          count: 1,
          grams: 30,
          img: "/assets/img/susiTuna.jpg",
        },
        {
          id: 13,
          name:{'EN': 'Sushi with eel', 'RU': "Суши с угрем"},
          title:{'EN': 'Eel, rice', 'RU': "Угорь, рис"},
          price: 450,
          count: 1,
          grams: 30,
          img: "/assets/img/sushiwitheel.jpeg",
        },
      ]
  },
  {
    'data' : 'roll',
    'mini' : false,
    'cat':{"EN":'Rolls',"RU":'Роллы'},
    'items': [
        {
            id: 24,
            name: {'EN': 'Maki and avocado', 'RU': "Маки с авокадо"},
            title:{'EN': 'Avocado, rice, nori', 'RU': "Авокадо, рис, нори"},
            price: 310,
            count: 1,
            grams: 100,
            img: "/assets/items/Avocadamaki.jpeg",
          },
          {
            id: 25,
            name:{'EN': 'Maki with salmon', 'RU': "Маки с лососем"},
            title:{'EN': 'Salmon, rice, nori', 'RU': "Лосось, рис, нори"},
            price: 620,
            count: 1,
            grams: 100,
            img: "/assets/img/makiwithsalmon.jpeg",
          },
          {
            id: 26,
            name:{'EN': 'Poppies with cucumber', 'RU': "Маки с огурцом"},
            title:{'EN': 'Cucumber, rice, nori', 'RU': "Огурец, рис, нори"},
            price: 260,
            count: 1,
            grams: 100,
            img: "/assets/items/Makicucumber.jpeg",
          },
          {
            id: 27,
            name:{'EN': 'Tuna maki', 'RU': "Маки с тунцом"} ,
            title:{'EN': 'Tuna, rice, nori', 'RU': "Тунец, рис, нори"} ,
            price: 410,
            count: 1,
            grams: 100,
            img: "/assets/items/Makituna.jpeg",
          },
          {
            id: 28,
            name:{'EN': 'Poppies with eel', 'RU': "Маки с угрем"},
            title:{'EN': 'Eel, rice, nori', 'RU': "Угорь, рис, нори"},
            price: 800,
            count: 1,
            grams: 100,
            img: "/assets/img/poppieswitheel.jpeg",
          },
          {
            id: 29,
            name:{'EN': 'California Roll', 'RU': "Ролл Калифорния"} ,
            title:{'EN': 'Crab, rice, Japanese mayonnaise, avocado, nori, tobiko', 'RU': "Краб, рис, японский майонез, авокадо, нори, тобико"},
            price: 1020,
            count: 1,
            grams: 190,
            img: "/assets/items/RollCalifornia.jpeg",
          },
          {
            id: 30,
            name:{'EN': 'Roll Canada', 'RU': "Ролл Канада"} ,
            title:{'EN': 'Salmon, eel, cream cheese, avocado, nori, unagi yuzu sauce, sesame, rice', 'RU': "Лосось, угорь, сливочный сыр, авокадо, нори, соус унаги юдзу, кунжут, рис"},
            price: 1250,
            count: 1,
            grams: 200,
            img: "/assets/img/rollcanada.jpeg",
          },
          {
            id: 31,
            name:{'EN': 'Philadelphia Roll', 'RU': "Ролл Филадельфия"},
            title:{'EN': 'Salmon, cream cheese, rice, avocado, nori', 'RU': "Лосось, сливочный сыр, рис, авокадо, нори"},
            price: 1150,
            count: 1,
            grams: 200,
            img: "/assets/img/philadelphiaroll.jpeg",
          },
          {
            id: 32,
            name:{'EN': 'Seared salmon roll', 'RU': "Ролл с опаленным лососем"} ,
            title:{'EN': 'Salmon, eel, avocado, nori, tobiko, unagi yuzu sauce, sesame, spicy sauce, rice', 'RU': "Лосось, угорь, авокадо, нори, тобико, соус унаги юдзу, кунжут, спайси соус, рис"},
            price: 1250,
            count: 1,
            grams: 200,
            img: "/assets/items/Rollwithsearedsalmon.jpeg",
          }
    ]
  },  
  {
    'data' : 'starters',
    'mini' : false,
    'cat':{"EN":'Starters',"RU":'Закуски'},
    'items': [
        {
            id: 76,
            name:{'EN': 'Meat Plateau', 'RU':"Мясное плато"},
            title:{'EN': 'Prosciutto, roast beef, salami', 'RU':"Прошутто, ростбиф, салями" },
            price: 1420,
            count: 1,
            grams: 150,
            img: "/assets/img/assorti.jpg",
          },
          {
            id: 77,
            name:{'EN': 'Chicken liver pate with brioche', 'RU':"Паштет из куриной печени с бриошью" },
            title:{'EN': 'Chicken liver pate, brioche, fig jam', 'RU':"Паштет из куриной печени, бриошь, джем из инжира" },
            price: 690,
            count: 1,
            grams: 120,
            img: "/assets/img/chickenliverpatewithbrioche.jpeg",
          },
          {
            id: 78,
            name:{'EN': 'Antipasti Set', 'RU': "Сет Антипасти"},
            title:{'EN': 'Kalamata olives, sun-dried tomatoes, artichokes', 'RU':"Оливки каламата, вяленые томаты, артишоки" },
            price: 1200,
            count: 1,
            grams: 250,
            img: "/assets/img/anitipast.jpg",
          },
          {
            id: 79,
            name:{'EN': 'Cheese Plateau', 'RU':"Сырное плато" },
            title:{'EN': 'Gorgonzola, Brie, Parmesan, nuts, dried fruit, grapes and honey', 'RU':"Горгонзола, бри, пармезан, орехи, сухофрукты, виноград и мед" },
            price: 1800,
            count: 1,
            grams: 340,
            img: "/assets/img/chees.jpg",
          },
          
     
    ]
  }, 
  {
    'data' : 'salads',
    'mini' : false,
    'cat':{"EN":'Salads',"RU":'Салаты'},
    'items': [
        {
            id: 41,
            name:{'EN':'Broken cucumber and salmon', 'RU':"Битый огурец и лосось"}, 
            title:{'EN':'Salmon, cucumbers, onions, mixed greens, cashew nuts', 'RU':"Лосось, огурцы, лук репчатый, зелень микс, орех кешью"}, 
            price: 910,
            count: 1,
            grams: 360,
            modifier:{'EN':['sashimi','on the grill'], 'RU':['сашими','на гриле']}, 
            img: "/assets/img/brokencucumberandsalmon.jpeg",
          },
          {
            id: 42,
            name:{'EN':'Greek salad with kalamata olives', 'RU':"Греческий салат с оливками каламата"}, 
            title:{'EN':'Baku tomatoes, cucumbers, bell peppers, red onions, mixed salad', 'RU':"Помидоры бакинские, огурцы, болгарский перец, красный лук, микс салатов"},
            price: 810,
            count: 1,
            grams: 310,
            img: "/assets/items/photo1716123871.jpeg",
          },
          {
            id: 43,
            name:{'EN':'Green Bowl', 'RU':"Зеленый боул"},
            title:{'EN':'Avocado, cucumber, chicken egg, chuca lettuce, spinach', 'RU':"Авокадо, огурец, яйцо куриное, чука салат, шпинат"}, 
            price: 980,
            count: 1,
            grams: 170,
            img: "/assets/items/Greenbowl.jpeg",
          },
          {
            id: 45,
            name:{'EN':'Grilled shrimp Caesar', 'RU':"Цезарь с креветками на гриле"}, 
            title:{'EN':'Romano salad leaves, shrimp, cherry tomatoes, parmesan cheese, caesar sauce, wheat baguette croutons', 'RU':"Листья салата Романо, креветки, помидоры черри, сыр пармезан, соус цезарь, гренки из пшеничного багета"}, 
            price: 710,
            count: 1,
            grams: 250,
            img: "/assets/img/grilledshrimpcaesar.jpeg",
          },
          {
            id: 46,
            name:{'EN':'Caesar with grilled chicken breast', 'RU':"Цезарь с куриной грудкой на гриле"}, 
            title:{'EN':'Romano salad leaves, chicken fillet, cherry tomatoes, parmesan cheese, sauce', 'RU':"Листья салата Романо, куриное филе, помидоры черри, сыр пармезан, соус"},
            price: 610,
            count: 1,
            grams: 250,
            img: "/assets/img/caesarwithgrilledchickenbreast.jpeg",
          },
      

        
          
          {
            id: 'sd3',
            name:{'EN':'Green salad with crab', 'RU':"Зелёный салат с крабом"}, 
            title:{'EN':'Ruccola, cucumber, avocado, crab, sesame dressing, parmesan, cherry tomatoes', 'RU':"Руккола, огурец, авокадо, краб, кунжутный дрессинг, пармезан, помидоры черри"}, 
            price: 1100,
            count: 1,
            grams: 240,
            img: "/assets/img/greensaladwithcrab.jpeg",
          },
          {
            id: 'sd1',
            name:{'EN':'Burrata with tomatoes and spinach', 'RU':"Буррата с томатами и шпинатом"}, 
            title:{'EN':'Burrata cheese, tomatoes, spinach', 'RU':"Сыр буррата, томаты, шпинат"}, 
            price: 890,
            count: 1,
            grams: 120,
            img: "/assets/items/Burratawithtomatoes.jpeg",
          },
          {
            id: 'sd5',
            name:{'EN':'Salmon and Blood Orange Salad', 'RU':"Салат с лососем и красным апельсином"}, 
            title:{'EN':'', 'RU':""}, 
            price: 1280,
            count: 1,
            grams: 180,
            img: "/assets/img/salmonandBloodOrangeSalad.jpeg",
          },
          {
            id: 'sd6',
            name:{'EN':'Salad with shrimp, avocado and tomatoes', 'RU':"Салат с креветками, авокадо и томатами"}, 
            title:{'EN':'Shrimp, Baku tomatoes, avocado, cilantro, sour cream, olive oil, sesame', 'RU':"Креветки, помидоры бакинские, авокадо, кинза, сметана, оливковое масло, кунжут"}, 
            price: 980,
            count: 1,
            grams: 250,
            img: "https://eda.yandex/images/3682162/904470cd4da14c5fb961a577a3a79dc5-450x300.jpeg",
          }
    ]
  },
  {
    'data' : 'brusshetta',
    'mini' : false,
    'cat':{"EN":'Bruschetta',"RU":'Брускетты'},
    'items': [

          {
            id: 62,
            name:{'EN': 'Bruschetta with crab and pickled tomatoes', 'RU':"Брускетта с крабом и маринованными томатами" },
            title:{'EN': 'Grain bread, crab, tomatoes, romano salad, spicy sauce', 'RU':"Хлеб зерновой, краб, помидоры, салат романо, спайси соус" } ,
            price: 920,
            count: 1,
            grams: 190,
            img: "/assets/items/Bruschettawithcrab.jpeg",
          },
          {
            id: 63,
            name:{'EN': 'With salmon and avocado', 'RU':"С лососем и авокадо" },
            title:{'EN': 'Grain bread, lightly salted salmon, avocado, tomato, creamy', 'RU':"Хлеб зерновой, лосось слабосоленый, авокадо, помидоры, сливочный" },
            price: 980,
            count: 1,
            grams: 220,
            img: "/assets/img/salmonandavocado.jpeg",
          },
          {
            id: 'b1',
            name: {'EN': "Bruschetta with roast beef and red onions", 'RU': "Брускетта с ростбифом и красным луком"},
            title: {'EN': "Grain bread, roast beef, tomatoes, red onion, mustard, horseradish, olive oil, parsley", 'RU': "Хлеб зерновой, ростбиф (говядина), помидоры, красный лук, горчица, хрен, оливковое масло, петрушка"},
            price: 690,
            count: 1,
            grams: 190,
            img: "/assets/img/bruschettawithroastbeefandredonions.jpeg"
          },
          {
            id: 65,
            name:{'EN': 'With tomatoes and avocado', 'RU':"С томатами и авокадо" },
            title:{'EN': 'Grain bread, tomatoes, avocado, guacamole sauce, Romano salads, Frise', 'RU': "Хлеб зерновой, помидоры, авокадо, соус Гуакамоле, салаты Романо, Фризе"},
            price: 520,
            count: 1,
            grams: 165,
            img: "/assets/img/withtomatoesandavocado.jpeg",
          },
    ]
  },
  {
    'data': 'soap',
    'mini' : false,
    'cat':{"EN":'Soups',"RU":'Супы'},
    'items': [
        {
            id: 'so1',
            name:{'EN': 'Borscht with veal cheek and smoked prunes', 'RU':"Борщ с телячьей щёчкой и копченым черносливом"} ,
            title:{'EN': 'Salt, black pepper, sugar, garlic fraiche, dill, parsley, sour cream, green onions, borodino bread', 'RU':"Соль, перец черный, сахар, фреш чесночный, укроп, петрушка, сметана, лук зеленый, хлеб бородинский"} ,
            price: 610,
            count: 1,
            grams: 450,
            img: "/assets/img/borscht.jpeg",
          },
          {
            id: 86,
            name:{'EN': 'Chicken noodle soup', 'RU':"Суп-лапша из цыпленка"} ,
            title:{'EN': 'Chicken broth, vermicelli, chicken fillet, quail egg, herbs', 'RU':"Куриный бульон, вермишель, куриное филе, перепелиное яйцо, зелень"} ,
            price: 420,
            count: 1,
            grams: 450,
            img: "/assets/img/lap.jpg",
          }, 
          {
            id: 'so2',
            name:{'EN': 'Tom yam with shrimp and wood mushrooms', 'RU':"Том ям с креветками и древесными грибами"} ,
            title:{'EN': 'Squid, wood mushrooms, basmati rice, sesame oil, coconut milk, tomato, lime, shrimp, tomato paste, ginger, oyster mushrooms, mussels, cilantro', 'RU':"Кальмар, грибы древесные, рис басмати, масло кунжутное, молоко кокосовое, помидоры, лайм, креветки, паста томатная, имбирь, вешенки, мидии, кинза"} ,
            price: 850,
            count: 1,
            grams: 580,
            img: "/assets/img/tomyamwithshrimpandwoodmushrooms.jpeg",
          },
          {
            id: 'so3',
            name:{'EN': 'Salmon, sea bass and cod soup', 'RU':"Уха из лосося, сибаса и трески"} ,
            title:{'EN': 'Fish broth, mussels, salmon, sea bass, cod, potatoes, tomatoes, garlic fresh, dill, parsley', 'RU':"Бульон рыбный, мидии, лосось, сибас, треска, картофель, томаты, чесночный фреш, укроп, петрушка"} ,
            price: 850,
            count: 1,
            grams: 450,
            img: "/assets/items/Salmonseabassandcodfissoup.jpeg",
          },
          {
            id: 'so4',
            name:{'EN': 'Lentil cream soup with artichokes and pickled onions', 'RU':"Крем-суп из чечевицы с артишоками и маринованным лучком"} ,
            title:{'EN': 'Lentils, carrots, onions, potatoes, artichokes, pearl onions, green onions, seeds, ground olives, olive oil, vegetable oil, garlic, salt, pepper', 'RU':"Чечевица, морковь, лук репчатый, картофель, артишоки, лук жемчужный, лук зеленый, семечки, земля из маслин, оливковое масло, масло растительное, чеснок, соль, перец"} ,
            price: 550,
            count: 1,
            grams: 330,
            img: "/assets/items/so4.jpeg",
          },
    ]
  },
  {
    'data' : 'pasta',
    'mini' : false,
    'cat':{"EN": 'Pasta and risotto',"RU": 'Паста и ризотто'},
    'items': [
        {
            id: 'p1',
            name:{'EN':'Spaghetti with crab in tomato sauce', 'RU':"Спагетти с крабом в томатном соусе"}, 
            title:{'EN':'Spaghetti, crab, chicken broth, basil, tomato sauce, butter', 'RU':"Спагетти, краб, куриный бульон, базилик, соус томатный, масло сливочное"}, 
            price: 1050,
            count: 1,
            grams: 300,
            img: "/assets/items/Spaghettiwithcrab.jpeg",
          },
          {
            id: 'p2',
            name:{'EN':'Tagliatelle with seafood', 'RU':"Тальятелле с морепродуктами"}, 
            title:{'EN':'Tagliatelle, calamari, shrimp, mussels, octopus, white wine, chicken broth, rosemary, thyme, olive oil, vegetable oil, Parmesan', 'RU':"Тальятелле, кальмары, креветки, мидии, осьминог, вино белое, куриный бульон, розмарин, тимьян, масло оливковое, масло растительное, пармезан"}, 
            price: 990,
            count: 1,
            grams: 390,
            img: "/assets/img/p2.jpeg",
          },   {
            id: 'p3',
            name:{'EN':'Risotto with porcini mushrooms', 'RU':"Ризотто с белыми грибами"}, 
            title:{'EN':'Arborio rice, porcini mushrooms', 'RU':"Рис арборио, белые грибы"}, 
            price: 1100,
            count: 1,
            grams: 190,
            img: "/assets/img/risottowithporcinimushrooms.jpeg",
          },   {
            id: 'p4',
            name:{'EN':'Penne with beef, porcini mushrooms and truffle sauce', 'RU':"Пенне с говядиной, белыми грибами и трюфельным соусом"}, 
            title:{'EN':'Penne, beef, parmesan cheese, porcini mushrooms, white wine, cream, tomatoes, truffle oil, olive oil', 'RU':"Пенне, говяжья вырезка, сыр пармезан, белые грибы, вино белое, сливки, помидоры, масло трюфельное, масло оливковое"}, 
            price: 1100,
            count: 1,
            grams: 350,
            img: "/assets/img/pennewithbeefporcinimushroomsandtrufflesauce.jpeg",
          },        {
            id: 'p7',
            name:{'EN':'Spaghetti with vongole', 'RU':"Спагетти с вонголе"}, 
            title:{'EN':'Vongole, white wine, salt, pepper, shallot, garlic puree, chicken broth, butter, parsley', 'RU':"Вонголе, вино белое, соль, перец, шалот, чесночное пюре, бульон куриный, сливочное масло, петрушка"}, 
            price: 750,
            count: 1,
            grams: 330,
            img: "/assets/img/spaghettiwithvongole.jpeg",
          },   {
            id: 'p8',
            name:{'EN':'Risotto with beef tartare', 'RU':"Ризотто с тартаром из говядины"}, 
            title:{'EN':'Chicken broth, salt, pepper, butter, cream, beef tartare, green peas, watercress, olive oil, truffle oil', 'RU':"Куриный бульон, соль, перец, масло сливочное, сливки, тартар из говядины, горошек зеленый, кресс-салат, масло оливковое, масло трюфельное"}, 
            price: 1080,
            count: 1,
            grams: 190,
            img: "/assets/items/Risottowithbeeftartare.jpeg",
          },   
          {
            id: 'p10',
            name:{'EN':'Spaghetti Bolognese', 'RU':"Спагетти Болоньезе"}, 
            title:{'EN':'Spaghetti, bolognese sauce, arabiata pilati sauce, parmesan cheese, olive oil, microgreens, olive ground', 'RU':"Спагетти, соус болоньезе, соус арабьята пилати, сыр пармезан, масло оливковое, микрозелень, земля из маслин"}, 
            price: 790,
            count: 1,
            grams: 250,
            img: "/assets/img/p10.jpeg",
          },
          
    ]
  },  
  {
        'data' : 'noodles',
        'mini' : false,
        'cat':{"EN":'Noodles',"RU":'Лапша'},
        'items': [
          {
            id: 'p5',
            name:{'EN':'Buckwheat noodles with chicken in Asian sauce', 'RU':"Гречневая лапша с курицей в азиатском соусе"}, 
            title:{'EN':'Buckwheat noodles, chicken thigh, bell peppers, carrots, zucchini, pea pods, Singapore sauce, sesame', 'RU':"Лапша гречневая, куриное бедро, болгарский перец, морковь, цукини, стручки гороха, сингапурский соус, кунжут"}, 
            price: 680,
            count: 1,
            grams: 300,
            img: "/assets/img/buckwheatnoodleswithchickeninAsiansauce.jpeg",
          }, 
          {
            id: 'p6',
            name:{'EN':'Rice noodles with tiger shrimps', 'RU':"Рисовая лапша с тигровыми креветками"}, 
            title:{'EN':'Rice noodles, tiger shrimp, bell peppers, carrots, zucchini, egg, Singapore sauce, cilantro', 'RU':"Рисовая лапша, тигровые креветки, болгарский перец, морковь, цукини, яйцо, сингапурский соус, кинза"}, 
            price: 690,
            count: 1,
            grams: 320,
            img: "/assets/img/p6.jpeg",
          },
        ]
  },
  {
    'data' : 'fishSeafood',
    'mini' : false,
    'cat':{"EN":'Fish and seafood',"RU":'Рыба и морепродукты'},
    'items': [
        {
          id: 125,
          name:{'EN': 'Salmon steak with vegetable salsa', 'RU':"Стейк лосося с овощной сальсой"},
          title:{'EN': 'Salmon fillet, tomato salsa, avocado, cucumber vegetable oil', 'RU':"Филе лосося, сальса из томатов, авокадо, огурец масло растительное"},
          modifier:{'EN':['on the grill', 'steamed'], 'RU':['на гриле','на пару']},
          price: 1400,
          count: 1,
          grams: 200,
          img: "/assets/img/salmonsteakwithvegetablesalsa.jpeg",
        },
        {
          id: 81,
          name:{'EN': 'Mussels in wine sauce', 'RU':"Мидии в винном соусе"} ,
          title:{'EN': 'Mussels, chicken broth, wine, coconut milk, rosemary, thyme, cilantro', 'RU':"Мидии, куриный бульон, вино, кокосовое молоко, розмарин, тимьян, кинза"},
          price: 860,
          count: 1,
          grams: 500,
          img: "/assets/img/midii.jpg",
        },
        {
            id: 80,
            name:{'EN': 'Grilled shrimp with spicy sauce', 'RU':"Креветки на гриле с соусом спайси"} ,
            title:{'EN': 'Shrimp, soy sauce, sesame oil, spicy sauce, sesame seeds, bamboo leaf', 'RU':"Креветки, соевый соус, масло кунжутное, спайси соус, кунжут, лист бамбука"},
            price: 900,
            count: 1,
            grams: 150,
            img: "/assets/img/grilledshrimpwithspicysauce.jpeg",
        },  
          
        
         {
          id: 2343,
          name: {'EN': 'Black cod on a bed of spinach', 'RU': 'Черная треска на подушке из шпината'},
          title: {'EN': 'Baked black cod fillet served on a bed of poached spinach surrounded by walnut sauce and almond slices', 'RU': 'Запеченное филе черной трески подается на подушке из припущенного шпината в окружении орехового соуса и слайсов миндаля'},
          price: 1030,
          count: 1,
          grams: 180,
          img: "/assets/img/blackcodonabedofspinach.jpeg"
         }
    ]
  },
  {
    'data': 'meatPoultry',
    'mini': false,
    'cat':{"EN":'Meat and poultry',"RU":'Мясо и птица'},
    'items': [

          {
            id: 72,
            name:{'EN': 'Chicken curry with rice', 'RU':"Курица карри с рисом" },
            title:{'EN': 'Chicken fillet, rice, curry sauce', 'RU':"Куриное филе, рис, карри соус" },
            price: 710,
            count: 1,
            grams: 280,
            img: "/assets/img/chickencurrywithrice.jpeg",
          },
          {
            id: 73,
            name:{'EN': 'Ribeye steak with grilled corn', 'RU':"Рибай стейк с кукурузой на гриле" },
            title:{'EN': 'Beef loin, corn cob', 'RU':"Говяжья вырезка, початок кукурузы" },
            price: 3200,
            count: 1,
            grams: 380,
            img: "/assets/img/ribeyesteakwithgrilledcorn.jpeg",
          },
          {
            id: 75,
            name:{'EN': 'Grilled filet mignon with zucchini', 'RU':"Филе миньон с цукини на гриле" },
            title:{'EN': 'Beef loin, zucchini, mushroom sauce, vegetable oil', 'RU':"Говяжья вырезка, цукини, грибной соус, масло растительное" },
            price: 1900,
            count: 1,
            grams: 350,
            img: "/assets/img/minon.jpg",
          },
          {
            id: 'm2',
            name:{'EN': 'Stewed veal cheek with mashed potatoes and tomatoes', 'RU':"Томлённая телячья щёчка с пюре и томатами" },
            title:{'EN': 'Mashed potatoes, demi-glace sauce, Uzbek tomatoes, cilantro, wine, thyme, garlic, onions, carrots, salt', 'RU':"Пюре картофельное, соус демиглас, помидоры узбекские, кинза, вино, тимьян, чеснок, лук, морковь, соль" },
            price: 1090,
            count: 1,
            grams: 340,
            img: "/assets/img/m2.jpeg",
          },
          {
            id: 'm3',
            name:{'EN': 'Beef Stroganoff', 'RU':"Бефстроганов" },
            title:{'EN': 'Beef, cream, mushrooms, walnut sauce, pickles, watercress, almond slices', 'RU':"Говядина, сливки, шампиньоны, соус ореховый, огурцы маринованные, кресс-салат, слайсы миндаля" },
            price: 970,
            count: 1,
            grams: 340,
            img: "/assets/img/beefstroganoff.jpeg",
          },
          {
            id: 'm4',
            name: {
              'EN': 'Chicken with Cole Slow', 'RU': 'Цыпленок с Коул Слоу'
            },
            title: {
              'EN': 'Baked chicken with truffle coleslaw', 'RU': 'Запеченный цыпленек с трюфельным коул слоу'
            },
            price: 1090,
            count: 1,
            grams: 260,
            img: '/assets/img/chickenwithColeSlow.jpeg'
          }
        
         
    ]
  }, 
  {
    'data' : 'sideDishes',
    'mini' : false,
    'cat':{"EN":'Side dishes',"RU":'Гарниры'},
    'items': [
        {
            id: 66,
            name:{'EN': 'Fried potatoes with oyster mushrooms', 'RU':"Жареный картофель с вешенками" },
            title:{'EN': 'Potatoes, oyster mushrooms, onions, parsley, garlic oil, salt, pepper', 'RU':"Картофель, грибы вешенки, лук, петрушка, чесночное масло, соль, перец" },
            price: 410,
            count: 1,
            grams: 200,
            img: "",
          },
          {
            id: 67,
            name:{'EN': 'Roasted spinach with tomatoes', 'RU':"Жареный шпинат с томатами" },
            title:{'EN': 'Spinach, garlic oil, cherry tomatoes, salt, pepper', 'RU': "Шпинат, чесночное масло, томаты черри, соль, перец"},
            price: 410,
            count: 1,
            grams: 90,
            img: "",
          },
          {
            id: 68,
            name:{'EN': 'Mashed potatoes', 'RU':"Картофельное пюре" },
            title:{'EN': 'Potatoes, butter, cream', 'RU':"Картофель, сливочное масло, сливки" },
            price: 360,
            count: 1,
            grams: 150,
            img: "",
          },
          {
            id: 69,
            name:{'EN': 'Grilled corn', 'RU':"Кукуруза на гриле" },
            title:{'EN': 'Corn', 'RU':"Кукуруза" },
            price: 410,
            count: 1,
            grams: 200,
            img: "",
          },
          {
            id: 70,
            name:{'EN': 'Asparagus', 'RU':"Спаржа" },
            title:{'EN': 'Asparagus, olive oil', 'RU':"Спаржа, оливковое масло" },
            price: 950,
            count: 1,
            grams: 100,
            img: "",
          },
          {
            id: 'v1',
            name:{'EN': 'Cabbage steak with red caviar', 'RU':"Стейк из капусты с красной икрой" },
            title:{'EN': 'Grilled cabbage steak served with cream sauce and red caviar', 'RU':"Стейк из капусты на гриле подается со сливочным соусом и красной икрой" },
            price: 690,
            count: 1,
            grams: 250,
            img: "/assets/items/v1.jpeg",
          },
    ]
  }, 
  {
    'data' : 'desserts',
    'mini' : false,
    'cat': {"EN": 'Desserts', "RU": 'Десерты'},
    'items': [
        {
            id: 89,
            name:{'EN': 'Warm apple pie with an ice cream scoop', 'RU':"Теплый яблочный пирог с шариком мороженого"} ,
            title:{'EN': 'Homemade apple and puff pastry pie, ice cream scoop, nuts', 'RU':"Домашний пирог из яблок и слоеного теста, шарик мороженого, орехи"} ,
            price: 520,
            count: 1,
            grams: 210,
            img: "/assets/img/warmapplepiewithanicecreamscoop.jpeg",
          },
          {
            id: 'ds2',
            name:{'EN': 'Miles with patisserie cream and fresh berries', 'RU':"Мильфей с кремом патисьер и свежими ягодами"},
            title:{'EN': 'Puff pastry, cream, raspberries, strawberries, blueberries, blackberries, freeze-dried raspberries', 'RU':"Тесто слоеное, крем, малина, клубника, голубика, ежевика, малина сублимированная"},
            price: 800,
            count: 1,
            grams: 160,
            img: "/assets/img/mileswithpatisseriecreamandfreshberries.jpeg",
          },
          {
            id: 'ds3',
            name: {'EN': 'Panna cotta', 'RU': 'Панна-котта'},
            title: {'EN': '', 'RU': ''},
            price: 660,
            grams: 150,
            count: 1,
            img: '/assets/img/pannacotta.jpeg'
          },
          {
            id: 'ds5',
            name: {'EN': 'Chocolate fondant with vanilla ice cream', 'RU': 'Шоколадный фондан с ванильным мороженым'},
            title: {'EN': '', 'RU': ''},
            price: 640,
            grams: 180,
            count: 1,
            img: '/assets/img/chocolatefondant.jpeg'
          }
         
         
    ]
  },
  {
        'data' : 'children',
        'mini' : false,
        'cat':{"EN":'Children`s menu',"RU":'Детское меню'},
        'items': [
            {
                id: 55,
                name:{'EN': 'Beef stroganoff with mashed potatoes', 'RU':"Бефстроганов из говядины с картофельным пюре" },
                title:{'EN': 'Beef loin, mashed potatoes, cream sauce', 'RU':"Говяжья вырезка, картофельное пюре, сливочный соус" },
                price: 500,
                count: 1,
                grams: 240,
                img: "/assets/img/beefstroganoffchild.jpeg",
              },
              {
                id: 56,
                name:{'EN': 'Chicken cutlets with mashed potatoes', 'RU':"Куриные котлеты с картофельным пюре" },
                title:{'EN': 'Minced chicken, mashed potatoes, butter', 'RU':"Куриный фарш, картофельное пюре, сливочное масло" },
                price: 500,
                count: 1,
                grams: 240,
                img: "/assets/img/chickencutletswithmashedpotatoes.jpeg",
              },
              {
                id: 57,
                name:{'EN': 'Chicken broth with noodles and vegetables', 'RU':"Куриный бульон с лапшой и овощами" },
                title:{'EN': 'Chicken broth, chicken filet, noodles, vegetables', 'RU':"Куриный бульон, куриное филе, лапша, овощи" },
                price: 230,
                count: 1,
                grams: 230,
                img: "/assets/items/Chickenbouillon.jpeg",
              },
             
              
              {
                id: 59,
                name:{'EN': 'Penne in cream sauce with parmesan cheese', 'RU':"Пенне в сливочном соусе с сыром пармезан" },
                title:{'EN': 'Penne, parmesan cheese, cream sauce', 'RU':"Пенне, сыр пармезан, сливочный соус" },
                price: 360,
                count: 1,
                grams: 210,
                img: "/assets/img/penneincreamsaucewithparmesancheese.jpeg",
              },
            
             
        ]
  },   
 
];






module.exports = { items };