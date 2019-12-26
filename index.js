/*
const express = require('express');
const router = express.Router();
const faker = require('faker');

module.exports = router;

router.get('/shops', (req, res) => {
    var shops = [         
	    { 
	    	"name": "shop1",
	    	"id" : "1"
	    },
	    { 
	    	"name": "shop2",
	    	"id" : "2"
	    },
	    { 
	    	"name": "shop3",
	    	"id" : "3"
	    },
	    { 
	    	"name": "shop4",
	    	"id" : "4"
	    }
    ]; 

 
 
res.render('index',{"shops": shops});
 });

router.get('/categories', (req, res) => {
    var categories = [         
	    { 
	    	"name": "cat1",
	    	"id" : "c1"
	    },
	    { 
	    	"name": "cat2",
	    	"id" : "c2"
	    },
	    { 
	    	"name": "cat3",
	    	"id" : "c3"
	    },
	    { 
	    	"name": "cat4",
	    	"id" : "c4"
	    }
    ]; 
res.render('index',{"categories": categories});
 });

    router.get('/items', (req, res) => {
    var items = [         
	    { 
	    	"name": "item1",
	    	"id" : "i1",
	    	"image": faker.image.fashion(),
	    	"price": faker.random.number({min:3, max: 20})

	    },
	    { 
	    	"name": "item2",
	    	"id" : "i2",
	    	"image": faker.image.fashion(),
	    	"price": faker.random.number({min:3, max: 20})
	    },
	    { 
	    	"name": "item3",
	    	"id" : "i3",
	    	"image": faker.image.fashion(),
	    	"price": faker.random.number({min:3, max: 20})
	    },
	    { 
	    	"name": "item4",
	    	"id" : "i4",
	    	"image": faker.image.fashion(),
	    	"price": faker.random.number({min:3, max: 20})
	    }
    ]; 
res.render('index',{"items": items});
 });
*/

const express = require('express');
const router = express.Router();
const faker = require('faker');


module.exports = router;

router.get('/cities', (req, res) => {
    var cities = [         
	    { 
	    	"city": "Pinsk",
	    	"id" : "Pinsk"
	    },
	    { 
	    	"city": "Mogilev",
	    	"id" : "Mogilev"
	    },
	    { 
	    	"city": "Minsk",
	    	"id" : "Minsk"
	    }
    ]; 

 
 
res.render('index',{"cities": cities});
 });

router.get('/categories', (req, res) => {
    res.render('categories' , 
     {"categories": [       
	    { 
	    	"name": "category1",
	    	"id" : "c1"
	    },
	    { 
	    	"name": "category2",
	    	"id" : "c2"
	    },
	    { 
	    	"name": "category3",
	    	"id" : "c3"
	    },
	    { 
	    	"name": "category4",
	    	"id" : "c4"
	    }
    ] 
}
);
});

router.get('/items', (req, res) => {
    res.render('items' , 
     {"items": [       
	    { 
	    	"name": "item1",
	    	"id" : "i1",
	    	"image": faker.image.fashion(),
	    	"price": faker.random.number({min:3, max: 20})

	    },
	    { 
	    	"name": "item2",
	    	"id" : "i2",
	    	"image": faker.image.fashion(),
	    	"price": faker.random.number({min:3, max: 20})
	    },
	    { 
	    	"name": "item3",
	    	"id" : "i3",
	    	"image": faker.image.fashion(),
	    	"price": faker.random.number({min:3, max: 20})
	    },
	    { 
	    	"name": "item4",
	    	"id" : "i4",
	    	"image": faker.image.fashion(),
	    	"price": faker.random.number({min:3, max: 20})
	    }
    ] 
}
);
});
router.get('/shops', (req, res) => {
    res.render('shops' , 
     {"shops": [       
	    	 { 
	    	"name": "shop1",
	    	"id" : "1"
	    },
	    { 
	    	"name": "shop2",
	    	"id" : "2"
	    },
	    { 
	    	"name": "shop3",
	    	"id" : "3"
	    },
	    { 
	    	"name": "shop4",
	    	"id" : "4"
	    }
    ] 
}
);
});