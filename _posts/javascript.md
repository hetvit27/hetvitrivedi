---
toc: true
layout: post
title: Javascript 
description: 
image: 
permalink: 
---

# Javascript Practice
- Testing input of javascript and converting to table / JSON

<br>

<input id="termvalue1" type="text" placeholder="Enter your student ID">
<input id="termvalue2" type="text" placeholder="Enter your name">
<input id="termvalue3" type="text" placeholder="Enter your CS Period">
<button id="enterterm" type="submit" onclick="enterterm()">Enter Value</button>

<table id="mainTable">
    <tr>
        <th> ID </th>
        <th> Student ID </th>
        <th> Name </th>
        <th> CS Period </th>
    </tr>


</table>

<br>

### Raw JSON Output

<div id="rawJSON"></div>


<script>

    // Get each box for the dictionary
    var iBox = document.getElementById("termvalue1");
    var jBox = document.getElementById("termvalue2");
    var kBox = document.getElementById("termvalue3");
    var mainTable = document.getElementById("mainTable");
    var rawTable = document.getElementById("rawJSON");

    // Add enter key event listeners
    iBox.addEventListener('keyup', function(event) {

        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("enterterm").click();
        }
    });
    jBox.addEventListener('keyup', function(event) {

        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("enterterm").click();
        }
    });
    kBox.addEventListener('keyup', function(event) {

        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("enterterm").click();
        }
    });


    var counter = 0
    
    var iBody = []

    var list = "";

    function enterterm() {
            // Set values the first time an input happens
            var tempBody = {student id: counter, name: iBox.value, CS period: jBox.value};
            counter++;
            iBody.push(tempBody);
            appendTable(tempBody);
            jsonval = JSON.stringify(iBody);
            rawTable.innerHTML = jsonval;
        }

    function appendTable(row) {
        var trdiv = document.createElement("tr");
        var td1 = document.createElement("td"); td1.innerHTML = row["Student ID"]; trdiv.appendChild(td1);
        var td2 = document.createElement("td"); td2.innerHTML = row["Name"]; trdiv.appendChild(td2);
        var td3 = document.createElement("td"); td3.innerHTML = row["CS Period"]; trdiv.appendChild(td3);

        mainTable.appendChild(trdiv);
    }

</script>
