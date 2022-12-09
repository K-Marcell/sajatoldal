var dataloaded = false;
var datanumLoaded = 0;
async function getCSData() {
    let obj;
    const result = await fetch('csharpdata.json');
    obj = await result.json();
    console.log(obj);
    return obj.projects;
}

async function update(type) {
    if (type == 'CS') {
        getCSData().then(async (result) => {
            for (var k = 0; k < result.length; k++) {
                var title = document.getElementById(`card${k + 1}`).children.item(0).textContent;
                document.getElementById(`card${k + 1}`).children.item(0).textContent = result[k].title;
                document.getElementById(`card${k + 1}`).children.item(1).textContent = result[k].description;
                document.getElementById(`card${k + 1}`).children.item(2).href = result[k].link;
                console.log(title);
                //= result[0]
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

