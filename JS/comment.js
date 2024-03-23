        let popup = document.getElementById("pop");
        const Text = document.getElementById("text");
        function openpopup(){
            if (Text.value==='') {
                alert("Plese fill out the required field!!!");  
            }else{
                alert("Thank you... Your details has been successfully submitted!!!");
                alert("We value your feedback");
            }
        }
        const btnList = document.querySelectorAll('.buttons input');
        btnList.forEach(btnEL =>{
            btnEL.addEventListener('click',() =>{
                document.querySelector('.special')?.classList.remove('special');
                btnEL.classList.add('special');
            });
        
    });
window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}