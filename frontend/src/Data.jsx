const DATA = [
    {
        id : 0,
        title : "Apple Macbook Air",
        rating : "3",
        price : "1599.00",
        discountedPrice : "1199.00",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/macbook_air.png",
        category : "Computer",
        colour : "RoseGold"
    },
    {
        id : 1,
        title : "Apple Mac Mini",
        rating : "3",
        price : "1199.00",
        discountedPrice : "893.00",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/mac_mini.png",
        category : "Computer",
        colour : "Silver"
    },
    {
        id : 2,
        title : "Apple IPad",
        rating : "4",
        price : "999.00",
        discountedPrice : "499.00",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/ipad.png",
        category : "Tablet",
        colour : "Black"
    },
    {
        id : 3,
        title : "IPhone 11",
        rating : "5",
        price : "699.00",
        discountedPrice : "399.00",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/iphone11.png",
        category : "Phone",
        colour : "Black"
    },
    {
        id : 4,
        title : "IPhone 6",
        rating : "4",
        price : "499.00",
        discountedPrice : "299.00",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/iphone6.png",
        category : "Phone",
        colour : "White"
    },
    {
        id : 5,
        title : "Airpods",
        rating : "4",
        price : "59.99",
        discountedPrice : "29.99",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/airpods.png",
        category : "Accesory",
        colour : "White"
    }, 
    {
        id : 6,
        title : "IPod Touch",
        rating : "2",
        price : "250.00",
        discountedPrice : "59.99",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/ipod_touch.png",
        category : "Phone",
        colour : "Blue"
    },     
    {
        id : 7,
        title : "Airpods Max",
        rating : "5",
        price : "125.00",
        discountedPrice : "80.00",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/airpods_max.png",
        category : "Accesory",
        colour : "White, Silver"
    },   
    {
        id : 8,
        title : "Homepod mini",
        rating : "5",
        price : "125.00",
        discountedPrice : "25.00",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/homepod_mini.png",
        category : "Accesory",
        colour : "White"
    },   
    {
        id : 9,
        title : "Phone Charger",
        rating : "1",
        price : "35.00",
        discountedPrice : "17.59",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/charger.png",
        category : "Accesory",
        colour : "White"
    },   
    {
        id : 10,
        title : "IPhone Dock",
        rating : "3",
        price : "125.00",
        discountedPrice : "50.00",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/iphone_dock.png",
        category : "Accesory",
        colour : "RoseGold"
    },     
    {
        id : 11,
        title : "Apple Trackpad",
        rating : "4",
        price : "75.00",
        discountedPrice : "49.50",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/trackpad.png",
        category : "Accesory",
        colour : "Black"
    },   
    {
        id : 12,
        title : "Apple Watch - Black",
        rating : "4",
        price : "1250.00",
        discountedPrice : "725.00",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/smartwatch_black.png",
        category : "Watch",
        colour : "Black"
    },   
    {
        id : 13,
        title : "Apple Watch - Gold",
        rating : "2",
        price : "999.99",
        discountedPrice : "645.50",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/smartwatch_gold.png",
        category : "Watch",
        colour : "RoseGold"
    },   
    {
        id : 14,
        title : "Apple Watch - Green",
        rating : "4",
        price : "899.99",
        discountedPrice : "499.99",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/smartwatch_green.png",
        category : "Watch",
        colour : "Green"
    },
    {
        id : 15,
        title : "Camera Attachment",
        rating : "3",
        price : "35.49",
        discountedPrice : "20.25",
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img : "/assets/images/products/camera_attachment.png",
        category : "Accesory",
        colour : "Black"
    }
]

export default DATA;