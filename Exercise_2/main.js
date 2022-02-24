const user =['Diana', 24, 'web dev'];

const embedElements = ()=>{
    user.forEach(element => {
        document.getElementById('result').innerHTML +=
        `<div>${element}</div>`;
    })
};
