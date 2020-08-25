
// console.log(document.getElementById('vielas-poga'));pārbauda vai strādā konsole
// izveido mainīgo 
const vielasPoga=document.getElementById('vielas-poga')
// jaizveido klausitājs, ka tiek spiests uz tās pogas
vielasPoga.addEventListener('click',function(){
    // alert norāda ka uz pogas nospiests, izvada ziņojumu, bet nekas tālāk vēl nenotiek
    // alert("piespiest uz vielas pogas")
});
// alternativa 
/*const vielasPoga = document.getElementById('vielas-poga');
vielasPoga.addEventListener('click', function (){
    alert("Piespiest uz vielas pogas");
});
function klikskis() {
    alert("Pispiests uz vielas pogas");
}
vielasPoga.addEventListener('click', klikskis);*/