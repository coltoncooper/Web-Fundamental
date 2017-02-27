var students = [
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

function printStudents(oneList){
    for(var i=0; i<oneList.length; i++){
        console.log(oneList[i].first_name, oneList[i].last_name )
    }

}
printStudents(students)


var users = {
    'Students': [
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
    ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
    ]
}

function printName(userDict) {
    console.log("Students:")
    for (var i = 0; i < userDict.Students.length; i++) {
        console.log(i+1 +" - "+ userDict.Students[i].first_name + " " +userDict.Students[i].last_name + " - " +(userDict.Students[i].first_name.length+userDict.Students[i].last_name.length))
    }
    console.log("Instructors:")
    for (var i = 0; i < userDict.Instructors.length; i++) {
        console.log(i+1 +" - " + userDict.Instructors[i].first_name + " " +userDict.Instructors[i].last_name + " - " +(userDict.Instructors[i].first_name.length+userDict.Instructors[i].last_name.length))
    }
}
printName(users)