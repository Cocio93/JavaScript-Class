var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

// A

var liArr = names.map(function(person) {
        return '<li>'+person.name+'</li>';
    }
);

var listCode = '<ul>'+liArr.join('')+'</ul>';
console.log(listCode);

// B

var makeTableString = function(persons) {
    var tableString = persons.map(function(person) {
        return '<tr><td>'+person.name+'</td><td>'+person.phone+'</td></tr>';
    })
    var tableCode = '<table>'+tableString.join('')+'</table>';
    return tableCode; 
};


var tableCode = makeTableString(names);
console.log(tableCode);

// C

function filterTable()  {
    var filteredNames = names.filter(function(person) {
        return person.name.length < 4;
    }
    );
    var tableCode = makeTableString(filteredNames);
    document.getElementById("namesTable").innerHTML = tableCode;
    console.log(tableCode);

}




