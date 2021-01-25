var memberArray = ['snow98', 'mehot98', 'snowman'];

console.log(memberArray[1]);

var memberObjcet = {
    manager: 'snow98',
    developer: 'mehot98',
    designer: 'snowman'
}

console.log("manager: ", memberObjcet.manager);

var i = 0;

console.group('array loop');

while(i < memberArray.length){
    console.log("memberArray[i]: ", memberArray[i]);

    i++;
}

console.groupEnd('array loop');

console.group('object loop');

for(var name in memberObjcet){
    console.log(name, memberObjcet[name]);
}
console.groupEnd('object loop');