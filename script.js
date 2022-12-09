var dataloaded = false;
var datanumLoaded = 0;
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

async function update(type) {
    if (type == 'CS') {
        dataloaded = false;
        datanumLoaded = 0;
        getCSData().then(async (result) => {
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
    if (type == 'PY') {
        dataloaded = false;
        datanumLoaded = 0;
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

