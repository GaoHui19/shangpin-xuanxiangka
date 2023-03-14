function getData(url){
    return new Promise(function(resolve,reject){
        $.ajax({
            url,
            type:"GET",
            success(res){
                resolve(res);
                console.log(res)
            },
            error(err){
                reject(err);
            }
        })
    })
}

getData("1.json").then(function(res) {
// success
console.log(res)


$.each(res,function(index,obj){
    console.log(index)
    console.log(obj)               
        $("#list").append(`<li>
                            <img src="${obj.img}" alt="">
                            <p id="p1">${obj.title}</p>
                            <p id="p2" style="color:red;">${obj.price}</p>
                            <p id="p3">${obj.pj}</p>
                        </li>`)
    });

}, function(err) {
// failure
console.log(err)
});

export default{
    getData
}