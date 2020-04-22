
var statusBubato=1;
function show(s){
    Id("infos").style.display='block';
    var text1,text,text2;
    if(s<5){
        Id('infos').style.top='50px';
    }else{
        s+=statusBubato-1;
        Id('infos').style.top='500px';
    }
        switch(s){
            case 0:{
                 text1='Chạy trốn Tử Thần( Nội tại )';
                 text='Khi máu Boss càng thấp tốc độ đi chuyển càng cao, tăng 0.13 Speed cho mỗi 15 máu đã mất. Tối đa: 7.66';
                 text2='Đòn đánh của Boss là Cận chiến, gây sát thương liên tục từ 9.8 - 18.6 mỗi giây sát thương khi Xoay Kiếm.';
                 break;
            }            
            case 1:{
                 text1='Đánh Úp';
                 text='Khi khoảng cách nằm trong khoảng 500, Boss dịch chuyển tới vị trí Bubato, gây 5 - 10 damage.';
                 text2='Hồi chiêu : 5s';
                 break;
            }
            case 2:{
                 text1='Tre Trận';
                 text='Boss gọi Cọc tre đâm lên rồi từ từ hạ xuống. Nếu Bubato đi vào cọc tre lập tức bị nhốt trong Lồng Cọc.';
                 text2='Hồi chiêu : 30s';
                 break;
            }
            case 3:{
                 text1='Bẫy Tiêu';
                 text='Boss đặt một Bẫy Tiêu. Nếu Bubato bị dính bẫy lập tức bị choáng 1s đồng thời gây sát thương từ 1.9 - 2.9. Boss hồi lại 3.1-5.4 máu';
                 text2='Hồi chiêu : 6s';
                 break;
            }
            case 4:{
                 text1='Cuồng sát';
                 text='Boss tăng sức mạnh của hắn lên cực bội trong 15s. Tăng thêm 5 damage, đồng thời tốc độ đạt 15. Nếu trong thời gian đó sử dụng Đánh Úp tốc độ giảm xuống còn 3.5. Ngoài ra tầm thi triển Đánh Úp được tăng thành 850 . ';
                 text2='Hồi chiêu : 30s';
                 break;
            } 
            case 5:{
                 text1='Mưa đạn (Tiêu hao: 11 Nộ)';
                 text='KÍCH HOẠT: Tăng tốc SpeedFight lên 20 lần và SpeedBullet lên 1.5 lần nhưng Damage bị giảm còn 1.1 trong 3s. NỘI TẠI: Khi không bay được hồi máu ';
                 text2='Hồi chiêu : 15s';
                 break;
            } 
            case 6:{
                 text1='Bật tốc (Tiêu hao: 20 Nộ)';
                 text='KÍCH HOẠT: Tăng tốc độ di chuyển gấp 3 lần trong 10s. Trong thời gian này, được đi xuyên vật thể và miễn nhiễm sát thương . NỘI TẠI: Mỗi đòn bắn trúng tăng SpeedFight và SpeedBullet tối đa 2.92 và 30';
                 text2='Hồi chiêu : 20s';
                 break;
            }  
            case 7:{
                 text1='Siêu Bom (Tiêu hao: 30 Nộ)';
                 text='KÍCH HOẠT: Gọi 1 Siêu Bom xuống vị trí chỉ định sau 2s gây 2.2 lần Sát thương . NỘI TẠI: Mỗi đòn bắn trúng tăng Damage 1.5 tối đa 30, nếu k bắn trong 4s hoặc bắn trượt về giá trị mặc định';
                 text2='Hồi chiêu : 30s';
                 break;
            }  
            case 8:{
                 text1='Triệu hồi Binh Lính (Tiêu hao: 6 Nộ)';
                 text='KÍCH HOẠT: Triệu hồi 1 binh lính sống trong 60s, có thể tấn công Boss gây 1 damage  . NỘI TẠI: Khi bị tấn công hồi Nộ. Mỗi binh lính chết hồi 3 máu cho Bubato';
                 text2='Hồi chiêu : 4s';
                 break;
            }   
            case 9:{
                 text1='Cỏ 3 màu (Tiêu hao 9 Nộ)';
                 text=' KÍCH HOẠT: Hồi 8 máu đồng thời làm lộ diện Bẫy Tiêu trong 2s. NỘI TẠI :Mỗi 10s bạn sẽ nhận ngẫu nhiên 1 trong 3 lá. LÁ XANH: Tiêu hao 5 nộ nhưng hồi 8 máu. LÁ ĐỎ Tiêu hao 5 máu nhưng tạo Giáp hút thêm 50% . LÁ VÀNG: Tăng 7 nộ nhưng Boss Tăng 6 máu';
                 text2='Hồi chiêu : 12s';
                 break;
            }                                                               
        }
        Id("nameskill").innerHTML=text1;
        Id("infoskill").innerHTML=text;
        Id("cooldown").innerHTML=text2;

    }
function hide(){
        Id("infos").style.display='none';
}
function Id(doc){
        return document.getElementById(doc);
}
var dl=true;
function checkScreen(){
    if(window.innerWidth<screen.width || window.innerHeight<screen.height){
        Id('container').style.display='none';
    }else{
        Id('container').style.display='block';
        if(dl){startGame();dl=false;Id('canvas').height=screen.height-90;Id('canvas').width=screen.width;} 
    }
}
function startGame(){
    var checkKey=true;
    var bullet_x=[],bullet_y=[],scale_x=[],scale_y=[],bulletAngle=[];speedBullet=7.6,timeFight=1000,checkFightTime=true,bulletName='image/buletviolet.png';
    var bubato_x=900,bubato_y=5,bubato_h=60,bubato_w=60,nameBubato='violet',damage_bubato=2.3,hp_bubato=300,armor_bubato=30,
    nameSkillBubato='image/skillviolet.png',check_skill=true,rage_bubato=0,useRage=11,speedMove=1;
    var ground_y=700;
    var mouse_x,mouse_y;
    var g=1,i;
    var checkJumb=true;
    var slideAnimation=1;
    var boss_x=200,boss_y=-40,boss_h=200,boss_w=200,bossMove_x=0.1,bossMove_y=0.1,speedBoss=5,damage_boss=0.21,nameBoss='image/image_boss/a1.png',
    hp_boss=500,armor_boss=55,changeSpeed=true;
    var background_x=0;
    var exploser_x=1,exploser_y=1,checkExplosion=false,nameExplosion='image/esplosion_violet/a1.png';
    var check_slice=false,nameSlice='image/slice/a1.png',rangeSlice=500;
    var statusKnife=2,rotateKnife=1;
    var nameFlash='image/flash/a1.png',checkFlash=false,x_flash=1,y_flash=1;
    var shape_x = [1,1,1,1,1],shape_y = [1,1,1,1,1],checkSkillShape=false;
    var timeSkill2=1;
    var nameKnife='image/knife.png',knife_w=200;
    var checkTrap=false;
    var trap_x=800,showTrap=false,nameTrap='image/trap.png';
    var limitTop=0;
    var bom_y=[],bom_x=[],checkBom=[];
    var rotateVar=1;
    var scaleFull=1;
    var checkBlack=true;
    var soilder_x=[],soilder_y=[], soilder_scale=[],aSoilder=[],soilder_v=[],checkSoilder=[],buletSoilder_x=[],buletSoilder_y=[],buletScale_x=[],
    buletScale_y=[],bulletSoilderAngle=[],timeSoilder=[];
    var sk5=0,nameSoundBulet='sound/buletviolet.mp3';
    startDrop();
    fighttime();
    runtimemain();
    var context = canvas.getContext('2d');
    setInterval(function(){
        trap_x=800;
        checkTrap=true;
        var f=7;
        var z=0;
        var trapSound = new Audio('sound/skillboss2.mp3');
        trapSound.play();
        var ultSound = new Audio('sound/laugh.mp3');
        ultSound.play();  
        var ulSound = new Audio('sound/ult.mp3');
        ulSound.play(); 
        document.getElementById("sound").volume=0;            
        cooldown2=setInterval(function(){
            z+=50;
            Id("skill2").style.opacity=z/30000;
            if(z>29000){
                document.getElementById("skill2").style.opacity=0.3;
                z=0;
                clearInterval(cooldown2);
            }
        },50);
            traper=setInterval(function(){
            if(trap_x>400){
                if(trap_x<(bubato_y+bubato_h)){
                   if(speedMove!=3){
                       limitTop=trap_x;
                   }else{limitTop=0;}
                   nameTrap='image/trapclose.png';
                }else{
                    limitTop=0;
                    nameTrap='image/trap.png';
                }                
                trap_x-=f;
            }else{
                f=-0.2;
                trap_x-=f;
            }
            if(trap_x>ground_y-30){
                limitTop=0;
            }
            if(trap_x>810){
                clearInterval(traper);
            }      
        },6);
    },30000);
    function increaseRage(rag){
        rage_bubato+=rag;
        if(rage_bubato<0){
              rage_bubato=0;
        }
        if(rage_bubato>100){
            rage_bubato=100;
        }
    }
    function Super(){
        if(rage_bubato==100){
            rage_bubato=0;
            var save=statusBubato;
            if(statusBubato==4){
                soilder_x.splice(0,timeSoilder.length);
                soilder_y.splice(0,timeSoilder.length);
                soilder_scale.splice(0,timeSoilder.length);
                aSoilder.splice(0,timeSoilder.length);
                soilder_v.splice(0,timeSoilder.length);
                checkSoilder.splice(0,timeSoilder.length);
                timeSoilder.splice(0,timeSoilder.length);  
            }
            if(statusBubato==5){clearInterval(re);}
            do {
                statusBubato=Math.floor(Math.random() * 5) + 1;
            }while(statusBubato==save);
            switch(statusBubato){
                case 1: {
                    damage_bubato=2.3;
                    speedBullet=7.3;
                    changeSpeedFight(1000);
                    nameBubato='violet';
                    useRage=11;
                    bubato_h=60;bubato_w=60;
                    armor_bubato=30;
                    speedMove=1;
                    bulletName='image/buletviolet.png';
                    timeFight=1000;
                    break;
                }
                case 2:{
                    speedBullet=7.6;
                    damage_bubato=1.6;
                    useRage=20;
                    changeSpeedFight(1000);
                    nameBubato='yelow';
                    bubato_h=60;bubato_w=70;
                    armor_bubato=20;
                    timeFight=1000;
                    break;
                }
                case 3:{
                    speedBullet=9;
                    damage_bubato=4;
                    useRage=30;
                    nameBubato='black';
                    armor_bubato=45;
                    timeFight=3000;
                    changeSpeedFight(3000);
                    break;
                }
                case 4:{
                    speedBullet=9;
                    damage_bubato=2.1;
                    useRage=6;
                    nameBubato='gray';
                    armor_bubato=50;
                    changeSpeedFight(1000);
                    timeFight=1000;
                    break;
                }  
                case 5:{
                    speedBullet=8;
                    damage_bubato=2.2;
                    useRage=9;
                    nameBubato='green';
                    armor_bubato=30;
                    changeSpeedFight(900);
                    skill5();
                    timeFight=1000;
                    break;
                }  

            }
            clearInterval(timefight0);
            fighttime();
            Id('skillv').src='image/skill'+nameBubato+'.png';
            nameSoundBulet='sound/bulet'+nameBubato+'.mp3';
        }    
    }
    function changeSpeedFight(num){
                    clearInterval(timefight0);
                    timeFight=num;                    
                    fighttime();
    }
    function skill2boss(){
        nameKnife='image/knifevip.png';
        checkSkillShape=true;
        speedBoss=25;
        changeSpeed=false;
        timeSkill2=0;
        knife_w=300;
        damage_boss=0.3;
        rangeSlice=850;
        var u=0;
        for(k=4;k>=0;k--){
                shape_x[k]=boss_x;
                shape_y[k]=boss_y;
            }
        cooldown4=setInterval(function(){
            u+=50;            
            Id("skill4").style.opacity=u/30000;
            if(u>29000){
                Id("skill4").style.opacity=1;
                u=0;
                clearInterval(cooldown4);
            }
        },50);    
        skillShape=setInterval(function(){
            var k;
            for(k=4;k>=1;k--){
                shape_x[k]=shape_x[k-1];
                shape_y[k]=shape_y[k-1];
            }
                shape_x[0]=boss_x+Math.random()*20-10;///////////////////////////////////////////////////////////////////////////
                shape_y[0]=boss_y+Math.random()*20-10;            
        },50);
        setTimeout(function(){
            clearInterval(skillShape);
            if(speedBoss>10){speedBoss=5;}
            timeSkill2=1;
            damage_boss=0.16;
            knife_w=200;
            changeSpeed=true;
            nameKnife='image/knife.png';
            checkSkillShape=false;
            rangeSlice=500;
            document.getElementById("sound").volume=1;
        },15000);

    }
    runtimeSkill2Boss=setInterval(function(){
        skill2boss();
    },30000);
    skill3boss = setInterval(function(){
        var e=0;
        function callcooldown(){
         cooldown3=setInterval(function(){
            e+=50;
            Id("skill3").style.opacity=e/6000;
            if(e>5900){
                Id("skill3").style.opacity=1;
                e=0;
                clearInterval(cooldown3);
            }
        },50);
        } 
        if(boss_x<screen.width-60 && boss_x>50 && boss_y>70 && boss_y<600 && bom_x.length<=3){
            bom_y.push(boss_y+20);
            bom_x.push(boss_x+50);
            callcooldown();
            checkBom.push(false);
            var ff=1;
            fff=setInterval(function(){
                nameBoss='image/bossbom.png';
                if(ff<200){
                    ff++;
                }else{
                    clearInterval(fff);
                }
            },5);          
        }    
    },6000);
    function NoJumb(y){
        checkKey=false;
        var bomSound = new Audio('sound/skillboss3.mp3');
        bomSound.play();
        setTimeout(function(){
            checkKey=true;
            bom_x.splice(y,1);
            bom_y.splice(y,1);
            checkBom.splice(y,1);
        },1000);
   
    }

    function declare(){
       var knife = new Image();
       var bubato = new Image();
       var ground = new Image();
       var curson = new Image();
       var boss = new Image();
       var background = new Image();
       var exploser = new Image();
       var flashBos= new Image();
       var bomImg = new Image();
       

       bomImg.src='image/bom.png';
       background.src="image/background.png";
       ground.src = "image/ground.png";
       boss.src =nameBoss;
       curson.src='image/target.png';
       knife.src=nameKnife;
       bubato.src = nameReal;
       flashBos.src=nameFlash;
       var canvas = Id("canvas"); 

       Id("hpboss").style.width=hp_boss/500*50+'em';
       Id("hpbubato").style.width=hp_bubato/300*50+'em';
       Id("valuehpboss").innerHTML=Math.round(hp_boss*10)/10;
       Id("valuehpbubato").innerHTML=Math.round(hp_bubato*10)/10;
       Id("nobubato").style.width=rage_bubato/100*30+'em';
       Id("no").innerHTML=Math.round(rage_bubato*10)/10;
       Id('name').innerHTML=nameBubato+' ';
       Id('damage').innerHTML='Damage: '+damage_bubato+' ';
       Id('armor').innerHTML='Armor: '+armor_bubato+'% ';
       Id('damageboss').innerHTML='Damage: '+damage_boss*100+' ';
       Id('armorboss').innerHTML='Armor: '+armor_boss+'% ';
       Id('speedboss').innerHTML='Speed: '+Math.abs(speedBoss)+' ';
       Id('speedbullet').innerHTML='Speed Bullet: '+Math.round(speedBullet*100)/100+' ';
       Id('timefight').innerHTML='Speed Fight: '+Math.round(1000/timeFight*100)/100+' ';
       
       
       context.drawImage(background,background_x,0,15312,768);
       boss_x+=bossMove_x*speedBoss;
       boss_y+=bossMove_y*speedBoss;
       if(statusKnife==2){
            context.drawImage(knife,boss_x-40,boss_y+40,knife_w,70); 
       }
       if(checkSkillShape){
           var g;
            var shapeImg = new Image();
            shapeImg.src='image/shape.png';
           for(g=4;g>=0;g--){

                context.drawImage(shapeImg,shape_x[g],shape_y[g],boss_w,boss_h);
           }
       }

       if(checkFlash){           
           context.drawImage(flashBos,x_flash,y_flash,350,350);
           context.drawImage(flashBos,boss_x-150,boss_y-80,500,450);
           checkFlash=false;
       }
       for(i=0;i<bom_y.length;i++){
          if(showTrap){drawImageAtAngle(bomImg,bom_x[i],bom_y[i],385,383,rotateVar);}
           if(collisionObject(bubato_x,bubato_y,bubato_w,bubato_h,bom_x[i]-80,bom_y[i]-80,50,50)){
                   if(!checkBom[i]){
                    NoJumb(i);
                   }  
                   damageBubato(damage_boss*0.1);   
                   damageBoss(-damage_boss);         
                   drawImageAtAngle(bomImg,bom_x[i],bom_y[i],385,383,rotateVar);
                   checkBom[i]=true;
                   bubato_x=bom_x[i]-55;
                   bubato_y=bom_y[i]-55;
           }
       }
       function flipImage(v,x,y, width, height,scal){
            context.save();
            context.scale(scal,1);
            context.drawImage(v,x*scal,y,width*scal,height);
            context.restore();
       }
       function drawImageAtAngle(image,X,Y,width,height,degrees){
            var radians=degrees*Math.PI/180;
            var halfWidth=width/2;
            var halfHeight=height/2;
            context.beginPath();
            context.save();
            context.translate(X,Y);
            context.rotate(radians);
            context.drawImage(image,-halfWidth,-halfHeight,width,height);
            context.restore();
      }
       rotateVar+=34;
       context.drawImage(boss,boss_x,boss_y,boss_w,boss_h);
       flipImage(bubato,bubato_x,bubato_y,bubato_w,bubato_h,scaleFull);
       //context.drawImage(bubato,bubato_x,bubato_y,bubato_w,bubato_h);
       for(i=0;i<soilder_y.length;i++){
            var soilder = new Image();
            var q=1;
            if(timeSoilder[i]>0){
                timeSoilder[i]-=20;
            }else{
                soilder_x.splice(i,1);
                soilder_y.splice(i,1);
                soilder_scale.splice(i,1);
                aSoilder.splice(i,1);
                soilder_v.splice(i,1);
                checkSoilder.splice(i,1);
                timeSoilder.splice(i,1);
                damageBubato(-6);
            }
            if(aSoilder[i]<1000){soilder.src='image/soilderfix.png';q=0;}else{soilder.src='image/soilder.png';q=1;}   
            if(aSoilder[i]<100){
                    var soilderSound = new Audio('sound/soilder.mp3');
                    soilderSound.play();
            } 
            if (timeSoilder[i]<2000){
                soilder.src='image/soilderdeath.png';
                q=0;
            }    
            soilder_x[i]+=-soilder_v[i]*soilder_scale[i]*q;
            if(aSoilder[i]<20){
                buletSoilder_x.push(soilder_x[i]+25);
                buletSoilder_y.push(soilder_y[i]+25); 
                var angle=(boss_x-soilder_x[i])/(boss_y-soilder_y[i]);
                if((soilder_x[i]<boss_x) && (soilder_y[i]<boss_y)){
                    var scale=(boss_x-soilder_x[i])/(boss_y-soilder_y[i]);
                    if(scale<1){
                    buletScale_x.push(scale);
                    buletScale_y.push(1);
                    bulletSoilderAngle.push(90-Math.atan(angle)*180/Math.PI);
                }else{
                    buletScale_x.push(1);
                    buletScale_y.push(1/scale);
                    bulletSoilderAngle.push(Math.atan(1/angle)*180/Math.PI);
                }  
            }
            if((soilder_x[i]>boss_x) && (soilder_y[i]>boss_y)){
                var scale=(boss_x-soilder_x[i])/(boss_y-soilder_y[i]);
                if(scale<1){
                buletScale_x.push(-scale);
                buletScale_y.push(-1);
                bulletSoilderAngle.push(180+Math.atan(1/angle)*180/Math.PI);
                }else{
                    buletScale_x.push(-1);
                    buletScale_y.push(-1/scale);
                    bulletSoilderAngle.push(270-Math.atan(angle)*180/Math.PI);
                }  
            }
            if((soilder_x[i]<boss_x) && (soilder_y[i]>boss_y)){
                var scale=(boss_x-soilder_x[i])/(boss_y-soilder_y[i]);
                if(scale>-1){
                buletScale_x.push(-scale);
                buletScale_y.push(-1);
                bulletSoilderAngle.push(270-Math.atan(angle)*180/Math.PI);
                }else{
                   buletScale_x.push(1);
                   buletScale_y.push(1/scale);
                   bulletSoilderAngle.push(270-Math.atan(angle)*180/Math.PI);
                }  
            }
            if((soilder_x[i]>boss_x) && (soilder_y[i]<boss_y)){
                var scale=(boss_x-soilder_x[i])/(boss_y-soilder_y[i]);
                if(scale>-1){
                     buletScale_x.push(scale);
                     buletScale_y.push(1);
                     bulletSoilderAngle.push(90-Math.atan(angle)*180/Math.PI);
                }else{
                     buletScale_x.push(-1);
                     buletScale_y.push(-1/scale);
                     bulletSoilderAngle.push(180+Math.atan(1/angle)*180/Math.PI);
                     }  
                }
                aSoilder[i]=3000;////////////////////////////////////////////////////////////////
            }else{
                aSoilder[i]-=20;
            }
            if(Math.round(boss_x+boss_y*i)%(7)==0 && !checkSoilder[i]){
                if(timeSoilder[i]<1000 || aSoilder[i]<1000){}else{///////////////////////////////////////////////
                   soilder_y[i]-=30;
                   var graySound = new Audio('sound/skillgray.mp3');
                   graySound.play();
                   checkSoilder[i]=true;
            }
            }
            if(soilder_x[i]<boss_x+3 && soilder_x[i]>boss_x){soilder_x[i]-=50;}
            if(soilder_x[i]>boss_x-3 && soilder_x[i]<boss_x){soilder_x[i]+=50;}
            if(soilder_x[i]>boss_x){soilder_scale[i]=1;}else{soilder_scale[i]=-1}
            flipImage(soilder,soilder_x[i],soilder_y[i],50,50,soilder_scale[i]);
            if(checkSoilder[i]){
                soilder_y[i]+=2;
                if(soilder_y[i]>ground_y-40){checkSoilder[i]=false;}////////////////////////////////////////////////////
            }else{

            }
       }
       if(checkTrap){
           var trapImg=new Image();
           trapImg.src=nameTrap;
           context.drawImage(trapImg,0,trap_x,screen.width,350);
       }
      
       context.drawImage(ground,0,ground_y,screen.width,130);
       context.drawImage(curson,mouse_x+10,mouse_y+10,20,20);
       
       if(checkExplosion){
               exploser.src=nameExplosion;
               if(statusBubato!=3){
                   context.drawImage(exploser,exploser_x,exploser_y,120,120);
               }else{context.drawImage(exploser,exploser_x-damage_bubato*9,exploser_y-damage_bubato*9,120+damage_bubato*18,120+damage_bubato*18);}    
        }
       if(check_slice){
        var imageslice = new Image();
        imageslice.src=nameSlice;
        context.drawImage(imageslice,bubato_x,bubato_y,bubato_w,bubato_h);
       }
       
       if(collisionObject(bubato_x,bubato_y,bubato_w,bubato_h,boss_x,boss_y,boss_w,boss_h)){
             check_slice=true;
             statusKnife=1;
             if(statusBubato==4){increaseRage(0.02);}
             damageBubato(damage_boss);
       }else{
             statusKnife=2;
             check_slice=false;
       } 
       for(i=0;i<buletSoilder_x.length;i++){
             var buletsoilder = new Image();
             buletsoilder.src='image/buletsoilder.png';
             buletSoilder_x[i]+=buletScale_x[i]*5;/////////////////////////////////////////////////////////////
             buletSoilder_y[i]+=buletScale_y[i]*5;
             if(collisionObject(buletSoilder_x[i],buletSoilder_y[i],50,5,boss_x,boss_y,boss_w,boss_h)){
                var blSound = new Audio('sound/damageSoilder.mp3');
                blSound.play();               
                 buletSoilder_x.splice(i,1);
                 buletSoilder_y.splice(i,1);
                 buletScale_x.splice(i,1);
                 buletScale_y.splice(i,1);
                 bulletSoilderAngle.splice(i,1);
                 damageBoss(1.1);
             }
             drawImageAtAngle(buletsoilder,buletSoilder_x[i],buletSoilder_y[i],50,5,bulletSoilderAngle[i]);
       }
       for(i=0;i<scale_x.length;i++){
          var bullet = new Image();
          bullet.src=bulletName;
          
          bullet_x[i]+=scale_x[i]*speedBullet;
          bullet_y[i]+=scale_y[i]*speedBullet;
          if(statusBubato==3){
                drawImageAtAngle(bullet,bullet_x[i],bullet_y[i],60+damage_bubato*6,20+damage_bubato*2,bulletAngle[i]);
          }else{drawImageAtAngle(bullet,bullet_x[i],bullet_y[i],60,20,bulletAngle[i]);}
 
          if(collisionObject(bullet_x[i],bullet_y[i],30,30,boss_x,boss_y,boss_w,boss_h)){
               checkExplosion=true;
               var buletSound=new Audio(nameSoundBulet);
               buletSound.play();
               if(statusBubato==2){
                    if(speedBullet<=30){speedBullet+=0.07;}                  
                    if(timeFight>=250){timeFight-=15;clearInterval(timefight0);fighttime();} 
                    increaseRage(2.5);                    
                }    
                if(statusBubato==1){
                    increaseRage(4);
                }
                if(statusBubato==3){
                    increaseRage(9);
                } //////////////////////////////////////////////////////////////////////
                if(statusBubato==4){
                    increaseRage(3);
                } 
                if(statusBubato==5){
                    increaseRage(3.6);
                }                              
               exploser_x=bullet_x[i]-60;
               exploser_y=bullet_y[i]-60;
               damageBoss(damage_bubato);
               if(statusBubato==3){
                   if(statusBubato==3){  
                       damage_bubato+=1.5;
                   }    
                   checkBlack=true;
                   aw=0;
                   createExplosion1();
               }
               else {createExplosion();}
               Id("hpboss").style.background='white';
               deleteBullet(i);
          }
          if(bullet_x[i]<-40 || bullet_x[i]>screen.width+30 || bullet_y[i]<-40 || bullet_y[i]>screen.height+30){
               deleteBullet(i);
               if(statusBubato==3){damage_bubato=4;aw=0;}
          }

          function deleteBullet(t){
               bullet_x.splice(t,1);
               bullet_y.splice(t,1);
               scale_x.splice(t,1);
               scale_y.splice(t,1);
               bulletAngle.splice(t,1);
          }
       }
       if(statusKnife==1){
              var translateX= boss_x+30;
              var translateY= boss_y+40+35;
              context.beginPath();
              context.save();
              context.translate(translateX,translateY);
              context.rotate(rotateKnife*Math.PI/180);
              rotateKnife+=43;
              if(rotateKnife>500){
                    var damageSound = new Audio('sound/sword.mp3');
                    damageSound.play();
                    rotateKnife=0;
              }
              context.translate(-translateX,-translateY);
              context.drawImage(knife,boss_x,boss_y+40,knife_w,70);
              context.restore();
              checkFlash=true;
       }
       if(statusBubato==5){
               var ims = new Image();
               ims.src='image/skill5'+sk5+'.png';
               context.drawImage(ims,bubato_x-30,bubato_y-30,bubato_w+60,bubato_h+60);
        }       
       if(changeSpeed){
          speedBoss=Math.round((3.5+(5-hp_boss/100)/1.2)*100)/100;
       }
       canvas.addEventListener("mousedown", click);
       canvas.addEventListener("mousemove", target);
    }

    function skill1boss(){
        var w=1;
        var flashSound = new Audio("sound/skillboss1.mp3");
        flashSound.play();
        skill1=setInterval(function(){
            nameFlash='image/flash/a'+w+'.png';
            if(w==7){
                nameFlash="";
                clearInterval(skill1);
                w=1;
                speedBoss=5;
            }else{w++;}
        },60);
    }
    flashHP=setInterval(function(){
         Id("hpboss").style.background='red';
    },200);
    var run=1;
    slideSlice = setInterval(function(){
        nameSlice='image/slice/a'+run+'.png';
        if(run==2){
            run=1;
        }else{
            run++;
        }
    },60);
    skillBoss_1=setInterval(function(){
        var l=0;
        function callcooldown1(){
            cooldown1=setInterval(function(){
                l+=50;
                Id("skill1").style.opacity=l/5000;
                if(l>4900){
                    Id("skill1").style.opacity=1;
                    l=0;
                    clearInterval(cooldown1);
                }
            },50);
        }
        if(Math.pow(Math.pow(Math.abs(boss_x-bubato_x),2)+Math.pow(Math.abs(boss_y-bubato_y),2),1/2)<rangeSlice){
            x_flash=boss_x;
            callcooldown1();
            y_flash=boss_y;
            skill1boss();
            speedBoss=-5;
            damageBubato(damage_boss*30);
           boss_x=bubato_x-40;
           boss_y=bubato_y-40;

        }  
    },5000);
    var aw=0;
    setInterval(function(){
     if(statusBubato==3){
        aw+=200;
        if(aw==4000){
            if(checkBlack){      
            }else{
                  damage_bubato=4;
            }
            aw=0;
            checkBlack=false;
        }
     }
    },200);
    function damageBoss(damage){
        hp_boss-=damage*(100-armor_boss)/100;
        if(hp_boss>500){hp_boss=500;}
        if(hp_boss<=0){
            document.getElementById('end').style.display='inline';
            document.getElementById('end').innerHTML='Winner';
            clearInterval(runtime);
        }
    }
    function damageBubato(damage){
        if(statusBubato==2 && speedMove==3){damage=0;damageBoss(0.08);}
        if(damage>0){nameReal='image/'+nameBubato+'fix.png';}
        hp_bubato-=damage*(100-armor_bubato)/100; 
        if(hp_bubato>300){hp_bubato=300;}
        if(hp_bubato<=0){
            document.getElementById('end').style.display='inline';
            document.getElementById('end').innerHTML='Game Over';
            clearInterval(runtime);
        }        
    }
    function createExplosion1(){
         var next=1;
         var jk=1;
         Explosion1=setInterval(function(){
            nameExplosion='image/esplosion_'+nameBubato+'/a'+next+'.png';
            jk+=1;
            if(next==9){
                 checkExplosion=false;
                 next=1;
                 clearInterval(Explosion1);
            }else{
                 if(jk==6){jk=1;next+=1;}
            }
         },15); 
    } 
    function createExplosion(){
         var next=1;
         Explosion=setInterval(function(){
            nameExplosion='image/esplosion_'+nameBubato+'/a'+next+'.png';
            if(next==5){
                 checkExplosion=false;
                 next=1;
                 clearInterval(Explosion);
            }else{
                 next++;
            }
         },25);
    } 
    function target(mouseEvent){
        mouse_x=mouseEvent.offsetX;
        mouse_y=mouseEvent.offsetY;
    }
    setSpeedBackground=setInterval(function(){background_x--},30);

    function click(mouseEvent){
        mouse_x=mouseEvent.offsetX;
        mouse_y=mouseEvent.offsetY;

        if(checkFightTime&&(speedMove!=3)){ 
           bulletCreate();
           if(mouse_x<bubato_x){
                 scaleFull=1;
           }else{
                 scaleFull=-1;
           }
           /*if(statusBubato==2){
            var er=0;
              elec=setInterval(function(){
                er+=1;
                if(er==20){
                    clearInterval(elec);
                }
              },1); 
           }*/
           checkFightTime=false;
        }
    }
    function collisionObject(ob1_x,ob1_y,ob1_w,ob1_h,ob2_x,ob2_y,ob2_w,ob2_h){
        ob1_x+=5;
        ob1_y+=5;
        ob1_h-=10;
        ob1_w-=10;
        var ob1_n=ob1_w+ob1_x;
        var ob1_d=ob1_h+ob1_y;
        var ob2_n=ob2_w+ob2_x;
        var ob2_d=ob2_h+ob2_y;
        if((ob1_x>ob2_x && ob1_x<ob2_n && ob1_y>ob2_y && ob1_y<ob2_d)||(ob2_x>ob1_x && ob2_x<ob1_n && ob2_y>ob1_y && ob2_y<ob1_d)){
            return true;
        }else{
            return false;
        }
    }
    function changedirectionBoss(){
        bossMove_x=Math.random()-0.5;
        bossMove_y=Math.random()-0.5;
    }
    changeDirectionBoss=setInterval(function(){
        changedirectionBoss();
    },Math.random()*8000*timeSkill2+2000);
    function fighttime(){
        timefight0=setInterval(function(){
           checkFightTime=true;
        },timeFight);
    }   
    function runtimemain(){ 
      runtime=setInterval(function(){
          declare();
      },15);
    }
    function startDrop(){
        if(checkJumb){
           drop=setInterval(function(){
             bubato_y+=g;
             if(g<15){
                g*=1.03;
             }  
           },10);
        }
    }
    checkCollisionBottom=setInterval(function(){
        if(bubato_y>=ground_y-50){
            g=0;
            if(statusBubato==1){
                damageBubato(-0.005);
            }
        }
    },10);
    animation=setInterval(function(){
        nameReal='image/'+nameBubato+slideAnimation+'.png';
        nameBoss='image/image_boss/a'+slideAnimation+'.png';
        if(statusBubato>1){
            bulletName='image/bulet'+nameBubato+slideAnimation+'.png';
        }        
        if(slideAnimation==5){
            slideAnimation=1;
        }else{
            slideAnimation++;
        }

    },80);
    
    checkCollisionTurn = setInterval(function(){
        if(bubato_x<0){
            bubato_x+=20;
        }
        if(bubato_x>screen.width+30){
            bubato_x-=20;
        }
        if(bubato_y<limitTop){
            bubato_y=limitTop;
        }
        if(boss_x<-100){
            changedirectionBoss();
            boss_x=screen.width;
        }
        if(boss_y<-100){
            changedirectionBoss();
            boss_y=screen.height;
        }
        if(boss_x>screen.width+1){
            boss_x=-90;
            changedirectionBoss();
        }
        if(boss_y>screen.height+1){
            boss_y=-90;
            changedirectionBoss();
        }
    },10);
    function k_key(event) {
       if(checkKey){ 
         var kCode = event.keyCode || event.which;
         var jumbSound = new Audio("sound/jumb.mp3");
         switch (kCode) {
           case 13:
               Super();
               break;
           case 37:
               g=0;
               if(checkJumb){
                   scaleFull=1;
                   moveLeft();
                   jumbSound.play();
               }
               break;
           case 38:
               g=0;
               if(checkJumb){
                   jumbSound.play();
                   moveUp();
               }
               break;
           case 39:
               g=0;
               if(checkJumb){
                   jumbSound.play();
                   scaleFull=-1;
                   moveRight();
               }
               break;
           case 40:
               switch(statusBubato){
                    case 1:{
                        skill(15000,3000);
                        break;
                    }
                    case 2:{
                        skill(20000,10000);
                        break;
                    }
                    case 3:{
                        skill(4000,3000);
                        break;
                    }
                    case 4:{
                        skill(4000,3000);
                        break;
                    } 
                    case 5:{
                        skill(12000,0);
                    }                   
               }
               break;
           default:
           }
       }
    }
    function randomChange(){
        var sd = Math.floor(Math.random() * 3) + 1;
        var effect = new Audio('sound/green'+sd+'.mp3');
        effect.play();
            armor_bubato=20;
            switch(sd){
                case 1:{
                    sk5=1;
                    if(rage_bubato>0){
                        damageBubato(-8);
                        increaseRage(-4);
                    }
                    break;
                }
                case 2:{
                    sk5=2;
                    if(hp_bubato>1){
                       armor_bubato=70;
                       damageBubato(-8);
                    }
                    break;
                }
                case 3:{

                    increaseRage(7);
                    damageBoss(-6);
                    sk5=3;
                    break;
                }                                
            }
    }
    function skill5(){
        re=setInterval(function(){
             randomChange();
        },10000);
    }
    function skill(coDown,timeEffect){
      if(check_skill && rage_bubato>=useRage) { 
        check_skill=false;
        rage_bubato-=useRage;
        Id('skillv').style.opacity=0;
        var e=0;
        if(statusBubato==1){startViolet();}
        if(statusBubato==2){startYelow();}
        if(statusBubato==3){createBoom();}
        if(statusBubato==4){createSoilder();}
        if(statusBubato==5){
            randomChange();
            clearInterval(re);
            skill5();
            showTrap=true;
            sk5=4;
            damageBubato(-10);
            setTimeout(function(){
                showTrap=false;
                sk5=1;
            },2000);
        }
        s1=setInterval(function(){
            e+=100;
            Id('skillv').style.opacity=e/coDown;
            if(e==timeEffect){        
                if(statusBubato==1){endViolet();}
                if(statusBubato==2){endYelow();}
            }
            if(e>coDown-100){
                e=0;
                Id('skill1').style.opacity=1;
                check_skill=true;
                clearInterval(s1);
            }  
        },100);
      }  
    }
    var context=Id('canvas').getContext('2d');
    var boom=new Image();
    function createBoom(){

        boom.src='image/targetblack.png';
        var heightB=420;
        var widthB=420;
        var cX=mouse_x;
        var cY=mouse_y;
        var vX=cX;
        var vY=cY-210;
        tr=setInterval(function(){
            context.drawImage(boom,cX-heightB/2,cY-widthB/2,widthB,heightB);
            heightB-=7/5;
            widthB-=7/5;
            if(heightB<3){
                createE(vX,vY);
                if(collisionObject(vX-400,vY-400,800,800,boss_x,boss_y,boss_w,boss_h)){damageBoss(damage_bubato*2.2);}
                clearInterval(tr);
            }  
        },1);
    }
    function createSoilder(){
        soilder_y.push(bubato_y);
        soilder_x.push(bubato_x);
        soilder_scale.push(1);
        soilder_v.push(Math.random()*1.4+1);
        checkSoilder.push(true);
        aSoilder.push(3000);
        timeSoilder.push(60000);
    }
    function createE(x,y){
        var df=1;
        var ty=1;
        var blackSound = new Audio('sound/skillblack.mp3');
        blackSound.play(); 
        re=setInterval(function(){
            boom.src='image/esplosion_black/a'+df+'.png';
            context.drawImage(boom,x-400,y-400,800,800);
            if(ty==5){
                 ty=1;
                 df+=1;
            }else{ty+=1}     
            if(df==10){clearInterval(re);}
        },14);
    }
    function startViolet(){
        timeFight=50;
        damage_bubato=1.1;
        speedBullet*=1.5;
        bulletName='image/buletvioletfix.png';
        clearInterval(timefight0);
        fighttime();
        
    }
    function endViolet(){
        
        timeFight=1000;
        damage_bubato=2.3;
        speedBullet=7.6;
        bulletName='image/buletviolet.png';
        clearInterval(timefight0);
        fighttime();
    }
    function startYelow(){
        var yelowSound = new Audio('sound/skillyelow.mp3');
        yelowSound.play();
        speedMove*=3;
        nameBubato='yelowfight';
    }
    function endYelow(){
        speedMove/=3;
        nameBubato='yelow';
    }    
    document.onkeydown = function(event) {
       k_key(event);
    };

    function moveLeft(){
       var t=19;
       var l=7*speedMove;
       checkJumb=false;
       left=setInterval(function(){
            bubato_y-=t;
            bubato_x-=l;
            t*=0.69;
            l*=0.905;
            if(t<0.3/speedMove/speedMove){
                g=1;
                checkJumb=true;
                clearInterval(left);
            }
       },10);   
    }
    function moveRight(){
       var t=19;
       var l=7*speedMove;
       checkJumb=false;
       right=setInterval(function(){
            bubato_y-=t;
            bubato_x+=l;
            t*=0.69;
            l*=0.905;
            if(t<0.3/speedMove/speedMove){
                g=1;
                checkJumb=true;
                clearInterval(right);
            }
       },10);   
    }

    function moveUp(){
       var t=9*speedMove;
       checkJumb=false;
       up=setInterval(function(){
            bubato_y-=t;
            t*=0.89;
            if(t<0.3){
                g=1;
                checkJumb=true;
                clearInterval(up);
            }
       },5);   
    }

    function bulletCreate(){
        bullet_x.push(bubato_x+25);
        bullet_y.push(bubato_y+25); 
        var angle=(mouse_x-bubato_x)/(mouse_y-bubato_y);
        if((bubato_x<mouse_x) && (bubato_y<mouse_y)){
             var scale=(mouse_x-bubato_x)/(mouse_y-bubato_y);
             if(scale<1){
               scale_x.push(scale);
               scale_y.push(1);
               bulletAngle.push(90-Math.atan(angle)*180/Math.PI);
             }else{
                scale_x.push(1);
               scale_y.push(1/scale);
               bulletAngle.push(Math.atan(1/angle)*180/Math.PI);
             }  
        }
        if((bubato_x>mouse_x) && (bubato_y>mouse_y)){
             var scale=(mouse_x-bubato_x)/(mouse_y-bubato_y);
             if(scale<1){
               scale_x.push(-scale);
               scale_y.push(-1);
               bulletAngle.push(180+Math.atan(1/angle)*180/Math.PI);
             }else{
               scale_x.push(-1);
               scale_y.push(-1/scale);
               bulletAngle.push(270-Math.atan(angle)*180/Math.PI);
             }  
        }
        if((bubato_x<mouse_x) && (bubato_y>mouse_y)){
             var scale=(mouse_x-bubato_x)/(mouse_y-bubato_y);
             if(scale>-1){
               scale_x.push(-scale);
               scale_y.push(-1);
               bulletAngle.push(270-Math.atan(angle)*180/Math.PI);
             }else{
                scale_x.push(1);
               scale_y.push(1/scale);
               bulletAngle.push(270-Math.atan(angle)*180/Math.PI);
             }  
        }
        if((bubato_x>mouse_x) && (bubato_y<mouse_y)){
             var scale=(mouse_x-bubato_x)/(mouse_y-bubato_y);
             if(scale>-1){
               scale_x.push(scale);
               scale_y.push(1);
               bulletAngle.push(90-Math.atan(angle)*180/Math.PI);
             }else{
                scale_x.push(-1);
               scale_y.push(-1/scale);
               bulletAngle.push(180+Math.atan(1/angle)*180/Math.PI);
             }  
        }
        declare();
    }

}