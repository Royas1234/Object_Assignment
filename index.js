// Quesion 1 - create a Constructor Fuction

function instagramPost( authorHandle, content, imageLink, viewsNumber, likesNumber){
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.viewsNumber = viewsNumber;
    this.likesNumber = likesNumber;
}

// Question 2 - create 2 objects from the function above

const handler1 =  new instagramPost( "Krakstv","Hilarious and Viral Content",  "https://www.instagram.com/p/CpHwjd0AIlY/",1062, 45210 );
console.log ({ handler1});

const handler2  = new instagramPost("frankdonga_", "Comedian", " https://www.instagram.com/p/CpHejN-sviv/", 6222,  333);
console.log({handler2});

// Question 3 -- Create an obeject using Factory function

// a ------ Implementing a cretePerson ( ) Function

function createPerson (name, age, location){
    return{
        name:name,
        age:age,
        location:location

    }
};
const musaProfile = createPerson ("Musa", 19, "lekki");
console.log({musaProfile});

// b --- Implement createJambScore object for ,MUSA
function createJambScore ( eng, govt, lit, crk){
    return{
        eng: eng,
        govt:govt,
        lit:lit,
        crk:crk
    }
};

 musaProfile.createJambScore = createJambScore(70, 85,82, 94);
 console.log({musaProfile})

//  Question 4 --- Differnt you can Clone an Object and Examples

// a. Using the Object.assign() method
// example
const firstBorn = {
    name: "Rosheedat",
    age: 20,
    complexion : "fair",
}
// using Object.assign to make a copy for secondBorn
const secondBorn =Object.assign({ }, firstBorn);
console.log ({firstBorn});
console.log({secondBorn});

console.log("After making a change in the property of secondBorn")
secondBorn.complexion = "dark";
secondBorn.name = "AbdRosheed"
console.log({secondBorn});

//b. Using Spread Method ( ...)
    //  example -  Using Spread method tomake copy for thirdBorn
const thirdBorn = {...firstBorn};
console.log ({firstBorn});
console.log({thirdBorn});

console.log("After making changes to thirdBorn ")
thirdBorn.name ="Yusuff";
thirdBorn.age = 19
console.log ({firstBorn});
console.log({thirdBorn});

// c.  Using JSON.parse(JSON.stringify())
//  example
const fourthBorn = JSON.parse(JSON.stringify(firstBorn));
console.log ({firstBorn});
console.log({fourthBorn});

console.log("After making changes to fourthBorn ")
fourthBorn.name = "Kaothar";
fourthBorn.age = 15
console.log ({firstBorn});
console.log({fourthBorn});


// Question5
// Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
// ’Omoyele Sowore is the presidential candidate of AAC’

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}
for (const property in
     presidentialCandidates){
    console.log({property});
    console.log(presidentialCandidates[property] + "is the presidential candidate of " + property);
}










