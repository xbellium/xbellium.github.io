//edit the number of inputted files here
var howMuchFiles;

var textFromFile;


window.onload = function () {
  fetch("files2.txt")
.then(function(response){
    return response.text();
})
.then(function(data){
   
    howMuchFiles = data;
console.log("how much files" +howMuchFiles)
 addElement();
})
   
}


function addElement() {
  console.log("hmm parse int" + howMuchFiles)
    howMuchFiles = parseInt(howMuchFiles)
    howMuchFiles = howMuchFiles + 1;
    counted();
}





function counted() {
    howMuchFiles = +howMuchFiles - 1;
    if (howMuchFiles == 0) {
        console.log("Finished loading images")
    } else {
      
        console.log(howMuchFiles)
anotherFile = toString(howMuchFiles);

console.log("very sus thing "+"names/"+howMuchFiles+".txt")

        fetch("names2/"+howMuchFiles+".txt")
        .then(function(response){
            return response.text();
        })
        .then(function(data){
           
            textFromFile = data;
           
            anotherOne();
        })
}

function anotherOne(){
        var divider = document.createElement("DIV");
        var wrapper = document.createElement("DIV");
        var textissus = document.createElement("P");
        const newimg = document.createElement("IMG");
        var fileName = howMuchFiles.toString();
        console.log("textfrom file " + textFromFile)
        textissus.innerHTML = textFromFile
       
        newimg.src = "images2/" + fileName + ".png"

        divider.className = "center"
        wrapper.className = "sustainer"
        
        divider.appendChild(newimg);
        divider.appendChild(textissus)
        document.body.appendChild(divider);
        counted();
    }

}