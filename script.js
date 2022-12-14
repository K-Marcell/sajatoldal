var dataloaded = false;
var datanumLoaded = 0;
async function getData(type) {
    let obj;
    const result = await fetch('data.json');
    obj = await result.json();
    switch (type) {
        case 'CS':
            return obj.CSprojects;
        case 'PY':
            return obj.PYprojects;
        case 'SQL':
            return obj.SQLprojects;
        case 'HTML':
            return obj.HTMLprojects;
    }
}
const removeChildren = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};
async function update(type) {
    document.getElementById('chosenTask').style.display = 'none';
    document.getElementById('tasksCont').style.display = 'block';
    getData(type).then(async (result) => {
        datanumLoaded = result.length;
        if (datanumLoaded > 0) {
            if (document.getElementById('allCards2') != undefined) {
                document.getElementById('onlyOnce').style.display = 'none'
                document.getElementById('mainC').classList.add('mainC');
                document.getElementById('allCards1').classList.remove('col-5');
                document.getElementById('allCards1').classList.add('col-2');
                var toCopy = document.getElementById('allCards2').children;
                console.log(toCopy);

                document.getElementById('allCards1').append(toCopy[1]);
                document.getElementById('allCards1').append(toCopy[0]);
                document.getElementById('allCards2').remove();
                document.getElementById('tempCol').remove();
            }
        }
        const selectComp = document.getElementById('selectTask');
        removeChildren(selectComp);
        document.getElementById('cardType').innerHTML = type;
        for (var k = 0; k < result.length; k++) {
            let newOption = new Option(`${result[k]['title']}`, k);
            selectComp.add(newOption, undefined);
        }
    });
}

async function displayTask(element) {
    document.getElementById('chosenTask').style.display = 'block';
    let index = element.selectedIndex;
    getData(document.getElementById('cardType').innerHTML).then(async (result) => {
        document.getElementById('taskTitle').innerHTML = result[index]['title'];
        document.getElementById('taskDescription').innerHTML = result[index]['description'];
        document.getElementById('taskButton').href = result[index]['link'];
        document.getElementById('taskData').innerHTML = result[index]['data'];
    });
}

async function openTaskSRC() {
    let index = document.getElementById('selectTask').selectedIndex;
    getData(document.getElementById('cardType').innerHTML).then(async (result) => {
        window.open(result[index]['link'], '_blank');
    });
}

async function resetPage() {
    document.location.reload();
}