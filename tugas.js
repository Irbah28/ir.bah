
// For the dropdown menu task
var citiesByProvince = {
    Aceh: ["Kabupaten Aceh Barat","Kabupaten Aceh Barat Daya","Kabupaten Aceh Besar","Kabupaten Aceh Jaya","Kabupaten Aceh Selatan","Kabupaten Aceh Singkil","Kabupaten Aceh Tamiang","Kabupaten Aceh Tenggara","Kabupaten Aceh Timur","Kabupaten Aceh Utara","Kabupaten Bener Meriah","Kabupaten Bireuen","Kabupaten Gayo Lues","Kabupaten Nagan Raya","Kabupaten Pidie","Kabupaten Pidie Jaya","Kabupaten Simeulue","Kota Banda Aceh","Kota Langsa","Kota Lhokseumawe","Kota Sabang","Kota Subulussalam"],
    SumatraUtara: ["Kabupaten Asahan","Kabupaten Batu Bara","Kabupaten Dairi","Kabupaten Deli Serdang","Kabupaten Humbang Hasundutan","Kabupaten Karo","Kabupaten Labuhanbatu","Kabupaten Labuhanbatu Selatan","Kabupaten Labuhanbatu Utara","Kabupaten Langkat","Kabupaten Mandailing Natal","Kabupaten Nias","Kabupaten Nias Barat","Kabupaten Nias Selatan","Kabupaten Nias Utara","Kabupaten Padang Lawas","Kabupaten Padang Lawas Utara","Kabupaten Pakpak Bharat","Kabupaten Samosir","Kabupaten Serdang Bedagai","Kabupaten Simalungun","Kabupaten Tapanuli Selatan","Kabupaten Tapanuli Tengah","Kabupaten Tapanuli Utara","Kabupaten Toba","Kota Binjai","Kota Gunungsitoli","Kota Medan","Kota Padangsidempuan","Kota Pematangsiantar","Kota Sibolga","Kota Tanjungbalai","Kota Tebing Tinggi"],
    SumatraBarat: ["Kabupaten Agam","Kabupaten Dharmasraya","Kabupaten Kepulauan Mentawai","Kabupaten Lima Puluh Kota","Kabupaten Padang Pariaman","Kabupaten Pasaman","Kabupaten Pasaman Barat","Kabupaten Pesisir Selatan","Kabupaten Sijunjung","Kabupaten Solok","Kabupaten Solok Selatan","Kabupaten Tanah Datar","Kota Bukittinggi","Kota Padang","Kota Padangpanjang","Kota Pariaman","Kota Payakumbuh","Kota Sawahlunto","Kota Solok"],
    SumatraSelatan: [""]
    Riau: ["Kabupaten Bengkalis","Kabupaten Indragiri Hilir","Kabupaten Indragiri Hulu","Kabupaten Kampar","Kabupaten Kepulauan Meranti","Kabupaten Kuantan Singingi","Kabupaten Pelalawan","Kabupaten Rokan Hilir","Kabupaten Rokan Hulu","Kabupaten Siak","Kota Dumai","Kota Pekanbaru"],
    KepulauanRiau: ["Kabupaten Bintan","Kabupaten Karimun","Kabupaten Kepulauan Anambas","Kabupaten Lingga","Kabupaten Natuna","Kota Batam","Kota Tanjungpinang"],
    
    
    
    
    
    }

function makeSubmenu(value) {
    if(value.length==0) document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
    var citiesOptions = "";
    for(cityId in citiesByProvince[value]) {
    citiesOptions+="<option>"+citiesByProvince[value][cityId]+"</option>";
    }
    document.getElementById("citySelect").innerHTML = citiesOptions;
    }
}

//For Password and Username Validation
function checkForm(form)
{
    if(form.username1.value == "") {
      alert("Error: Username cannot be blank!");
      form.username1.focus();
      return false;
    }
    re = /^\w+$/;
    if(!re.test(form.username1.value)) {
      alert("Error: Username must contain only letters, numbers and underscores!");
      form.username1.focus();
      return false;
    }

  if(form.password.value != "" && form.password.value === form.c_password.value) {
    if(form.password.value.length < 8) {
      alert("Error: Password must contain at least eight characters!");
      form.password.focus();
      return false;
    }
    re = /[0-9]/;
    if(!re.test(form.password.value)) {
      alert("Error: password must contain at least one number (0-9)!");
      form.password.focus();
      return false;
    }
    re = /[a-z]/;
    if(!re.test(form.password.value)) {
      alert("Error: password must contain at least one lowercase letter (a-z)!");
      form.password.focus();
      return false;
    }
    re = /[A-Z]/;
    if(!re.test(form.password.value)) {
      alert("Error: password must contain at least one uppercase letter (A-Z)!");
      form.password.focus();
      return false;
    }
  } else {
    alert("Error: Please check that you've entered and confirmed your password!");
    form.password.focus();
    return false;
  }
  return true;
}
function reset(){
  var x = document.getElementById("uname").value;
  var y = document.getElementById("pwd").value;
  var z = document.getElementById("c_pwd").value;
  z.innerHTML=" ";
  y.innerHTML=" ";
  x.innerHTML=" ";
}
