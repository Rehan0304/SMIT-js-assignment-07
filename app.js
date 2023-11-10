function alertBox() {
    alert(`hello world`);   
}
function buyProduct() {
    alert(`Thanks for purchasing from us!`)
}
   var index, table=document.getElementById("table");

     for (let i = 1; i < table.rows.length; i++) {
            table.rows[i].cells[4].onclick= function (){
                index=this.parentElement.rowIndex;
                table.deleteRow(index)
            }        
     }

