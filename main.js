function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true}); //code to acess microphone
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/q6vpUK5W7/model.json", modelReady);
}


function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error)
    } else{
        console.log(results);
    }

    //code to generate random colors
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;
    console.log("r: ", r, " g: ", g, " b: ", b);

    document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
    document.getElementById("result_confidence").innerHTML = "Acurracy - " + Math.floor(results[0].confidence * 100)+"%";
    document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";

    document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")";


    img = document.getElementById('alien1');
    img1 = document.getElementById('alien2');
    img2 = document.getElementById('alien3');
    img3 = document.getElementById('alien4');

    if (results[0].label == "Bounce"){
        img.src = "aliens-01.gif";
        img1.src = "aliens-02.png";
        img2.src = "aliens-03.png";
        img3.src = "aliens-04.png";
    }
    else if (results[0].label == "Slam"){
        img.src = "aliens-01.png";
        img1.src = "aliens-02.gif";
        img2.src = "aliens-03.png";
        img3.src = "aliens-04.png";
    }
    else if (results[0].label == "Snap"){
        img.src = "aliens-01.png";
        img1.src = "aliens-02.png";
        img2.src = "aliens-03.gif";
        img3.src = "aliens-04.png";
    }
    else{
        img.src = "aliens-01.png";
        img1.src = "aliens-02.png";
        img2.src = "aliens-03.png";
        img3.src = "aliens-04.gif";
    }
}