function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

        
    context.beginPath();

    /*base line*/
    context.moveTo(canvasHeight * .5, canvasWidth * .5);
    context.lineTo(canvasHeight * .5 + 150, canvasWidth * .5);

    /*left leg*/   
    context.lineTo(canvasHeight * .5 + 75, canvasWidth * .5 -150)

    /*right leg*/    
    context.lineTo(canvasHeight * .5 + 75, canvasWidth * .5 -150);

    context.strokeStyle = 'rgba(128,128,128,.5)';
    context.stroke();

    context.fillStyle = 'rgba(255,165,0,.5)';
    context.fill();

   /*If moveTo is before each lineTo individual lines are drawn and they do not result a closed triangle. With 1 moveTo and 3 lineTo the result is a closed triangle.*/
    

}

window.addEventListener("load", pageLoaded);