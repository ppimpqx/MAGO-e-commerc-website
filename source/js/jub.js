const seach = () => {
    const seachbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list2")
    const product2 = document.querySelectorAll(".product2")
    const pname = storeitems.getElementsByTagName("h2")

    for(var i=0; i < pname.length; i++){
        let match = product2[i].getElementsByTagName('h2')[0];

        if(match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(seachbox) > -1) {
                product2[i].style.display = "";
            } else {
                product2[i].style.display = "none";
            }
        }
    }
}