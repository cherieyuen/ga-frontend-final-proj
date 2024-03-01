const restaurants = [
  {
    name: 'Edomae Kiyomi',
    pic: 'https://media-cdn.tripadvisor.com/media/photo-s/29/9b/c5/6b/edomae-kiyomi-sushi-bar.jpg',
    address: '76 Gerrard St E, Toronto, ON M5G 2A7',
    types: [
      {
        cuisine: 'Japanese',
        id: 12
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: 'Closed'
      },
      {
        day: 'Tuesday',
        time: '6 pm - 11 pm'
      },
      {
        day: 'Wednesday',
        time: '6 pm - 11 pm'
      },
      {
        day: 'Thursday',
        time: '6 pm - 11 pm'
      },
      {
        day: 'Friday',
        time: '6 pm - 11 pm'
      },
      {
        day: 'Saturday',
        time: '6 pm - 11 pm'
      },
      {
        day: 'Sunday',
        time: '6 pm - 11 pm'
      }
    ]
  },
  // 2
  {
    name: 'hanbingo',
    pic: 'https://media.blogto.com/uploads/2023/09/19/1695146961-20230915-Hanbingo-9.jpg?w=1400&cmd=resize&height=2500&quality=70',
    address: '397 Spadina Ave., Toronto, ON M5T 2G6, Canada',
    types: [
      {
        cuisine: 'Bingsu',
        id: 15
      },
      {
        cuisine: 'Dessert',
        id: 77
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '10 am - 3 am'
      },
      {
        day: 'Tuesday',
        time: '12 pm - 11 pm'
      },
      {
        day: 'Wednesday',
        time: '10 am - 3 am'
      },
      {
        day: 'Thursday',
        time: '10 am - 3 am'
      },
      {
        day: 'Friday',
        time: '8 am - 3 am'
      },
      {
        day: 'Saturday',
        time: '8 am - 3 am'
      },
      {
        day: 'Sunday',
        time: '10 am - 3 am'
      }
    ]
  },
  // 3
  {
    name: "Danny's Pizza Tavern",
    pic: 'https://d2l4kn3pfhqw69.cloudfront.net/wp-content/uploads/2022/09/300554512_1241718676576097_1096642352569180600_n.jpg',
    address: '611 College St, Toronto, ON M6G 1B5',
    types: [
      {
        cuisine: 'Pizza',
        id: 32
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '5 pm - 11pm'
      },
      {
        day: 'Tuesday',
        time: '5 pm - 11 pm'
      },
      {
        day: 'Wednesday',
        time: '5 pm - 11 pm'
      },
      {
        day: 'Thursday',
        time: '5 pm - 11 pm'
      },
      {
        day: 'Friday',
        time: '5 pm - 12 am'
      },
      {
        day: 'Saturday',
        time: '5 pm - 12 pm'
      },
      {
        day: 'Sunday',
        time: '5 pm - 11 pm'
      }
    ]
  },
  // 4
  {
    name: 'Fonda Lola Mexican Bistro',
    pic: 'https://d1ralsognjng37.cloudfront.net/435a4325-dfa6-49e1-bffb-cfd8ad8cad98',
    address: '942 Queen St W, Toronto, ON M6J 1G8',
    types: [
      {
        cuisine: 'Mexican',
        id: 89
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: 'Closed'
      },
      {
        day: 'Tuesday',
        time: '5 pm - 10:30pm'
      },
      {
        day: 'Wednesday',
        time: '5 pm - 10:30pm'
      },
      {
        day: 'Thursday',
        time: '5 pm - 10:30pm'
      },
      {
        day: 'Friday',
        time: '5 pm - 11:30pm'
      },
      {
        day: 'Saturday',
        time: '5 pm - 11:30pm'
      },
      {
        day: 'Sunday',
        time: '5 pm - 9:30pm'
      }
    ]
  },
  // 5
  {
    name: 'Hiya Scone and Coffee',
    pic: 'https://tb-static.uber.com/prod/image-proc/processed_images/c5d81fe7a37348ad069d698de5ce2efe/50446f64f31cbefe66558fc47f50a9d6.jpeg',
    address: '1389 Dundas St W, Toronto, ON M6J 3L5',
    types: [
      {
        cuisine: 'Cafe',
        id: 78
      },
      {
        cuisine: 'Dessert',
        id: 77
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '10 am - 5 pm'
      },
      {
        day: 'Tuesday',
        time: '10 am - 5 pm'
      },
      {
        day: 'Wednesday',
        time: 'Closed'
      },
      {
        day: 'Thursday',
        time: '10 am - 5 pm'
      },
      {
        day: 'Friday',
        time: '10 am - 5 pm'
      },
      {
        day: 'Saturday',
        time: '10 am - 5 pm'
      },
      {
        day: 'Sunday',
        time: '10 am - 5 pm'
      }
    ]
  },
  // 6
  {
    name: 'Musoshin Ramen',
    pic: 'https://media.blogto.com/articles/20201124-musoshin-toronto-3.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
    address: '9 Boustead Ave, Toronto, ON M6R 1Y7',
    types: [
      {
        cuisine: 'Japanese',
        id: 12
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '11:30 am - 9 pm'
      },
      {
        day: 'Tuesday',
        time: '11:30 am - 9 pm'
      },
      {
        day: 'Wednesday',
        time: '11:30 am - 9 pm'
      },
      {
        day: 'Thursday',
        time: '11:30 am - 9 pm'
      },
      {
        day: 'Friday',
        time: '11:30 am - 10 pm'
      },
      {
        day: 'Saturday',
        time: '11:30 am - 10 pm'
      },
      {
        day: 'Sunday',
        time: '11:30 am - 10 pm'
      }
    ]
  },
  // 7
  {
    name: "Rania's Cakes",
    pic: 'https://tb-static.uber.com/prod/image-proc/processed_images/c5a5aea48eac81af3ad6586d606b42a6/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg',
    address: '243 Lakeshore Rd E, Mississauga, ON L5G 1G8',
    types: [
      {
        cuisine: 'Cafe',
        id: 78
      },
      {
        cuisine: 'Dessert',
        id: 77
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: 'Closed'
      },
      {
        day: 'Tuesday',
        time: '10 am - 6 pm'
      },
      {
        day: 'Wednesday',
        time: '10 am - 6 pm'
      },
      {
        day: 'Thursday',
        time: '10 am - 6 pm'
      },
      {
        day: 'Friday',
        time: '10 am - 9 pm'
      },
      {
        day: 'Saturday',
        time: '10 am - 9 pm'
      },
      {
        day: 'Sunday',
        time: '10 am - 6 pm'
      }
    ]
  },
  // 8
  {
    name: 'Brasas Churrasqueira Rotisserie & Grill',
    pic: 'https://d39wagjjoiweq1.cloudfront.net/uploads/business_documents_listing/20230411112046_21938_604976344.jpg',
    address: '2385 Burnhamthorpe Rd W, Mississauga, ON L5L 2M8',
    types: [
      {
        cuisine: 'Portuguese',
        id: 31
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: 'Closed'
      },
      {
        day: 'Tuesday',
        time: '11 am - 8 pm'
      },
      {
        day: 'Wednesday',
        time: '11 am - 8 pm'
      },
      {
        day: 'Thursday',
        time: '11 am - 8 pm'
      },
      {
        day: 'Friday',
        time: '11 am - 8 pm'
      },
      {
        day: 'Saturday',
        time: '11 am - 8 pm'
      },
      {
        day: 'Sunday',
        time: '11 am - 6 pm'
      }
    ]
  },
  // 9
  {
    name: 'Joyous Chinese Cuisine',
    pic: 'https://images.squarespace-cdn.com/content/v1/567d5140841abaa3c9136278/1701711359260-PBFDHG8JRQJTE45H4TVP/Toronto+Restaurants+OpenClosed++Nov+30-Dec+6+Stephanie+Dickison.png?format=1500w',
    address: '5505 Leslie St, North York, ON M2H 3N6',
    types: [
      {
        cuisine: 'Chinese',
        id: 88
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '10 am - 11 pm'
      },
      {
        day: 'Tuesday',
        time: '10 am - 11 pm'
      },
      {
        day: 'Wednesday',
        time: '10 am - 11 pm'
      },
      {
        day: 'Thursday',
        time: '10 am - 11 pm'
      },
      {
        day: 'Friday',
        time: '10 am - 11 pm'
      },
      {
        day: 'Saturday',
        time: '9 am - 11 pm'
      },
      {
        day: 'Sunday',
        time: '9 am - 11 pm'
      }
    ]
  },
  // 10
  {
    name: 'Mokutan Yakitori & Oyster Izakaya',
    pic: 'https://res.cloudinary.com/the-infatuation/image/upload/f_auto/q_auto/v1681248863/images/Moku_Yakitoriya_Momo_Harami_Buta_Bara_Yakitori_1_SF_Erin_Ng_hyltxu.jpg',
    address: '7057 Yonge St, Thornhill, ON L3T 2A6',
    types: [
      {
        cuisine: 'Japanese',
        id: 12
      },
      {
        cuisine: 'Seafood',
        id: 45
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '5 pm - 1 am'
      },
      {
        day: 'Tuesday',
        time: '5 pm - 1 am'
      },
      {
        day: 'Wednesday',
        time: '5 pm - 1 am'
      },
      {
        day: 'Thursday',
        time: '5 pm - 1 am'
      },
      {
        day: 'Friday',
        time: '5 pm - 1 am'
      },
      {
        day: 'Saturday',
        time: '5 pm - 1 am'
      },
      {
        day: 'Sunday',
        time: '5 pm - 1 am'
      }
    ]
  },
  // 11
  {
    name: 'Bear Bear Cafe',
    pic: 'https://s3-media0.fl.yelpcdn.com/bphoto/cY13dNWmrIZaDr42cVGtSw/348s.jpg',
    address: '15 Northtown Way Unit 30, North York, ON M2N 7A2',
    types: [
      {
        cuisine: 'Japanese',
        id: 12
      },
      {
        cuisine: 'Dessert',
        id: 77
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '11:30 pm - 9:30 pm'
      },
      {
        day: 'Tuesday',
        time: 'Closed'
      },
      {
        day: 'Wednesday',
        time: '11:30 pm - 9:30 pm'
      },
      {
        day: 'Thursday',
        time: '11:30 pm - 9:30 pm'
      },
      {
        day: 'Friday',
        time: '11:30 pm - 9:30 pm'
      },
      {
        day: 'Saturday',
        time: '11:30 pm - 9:30 pm'
      },
      {
        day: 'Sunday',
        time: '11:30 pm - 9:30 pm'
      }
    ]
  },
  //12
  {
    name: 'HanOak PoCha',
    pic: 'https://tb-static.uber.com/prod/image-proc/processed_images/2cadac981dc0f3c871f22864ce4fd187/783282f6131ef2258e5bcd87c46aa87e.webp',
    address: '1450 Clark Ave W, Thornhill, ON L4J 7J9',
    types: [
      {
        cuisine: 'Korean',
        id: 613
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: 'Closed'
      },
      {
        day: 'Tuesday',
        time: '7 pm - 2 am'
      },
      {
        day: 'Wednesday',
        time: '7 pm - 2 am'
      },
      {
        day: 'Thursday',
        time: '7 pm - 2 am'
      },
      {
        day: 'Friday',
        time: '7 pm - 2 am'
      },
      {
        day: 'Saturday',
        time: '7 pm - 2 am'
      },
      {
        day: 'Sunday',
        time: '7 pm - 2 am'
      }
    ]
  },
  //13
  {
    name: 'Pii Nong Thai',
    pic: 'https://images.squarespace-cdn.com/content/v1/5ee95d70c994352caf4aded2/1592353948880-JMBAHNPVIXFJQ3WSJB2H/Large+JPG-Aro+Ha_0380.jpg',
    address: '1677 Bayview Ave, East York, ON M4G 3C1',
    types: [
      {
        cuisine: 'Vietnamese',
        id: 27
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '11 am - 10 pm'
      },
      {
        day: 'Tuesday',
        time: '11 am - 10 pm'
      },
      {
        day: 'Wednesday',
        time: '11 am - 10 pm'
      },
      {
        day: 'Thursday',
        time: '11 am - 10 pm'
      },
      {
        day: 'Friday',
        time: '11 am - 10 pm'
      },
      {
        day: 'Saturday',
        time: '11 am - 10 pm'
      },
      {
        day: 'Sunday',
        time: '11 am - 10 pm'
      }
    ]
  },
  //14
  {
    name: 'Robot Boil House',
    pic: 'https://d1ralsognjng37.cloudfront.net/c5a9dfee-c1e3-4ed1-8582-746193415327.jpeg',
    address: '895 Yonge St, Toronto, ON M4W 2H2',
    types: [
      {
        cuisine: 'Seafood',
        id: 45
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '12 pm - 10:30 pm'
      },
      {
        day: 'Tuesday',
        time: '12 pm - 10:30 pm'
      },
      {
        day: 'Wednesday',
        time: '12 pm - 10:30 pm'
      },
      {
        day: 'Thursday',
        time: '12 pm - 10:30 pm'
      },
      {
        day: 'Friday',
        time: '12 pm - 11 pm'
      },
      {
        day: 'Saturday',
        time: '12 pm - 11 pm'
      },
      {
        day: 'Sunday',
        time: '12 pm - 11 pm'
      }
    ]
  },
  //15
  {
    name: "Krispy's Kajun Chicken",
    pic: 'https://d1ralsognjng37.cloudfront.net/3056d43f-d65b-413f-b623-c025110c09fc.jpeg',
    address: '4997 Hwy 7, Unionville, ON L3R 1N3',
    types: [
      {
        cuisine: 'Fast Food',
        id: 1
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '11 pm - 8:30 pm'
      },
      {
        day: 'Tuesday',
        time: '11 pm - 8:30 pm'
      },
      {
        day: 'Wednesday',
        time: '11 pm - 8:30 pm'
      },
      {
        day: 'Thursday',
        time: '11 pm - 8:30 pm'
      },
      {
        day: 'Friday',
        time: '11 pm - 8:30 pm'
      },
      {
        day: 'Saturday',
        time: '11 pm - 8:30 pm'
      },
      {
        day: 'Sunday',
        time: '11 pm - 8:30 pm'
      }
    ]
  },
  //16
  {
    name: 'Flower & Horse in Spring',
    pic: 'https://duyt4h9nfnj50.cloudfront.net/resized/1521139526147-w550-b2.jpg',
    address: '8362 Kennedy Rd unit 3, Unionville, ON L3R 9W5',
    types: [
      {
        cuisine: 'Chinese',
        id: 88
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '11 pm - 9 pm'
      },
      {
        day: 'Tuesday',
        time: '11 pm - 9 pm'
      },
      {
        day: 'Wednesday',
        time: '11 pm - 9 pm'
      },
      {
        day: 'Thursday',
        time: '11 pm - 9 pm'
      },
      {
        day: 'Friday',
        time: '11 pm - 9 pm'
      },
      {
        day: 'Saturday',
        time: '11 pm - 9 pm'
      },
      {
        day: 'Sunday',
        time: '11 pm - 9 pm'
      }
    ]
  },
  //17
  {
    name: 'a Lot Coffee',
    pic: 'https://media.blogto.com/uploads/2023/10/23/1698091615-20231017-ALotCoffee-6.jpg?w=1400&cmd=resize&height=2500&quality=70',
    address: '28 South Unionville Ave #1036, Markham, ON L3R 4P9',
    types: [
      {
        cuisine: 'Cafe',
        id: 78
      },
      {
        cuisine: 'Dessert',
        id: 77
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '9 am - 6 pm'
      },
      {
        day: 'Tuesday',
        time: '9 am - 6 pm'
      },
      {
        day: 'Wednesday',
        time: '9 am - 6 pm'
      },
      {
        day: 'Thursday',
        time: '9 am - 6 pm'
      },
      {
        day: 'Friday',
        time: '9 am - 6 pm'
      },
      {
        day: 'Saturday',
        time: '9:30 am - 6:30 pm'
      },
      {
        day: 'Sunday',
        time: '9:30 am - 6:30 pm'
      }
    ]
  },
  //18
  {
    name: 'Nian Yi Kuai Zi',
    pic: 'https://media.blogto.com/listings/20230214-NianYiKuaiZi.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
    address: '328 Hwy 7, Richmond Hill, ON L4B 3P7',
    types: [
      {
        cuisine: 'Chinese',
        id: 88
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '11:30 pm - 10 pm'
      },
      {
        day: 'Tuesday',
        time: '11:30 pm - 10 pm'
      },
      {
        day: 'Wednesday',
        time: '11:30 pm - 10 pm'
      },
      {
        day: 'Thursday',
        time: '11:30 pm - 10 pm'
      },
      {
        day: 'Friday',
        time: '11:30 pm - 10 pm'
      },
      {
        day: 'Saturday',
        time: '11:30 pm - 10 pm'
      },
      {
        day: 'Sunday',
        time: '11:30 pm - 10 pm'
      }
    ]
  },
  //19
  {
    name: 'Koh Lipe Thai Kitchen Scarborough',
    pic: 'https://media.blogto.com/listings/20190430-KohLipe8.jpg?w=1200&cmd=resize_then_crop&height=630&quality=70',
    address: 'Unit 1R1, 1R2, 4675 Steeles Ave E, Scarborough, ON M1V 0B7',
    types: [
      {
        cuisine: 'Thai',
        id: 3
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '11:30 pm - 10 pm'
      },
      {
        day: 'Tuesday',
        time: '11:30 pm - 10 pm'
      },
      {
        day: 'Wednesday',
        time: '11:30 pm - 10 pm'
      },
      {
        day: 'Thursday',
        time: '11:30 pm - 10 pm'
      },
      {
        day: 'Friday',
        time: '11:30 pm - 10 pm'
      },
      {
        day: 'Saturday',
        time: '12 pm - 11 pm'
      },
      {
        day: 'Sunday',
        time: '12 pm - 10 pm'
      }
    ]
  },
  //20
  {
    name: 'Pot-licious Stew',
    pic: 'https://p8.itc.cn/q_70/images03/20210120/2189b61bd4794fd3b53ed72945029ebf.jpeg',
    address: '4188 Finch Ave E, Scarborough, ON M1S 4T6',
    types: [
      {
        cuisine: 'Chinese',
        id: 88
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '11:30 pm - 12 pm'
      },
      {
        day: 'Tuesday',
        time: '11:30 pm - 12 pm'
      },
      {
        day: 'Wednesday',
        time: '11:30 pm - 12 pm'
      },
      {
        day: 'Thursday',
        time: '11:30 pm - 12 pm'
      },
      {
        day: 'Friday',
        time: '11:30 pm - 1 am'
      },
      {
        day: 'Saturday',
        time: '11:30 pm - 1 am'
      },
      {
        day: 'Sunday',
        time: '11:30 pm - 1 am'
      }
    ]
  },
  //21
  {
    name: 'To-Ne Sushi',
    pic: 'https://d1ralsognjng37.cloudfront.net/8404dd79-6583-407d-987b-75b970523a12.jpeg',
    address: '414 Queen St W, Toronto, ON M5V 2A7',
    types: [
      {
        cuisine: 'Japanese',
        id: 12
      },
      {
        cuisine: 'Seafood',
        id: 45
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '12 - 10:30 pm'
      },
      {
        day: 'Tuesday',
        time: 'Closed'
      },
      {
        day: 'Wednesday',
        time: '12 pm - 10:30 pm'
      },
      {
        day: 'Thursday',
        time: '12 pm - 10:30 pm'
      },
      {
        day: 'Friday',
        time: '12 pm - 11 pm'
      },
      {
        day: 'Saturday',
        time: '12 pm - 11 pm'
      },
      {
        day: 'Sunday',
        time: '1 pm - 10 pm'
      }
    ]
  },
  //22
  {
    name: 'Kimsoonrye soonsal chicken',
    pic: 'https://media.blogto.com/listings/20231204.Kimsoonrye.jpeg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
    address: '620 Bloor St W, Toronto, ON M6G 1K7',
    types: [
      {
        cuisine: 'Korean',
        id: 613
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '12 pm - 10 pm'
      },
      {
        day: 'Tuesday',
        time: '12 pm - 10 pm'
      },
      {
        day: 'Wednesday',
        time: '12 pm - 10 pm'
      },
      {
        day: 'Thursday',
        time: '12 pm - 10 pm'
      },
      {
        day: 'Friday',
        time: '12 pm - 12 am'
      },
      {
        day: 'Saturday',
        time: '12 pm - 12 am'
      },
      {
        day: 'Sunday',
        time: '12 pm - 10 pm'
      }
    ]
  },
  //23
  {
    name: 'Florette',
    pic: 'https://images.prismic.io/taste/9a465f9a-fa14-43cf-a695-efdd218f6d8a_23-02-23_Restaurant_TasteToronto_Florette_CarbelleDjossa_FoodPhotographer_TT_Florette_3L8A8768.Web.jpg?auto=compress,format',
    address: '1168 Queen St W, Toronto, ON M6J 1J5',
    types: [
      {
        cuisine: 'Japanese',
        id: 12
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: 'Closed'
      },
      {
        day: 'Tuesday',
        time: 'Closed'
      },
      {
        day: 'Wednesday',
        time: '5:30 pm - 11 pm'
      },
      {
        day: 'Thursday',
        time: '5:30 pm - 11 pm'
      },
      {
        day: 'Friday',
        time: '5:30 pm - 11 pm'
      },
      {
        day: 'Saturday',
        time: '5 pm - 1 am'
      },
      {
        day: 'Sunday',
        time: '5 pm - 1 am'
      }
    ]
  },
  //24
  {
    name: 'Square Noodle',
    pic: 'https://media.blogto.com/listings/20180929-HeyNoodles6.jpg?w=1200&cmd=resize_then_crop&height=630&quality=70',
    address: '3250 Midland Ave G109, Scarborough, ON M1V 0C7',
    types: [
      {
        cuisine: 'Chinese',
        id: 88
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '11:30 pm - 11 pm'
      },
      {
        day: 'Tuesday',
        time: '11:30 pm - 11 pm'
      },
      {
        day: 'Wednesday',
        time: '11:30 pm - 11 pm'
      },
      {
        day: 'Thursday',
        time: '11:30 pm - 11 pm'
      },
      {
        day: 'Friday',
        time: '11:30 pm - 11 pm'
      },
      {
        day: 'Saturday',
        time: '11:30 pm - 11 pm'
      },
      {
        day: 'Sunday',
        time: '11:30 pm - 11 pm'
      }
    ]
  },
  //25
  {
    name: 'Happy Valley Village',
    pic: 'https://images.dailyhive.com/20230712132111/%E6%88%AA%E5%B1%8F2023-07-06-16.17.27.png',
    address: '3700 Midland Ave Unit 113&115, Scarborough, ON M1B 0B4',
    types: [
      {
        cuisine: 'Chinese',
        id: 88
      }
    ],
    hours: [
      {
        day: 'Monday',
        time: '11:30 pm - 12 am'
      },
      {
        day: 'Tuesday',
        time: '11:30 pm - 12 am'
      },
      {
        day: 'Wednesday',
        time: '11:30 pm - 12 am'
      },
      {
        day: 'Thursday',
        time: '11:30 pm - 12 am'
      },
      {
        day: 'Friday',
        time: '11:30 pm - 12 am'
      },
      {
        day: 'Saturday',
        time: '11:30 pm - 12 am'
      },
      {
        day: 'Sunday',
        time: '11:30 pm - 12 am'
      }
    ]
  }
]

export default restaurants
