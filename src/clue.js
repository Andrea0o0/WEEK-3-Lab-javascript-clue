// ITERATION 1

// Suspects Array

const suspectsArray = [
    {"firstName":"Andrea","lastName":"lastName1","occupation":"student1","age":11,"description":"pretty1","image":"image1","color":"blue"},
    {"firstName":"Montse","lastName":"lastName2","occupation":"student2","age":22,"description":"pretty2","image":"image2","color":"blue2"},
    {"firstName":"Tomás","lastName":"lastName3","occupation":"student3","age":33,"description":"pretty3","image":"image3","color":"blue3"},
    {"firstName":"Alex","lastName":"lastName4","occupation":"student4","age":44,"description":"pretty4","image":"image4","color":"blue4"},
    {"firstName":"Lera","lastName":"lastName5","occupation":"student5","age":55,"description":"pretty5","image":"image5","color":"blue5"},
    {"firstName":"Ibra","lastName":"lastName6","occupation":"student6","age":66,"description":"pretty5","image":"image6","color":"blue6"}];

// Rooms Array

const roomsArray = [
    {"name":"kitchen"},
    {"name":"living room"},
    {"name":"dinning room"},
    {"name":"garden"},
    {"name":"bathroom"},
    {"name":"beedrom 1"},
    {"name":"beedrom 2"},
    {"name":"beedrom 3"},
    {"name":"beedrom 4"},
    {"name":"gallery"},
    {"name":"terrace"},
    {"name":"basement"},
    {"name":"mansard"},
    {"name":"office"},
    {"name":"game room"}];

// Weapons Array

const weaponsArray = [
    {"name":"Machine Gun 1","weight":111},
    {"name":"Machine Gun 2","weight":222},
    {"name":"Machine Gun 3","weight":333},
    {"name":"Machine Gun 4","weight":444},
    {"name":"Machine Gun 5","weight":555},
    {"name":"Machine Gun 6","weight":666},
    {"name":"Machine Gun 7","weight":777},
    {"name":"Machine Gun 8","weight":888},
    {"name":"Machine Gun 9","weight":999}];


// ITERATION 2

function selectRandom(arrayyy) {
    const superRandom = Math.floor(Math.random()*(arrayyy.length-1))
    if (arrayyy==[]){
        return
    }
    if(arrayyy.length==1){
        return arrayyy[0]
    }
    if(arrayyy.length>1){
        return arrayyy[superRandom]
    }
    return arrayyy[Math.random()]
}

function pickMystery() {
    const pickcard = {
        "suspect":selectRandom(suspectsArray),
        "weapon":selectRandom(weaponsArray),
        "room":selectRandom(roomsArray)
    } 
    console.log(pickcard)
    return pickcard
}

// ITERATION 3

function revealMystery(objectReveal) {
    const firstName = objectReveal.suspect.firstName
    const lastName = objectReveal.suspect.lastName
    const weapon = objectReveal.weapon.name
    const room = objectReveal.room.name
    const resultMystery = `${firstName} ${lastName} killed Mr. Boddy using the ${weapon} in the ${room}!`
    return resultMystery
}


