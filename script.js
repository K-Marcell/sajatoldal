var dataloaded = false;
async function getCSData() {
    let obj;
    const result = await fetch('csharpdata.json');
    obj = await result.json();
    console.log(obj);
    return obj.projects;
}
async function getPYData() {
    let obj;
    const result = await fetch('pydata.json');
    obj = await result.json();
    console.log(obj);
    return obj.projects;
}
async function getSQLData() {
    let obj;
    const result = await fetch('sqldata.json');
    obj = await result.json();
    console.log(obj);
    return obj.projects;
}
async function getWEBData() {
    let obj;
    const result = await fetch('webdata.json');
    obj = await result.json();
    console.log(obj);
    return obj.projects;
}

async function updateCard(cardNum, title, description, link)
{
    document.getElementById(`card${cardNum}`).children.item(0).textContent = title;
    document.getElementById(`card${cardNum}`).children.item(1).textContent = description;
    document.getElementById(`card${cardNum}`).children.item(2).textContent = link;
}

async function update(type) {
    if (type == 'CS') {
        dataloaded = false;
        getCSData().then(async (result) => {
            await updateCard(0,result[datanumLoaded+1].title, result[datanumLoaded+1].description, result[datanumLoaded+1].link);
            await updateCard(0,result[datanumLoaded+2].title, result[datanumLoaded+2].description, result[datanumLoaded+2].link);
            await updateCard(0,result[datanumLoaded+3].title, result[datanumLoaded+3].description, result[datanumLoaded+3].link);
            await updateCard(0,result[datanumLoaded+4].title, result[datanumLoaded+4].description, result[datanumLoaded+4].link);
            await updateCard(0,result[datanumLoaded+5].title, result[datanumLoaded+5].description, result[datanumLoaded+5].link);
            console.log(result);
            dataloaded = true;
            datanumLoaded = result.length;
            if (datanumLoaded > 5){
                datanumLoaded = 5;
                document.getElementById(`nextP`).style.display = "block";
            }
            else {
                document.getElementById(`nextP`).style.display = "none";
            }
        });
    }
    if (type == 'PY') {
        dataloaded = false;
        getPYData().then(async (result) => {
            for (var k = 0; k < result.length; k++) {
                document.getElementById(`card${k + 1}`).children.item(0).textContent = result[k].title;
                document.getElementById(`card${k + 1}`).children.item(1).textContent = result[k].description;
                document.getElementById(`card${k + 1}`).children.item(2).href = result[k].link;
            }
            console.log(result);
            dataloaded = true;
            datanumLoaded = result.length;
        });
    }
    if (type == 'WEB') {
        dataloaded = false;
        datanumLoaded = 0;
        getWEBData().then(async (result) => {
            for (var k = 0; k < result.length; k++) {
                document.getElementById(`card${k + 1}`).children.item(0).textContent = result[k].title;
                document.getElementById(`card${k + 1}`).children.item(1).textContent = result[k].description;
                document.getElementById(`card${k + 1}`).children.item(2).href = result[k].link;
            }
            console.log(result);
            dataloaded = true;
            datanumLoaded = result.length;
        });
    }
    if (type == 'SQL') {
        dataloaded = false;
        datanumLoaded = 0;
        getSQLData().then(async (result) => {
            for (var k = 0; k < result.length; k++) {
                document.getElementById(`card${k + 1}`).children.item(0).textContent = result[k].title;
                document.getElementById(`card${k + 1}`).children.item(1).textContent = result[k].description;
                document.getElementById(`card${k + 1}`).children.item(2).href = result[k].link;
            }
            console.log(result);
            dataloaded = true;
            datanumLoaded = result.length;
        });
    }
}

function checkVisibility() {
    if (dataloaded) {
        for (var k = 1; k < datanumLoaded + 1; k++) {
            document.getElementById(`card${k}`).style.display = "block";
        }
    }
    else {
        for (var k = 1; k < 5; k++) {
            document.getElementById(`card${k}`).style.display = "none";
        }
    }
}

