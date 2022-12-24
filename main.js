function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true, video:false});
    classifier = ml5.soundClassifer('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', {probabilityThreshold: 0.7}, modelReady);
}
function modelReady() {
    classifer.classify(gotResults);
}
var dog = 0;
var cat = 0;
function gotResults(error, results){
    if (error){
       console.error(error)
    } else 
       console.log(results);
       random_number_r=Math.floor(Math.random()*255)+1;
       random_number_g=Math.floor(Math.random()*255)+1;
       random_number_b=Math.floor(Math.random()*255)+1;
       document.getElementById("result_label").innerHTML= 'I can hear -'+ results[0].label;
       document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
       document.getElementById("result_label").style.color = "rgb('+random_number_r+','+random_number_g+','+random_number_b+')";
       document.getElementById("result_confidence").style.color = "rgb('+random_number_r+','+random_number_g+','+random_number_b+')";
       img=document.getElementById('bark');
       img1=document.getElementById('meow');
       img2=document.getElementById('listen');
       
    
       if (results[0].label== 'Barking'){
          img.src= 'bark.gif';
          
       } else if(results[0].label == 'Meow'){
        
          img1.src = 'meow.gif';
        
       } else if (results[0].label == 'Listen'){
              img2.src = 'listen.gif';
          }