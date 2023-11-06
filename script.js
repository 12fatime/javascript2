let v_suret;
let litr;
const suret=function(mesafe,zaman){
    let v=mesafe/zaman;
    if (v>0 && v<=60){
        litr=mesafe /100*6;
        ortasuret=6;
    }else if(v>60 && v<=90){
        litr=mesafe/100*9;
        ortasuret=9;
    }else if(v>90 && v<120){
        litr=mesafe/100*8;
        ortasuret=8
    }else if( v>120 ){
        litr=mesafe/100*10;
        ortasuret=10
    } 
    v_suret=mesafe/zaman;
    return litr;
    
}