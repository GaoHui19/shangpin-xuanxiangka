export default  (id)=>{
	let tab = document.querySelector(id)
    let ul = tab.children[0];
    let main = Array.from(tab.children[1].children)

   let li = Array.from(ul.children);
 
   li.forEach((item,index)=>{   
      item.onclick=function(){    
          li.forEach(item=>{item.className=""})
          main.forEach(item=>{item.className=""})

          this.className='active'
          main[index].className='active'
      }

   })


}