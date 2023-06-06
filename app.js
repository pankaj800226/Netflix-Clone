const signup = document.querySelector('#signup');
signup.addEventListener('click',()=>{
    location.href = "sign.html"
});

const video = document.querySelector("#video");
video.addEventListener('click',()=>{
    location.href ="video.html"
});


const search = ()=>{
    const searchbox = document.getElementById('search-item').value.toUpperCase();
    const productList = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = document.getElementsByTagName("h2")

    for(var i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];
        if(match){
            let textValue = match.textContent || match.innerHTML;

            if(textValue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";

            }
        }

    }
}
