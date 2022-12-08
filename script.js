async function getcsdata() {
    let obj;
    const result = await fetch('csharpdata.json');
    obj = await result.json();
    console.log(obj);
    return obj.projects;
}

async function update(type) {
    if (type == 'CS') {
        getcsdata().then(async (result) => {
            for (var k = 0; k < result.length; k++) {
                var title = document.getElementById(`card${k + 1}`).children.item(0).textContent;
                document.getElementById(`card${k + 1}`).children.item(0).textContent = result[k].title;
                document.getElementById(`card${k + 1}`).children.item(1).textContent = result[k].description;
                document.getElementById(`card${k + 1}`).children.item(2).href = result[k].link;
                console.log(title);
                //= result[0]
            }
            console.log(result);
        });
    }
}