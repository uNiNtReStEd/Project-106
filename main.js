function start_classification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JujZHTL7j/model.json', modelLoaded);
}

function modelLoaded()
{
    classifier.classify(gotResults);    
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);

       
        document.getElementById("sound_heard").innerHTML = results[0].label;
        document.getElementById("sound_accuracy").innerHTML = results[0].confidence.toFixed(2)*100 + "%";

     
        if(results[0].label == "Roaring")
        {
            pic.src = "meow.jpg";
        }
        else if(results[0].label == "Barking")
        {
            pic.src = "dog.webp";
        }
        else if(results[0].label == "Meowing")
        {
            pic.src = "cat.jpg";
        }
        else if(results[0].label == "Trumpeting")
        {
            pic.src = "tusker.jpg";
        }
        else
        {
            pic.src = "5021018.png";
        }
        }
        }

