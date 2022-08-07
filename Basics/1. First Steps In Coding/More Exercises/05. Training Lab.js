function trainingLab (input){
    const dyljinaMetri = Number(input[0]);
    const shirinaMetri = Number(input[1]);
    const dyljinaSantimetri = dyljinaMetri * 100;
    const shirinaSantimetri = shirinaMetri * 100;
    const shirinaBezKoridor = shirinaSantimetri - 100;
    const broiMasiShirina = (Math.floor(shirinaBezKoridor / 70));
    const broiMasiDyljina = (Math.floor (dyljinaSantimetri / 120));
    
console.log  (broiMasiShirina * broiMasiDyljina -3); 
}

trainingLab (["15", "8.9"]);