window.onload = function(){

    let counter = 0;
    var c1_l = [];
    var c2_l = [];
    var c3_l = [];

    for (let i = 0; i < log.length; i++) {
        //log[i].SOMETHINGSOMETHIN
        //if (log[i].status === '0') counter++;
        counter++;
        //console.log(log[i]);
        c1_l.push(log[i].Date);
        c2_l.push(log[i].Note);
        c3_l.push(log[i].Footage);
    } 

    //console.log(c1_l, c2_l, c3_l);
    var table = document.getElementById("table");

    //reversing the array so it comes out in a right timeline
    c1_l.reverse();
    c2_l.reverse();
    c3_l.reverse();

    for(let x = 0; x < counter; x++){
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        
        //image
        var ftg = document.createElement("img");
        ftg.className = "ftgclass";
        ftg.src = c3_l[x];
        //x < 10 ? ftg.id = 'modalimg0'+[x] : ftg.id = 'modalimg'+[x]; //adding 0 at the front if number is less than 10
        ftg.id = 'modalimg';
        ftg.setAttribute('onclick', "toggleModal('"+c3_l[x]+"')")
        ftg.setAttribute("loading", "lazy");
        cell3.appendChild(ftg);
        //console.log(ftg.src);
        
        if (ftg.src.slice(-1) != 'g'){ //deletes the img if it's N/A
            ftg.remove();
            ftg = document.createElement("p");
            ftg.innerHTML = "N / A";
            ftg.id = 'pid->'+c1_l[x]; // added id just in case n/a needs to be removed
            cell3.appendChild(ftg);
            cell3.className = "ftgna";
        } 
        
        cell1.className = 'logCell';
        cell1.innerHTML = c1_l[x];
        cell2.className = 'logCell';
        cell2.innerHTML = c2_l[x];
        //cell3.appendChild(ftg);
        cell3.id = 'cell->'+c1_l[x];
    }

    //adding title to the table 
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.className = 'tableHeading';
    cell2.className = 'tableHeading';
    cell3.className = 'tableHeading';
    
    cell1.innerHTML = "Date";
    cell2.innerHTML = "Note";
    cell3.innerHTML = "Footage";

    //EDIT SECTION ///////////////////////////////////////////////////

    document.getElementById('pid->2022/9/9').remove();
    var D20220909V1 = document.createElement('img');
    D20220909V1.className = 'ftgclass';
    D20220909V1.src = 'img/logimg/audftg1.jpeg';
    D20220909V1.setAttribute('onclick', "toggleModal('"+D20220909V1.src+"')")
    D20220909V1.setAttribute("loading", "lazy");
    document.getElementById('cell->2022/9/9').appendChild(D20220909V1);

    var D20220909V2 = document.createElement('img');
    D20220909V2.className = 'ftgclass';
    D20220909V2.src = 'img/logimg/audftg2.jpeg';
    D20220909V2.setAttribute('onclick', "toggleModal('"+D20220909V2.src+"')")
    D20220909V2.setAttribute("loading", "lazy");
    document.getElementById('cell->2022/9/9').appendChild(D20220909V2);

    document.getElementById('pid->2022/9/26').remove();
    var D2022926 = document.createElement("audio");
    D2022926.setAttribute("src", "img/logimg/BUZZ VOICE RAW.mp3");
    D2022926.setAttribute("controls", "controls");
    document.getElementById('cell->2022/9/26').appendChild(D2022926);

    var D2022927 = document.createElement("audio");
    D2022927.setAttribute("src","img/logimg/ASTRONAUT 1.mp3");
    D2022927.setAttribute("controls", "controls");
    document.getElementById('cell->2022/9/27').appendChild(D2022927);

    var D20221004 = document.createElement('img');
    D20221004.className = 'ftgclass';
    D20221004.src = 'img/logimg/image30.png';
    D20221004.setAttribute('onclick', "toggleModal('"+D20221004.src+"')")
    D20221004.setAttribute("loading", "lazy");
    document.getElementById('cell->2022/10/4').appendChild(D20221004);

    var D20221216 = document.createElement('img');
    D20221216.className = 'ftgclass';
    D20221216.src= 'img/logimg/image47.png';
    D20221216.setAttribute('onclick', "toggleModal('"+D20221216.src+"')")
    D20221216.setAttribute("loading", "lazy");
    document.getElementById('cell->2022/12/16').appendChild(D20221216);

    /////////////////////////////////////////////////////////////////
};

function toggleModal(IMAGE){
    var modal = document.getElementById('modalID');
    // console.log(IMAGE); //prints image file directory; comment out if uneeded
    var modalm1 = document.createElement("img"); // creates <img>
    // this line checks if screen size is small (e.g. smartphone ) and adds style accordingly 
    screen.width < 760 ? modalm1.style = 'width:20% min-width: 20%; height: 20%; min-height: 20%; position: absolute; top: 50%; transform:translateY(-50%); left: 50%; transform:translateX(-50%);' : modalm1.style = 'width:80% min-width: 80%; height: 80%; min-height: 80%; display: block; align-items: center; margin: auto;'; 
    modalm1.id = 'modalm1';
    modalm1.src = IMAGE;
    modal.appendChild(modalm1);
    modal.style = 'display: block'; //show modal
};

function hideModal(){
    var modal = document.getElementById('modalID');
    modal.style = 'display: none';
    document.getElementById('modalm1').remove();
};