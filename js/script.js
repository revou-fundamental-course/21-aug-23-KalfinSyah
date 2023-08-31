const name = "User";
document.getElementById("sapaan").innerHTML= name;

const date = new Date();
document.getElementById("date").innerHTML=date;

document.getElementById("submitForm").addEventListener("click", send_message);


function send_message(){
    var show_nama=document.getElementById("nama").value;
    var show_tanggal=document.getElementById("tanggal").value;
    var show_kelamin=document.getElementById("kelamin").value;
    var show_pesan=document.getElementById("pesan").value;
    document.getElementById("sapaan").innerHTML=show_nama;
    document.getElementById("value_nama").innerHTML=show_nama;
    document.getElementById("value_tanggal").innerHTML=show_tanggal;
    document.getElementById("value_kelamin").innerHTML=show_kelamin;
    document.getElementById("value_pesan").innerHTML=show_pesan;
}