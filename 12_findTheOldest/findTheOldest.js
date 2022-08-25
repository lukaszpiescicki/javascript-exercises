const findTheOldest = function(people) {
    let peopleAge = [];
    const currentYear = 2022;

    people.forEach(person => {
        personName = person.name;
        if(person.yearOfDeath){
        personAge = person.yearOfDeath - person.yearOfBirth;
    }else{
        personAge = currentYear - person.yearOfBirth;
    }
        peopleAge.push({name:personName, age:personAge});
    });
    peopleAge.sort((a,b) => b.age - a.age);
    return peopleAge[0];

};

// Do not edit below this line
module.exports = findTheOldest;
