
// For the dropdown menu task
var citiesByProvince = {
    Aceh: ["Kabupaten Aceh Barat","Kabupaten Aceh Barat Daya","Kabupaten Aceh Besar","Kabupaten Aceh Jaya","Kabupaten Aceh Selatan","Kabupaten Aceh Singkil","Kabupaten Aceh Tamiang","Kabupaten Aceh Tenggara","Kabupaten Aceh Timur","Kabupaten Aceh Utara","Kabupaten Bener Meriah","Kabupaten Bireuen","Kabupaten Gayo Lues","Kabupaten Nagan Raya","Kabupaten Pidie","Kabupaten Pidie Jaya","Kabupaten Simeulue","Kota Banda Aceh","Kota Langsa","Kota Lhokseumawe","Kota Sabang","Kota Subulussalam"],
    SumatraUtara: ["Kabupaten Asahan","Kabupaten Batu Bara","Kabupaten Dairi","Kabupaten Deli Serdang","Kabupaten Humbang Hasundutan","Kabupaten Karo","Kabupaten Labuhanbatu","Kabupaten Labuhanbatu Selatan","Kabupaten Labuhanbatu Utara","Kabupaten Langkat","Kabupaten Mandailing Natal","Kabupaten Nias","Kabupaten Nias Barat","Kabupaten Nias Selatan","Kabupaten Nias Utara","Kabupaten Padang Lawas","Kabupaten Padang Lawas Utara","Kabupaten Pakpak Bharat","Kabupaten Samosir","Kabupaten Serdang Bedagai","Kabupaten Simalungun","Kabupaten Tapanuli Selatan","Kabupaten Tapanuli Tengah","Kabupaten Tapanuli Utara","Kabupaten Toba","Kota Binjai","Kota Gunungsitoli","Kota Medan","Kota Padangsidempuan","Kota Pematangsiantar","Kota Sibolga","Kota Tanjungbalai","Kota Tebing Tinggi"],
    SumatraBarat: ["Kabupaten Agam","Kabupaten Dharmasraya","Kabupaten Kepulauan Mentawai","Kabupaten Lima Puluh Kota","Kabupaten Padang Pariaman","Kabupaten Pasaman","Kabupaten Pasaman Barat","Kabupaten Pesisir Selatan","Kabupaten Sijunjung","Kabupaten Solok","Kabupaten Solok Selatan","Kabupaten Tanah Datar","Kota Bukittinggi","Kota Padang","Kota Padangpanjang","Kota Pariaman","Kota Payakumbuh","Kota Sawahlunto","Kota Solok"],
    SumatraSelatan: ["Kabupaten Banyuasin","Kabupaten Empat Lawang","Kabupaten Lahat","Kabupaten Muara Enim","Kabupaten Musi Banyuasin","Kabupaten Musi Rawas","Kabupaten Musi Rawas Utara","Kabupaten Ogan Ilir","Kabupaten Ogan Komering Ilir","Kabupaten Ogan Komering Ulu","Kabupaten Ogan Komering Ulu Selatan","Kabupaten Ogan Komering Ulu Timur","Kabupaten Penukal Abab Lematang Ilir","Kota Lubuklinggau","Kota Pagar Alam","Kota Palembang","Kota Prabumulih"],
    Riau: ["Kabupaten Bengkalis","Kabupaten Indragiri Hilir","Kabupaten Indragiri Hulu","Kabupaten Kampar","Kabupaten Kepulauan Meranti","Kabupaten Kuantan Singingi","Kabupaten Pelalawan","Kabupaten Rokan Hilir","Kabupaten Rokan Hulu","Kabupaten Siak","Kota Dumai","Kota Pekanbaru"],
    KepulauanRiau: ["Kabupaten Bintan","Kabupaten Karimun","Kabupaten Kepulauan Anambas","Kabupaten Lingga","Kabupaten Natuna","Kota Batam","Kota Tanjungpinang"],
    Jambi: ["Kabupaten Batanghari","Kabupaten Bungo","Kabupaten Kerinci","Kabupaten Merangin","Kabupaten Muaro Jambi","Kabupaten Sarolangun","Kabupaten Tanjung Jabung Barat","Kabupaten Tanjung Jabung Timur","Kabupaten Tebo","Kota Jambi","Kota Sungaipenuh"],
    Bengkulu: ["Kabupaten Bengkulu Selatan","Kabupaten Bengkulu Tengah","Kabupaten Bengkulu Utara","Kabupaten Kaur","Kabupaten Kepahiang","Kabupaten Lebong","Kabupaten Mukomuko","Kabupaten Rejang Lebong","Kabupaten Seluma","Kota Bengkulu"],
    KepulauanBangkaBelitung: ["Kabupaten Bangka","Kabupaten Bangka Barat","Kabupaten Bangka Selatan","Kabupaten Bangka Tengah","Kabupaten Belitung","Kabupaten Belitung Timur","Kota Pangkalpinang"],
    Lampung: ["Kabupaten Lampung Barat","Kabupaten Lampung Selatan","Kabupaten Lampung Tengah","Kabupaten Lampung Timur","Kabupaten Lampung Utara","Kabupaten Mesuji","Kabupaten Pesawaran","Kabupaten Pesisir Barat","Kabupaten Pringsewu","Kabupaten Tanggamus","Kabupaten Tulang Bawang","Kabupaten Tulang Bawang Barat","Kabupaten Way Kanan","Kota Bandar Lampung","Kota Metro"],
    Banten: ["Kabupaten Lebak","Kabupaten Pandeglang","Kabupaten Serang","Kabupaten Tangerang","Kota Cilegon","Kota Serang","Kota Tangerang","Kota Tangerang Selatan"],
    Jakarta: ["Kabupaten Administrasi Kepulauan Seribu","Kota Administrasi Jakarta Barat","Kota Administrasi Jakarta Pusat","Kota Administrasi Jakarta Selatan","Kota Administrasi Jakarta Timur","Kota Administrasi Jakarta Utara"],
    JawaBarat: ["Kabupaten Bandung","Kabupaten Bandung Barat","Kabupaten Bekasi","Kabupaten Bogor","Kabupaten Ciamis","Kabupaten Cianjur","Kabupaten Cirebon","Kabupaten Garut","Kabupaten Indramayu","Kabupaten Karawang","Kabupaten Kuningan","Kabupaten Majalengka","Kabupaten Pangandaran","Kabupaten Purwakarta","Kabupaten Subang","Kabupaten Sukabumi","Kabupaten Sumedang","Kabupaten Tasikmalaya"],
    JawaTengah: ["Kabupaten Banjarnegara","Kabupaten Banyumas","Kabupaten Batang","Kabupaten Blora","Kabupaten Boyolali","Kabupaten Brebes","Kabupaten Cilacap","Kabupaten Demak","Kabupaten Grobogan","Kabupaten Jepara","Kabupaten Karanganyar","Kabupaten Kebumen","Kabupaten Kendal","Kabupaten Klaten","Kabupaten Kudus","Kabupaten Magelang","Kabupaten Pati","Kabupaten Pekalongan","Kabupaten Pemalang","Kabupaten Purbalingga","Kabupaten Purworejo","Kabupaten Rembang","Kabupaten Semarang","Kabupaten Sragen","Kabupaten Sukoharjo","Kabupaten Tegal","Kabupaten Temanggung","Kabupaten Wonogiri","Kabupaten Wonosobo","Kota Magelang","Kota Pekalongan","Kota Salatiga","Kota Semarang","Kota Surakarta","Kota Tegal"],  
    JawaTimur: ["Kabupaten Bangkalan","Kabupaten Banyuwangi","Kabupaten Blitar","Kabupaten Bojonegoro","Kabupaten Bondowoso","Kabupaten Gresik","Kabupaten Jember","Kabupaten Jombang","Kabupaten Kediri","Kabupaten Lamongan","Kabupaten Lumajang","Kabupaten Madiun","Kabupaten Magetan","Kabupaten Malang","Kabupaten Mojokerto","Kabupaten Nganjuk","Kabupaten Ngawi","Kabupaten Pacitan","Kabupaten Pamekasan","Kabupaten Pasuruan","Kabupaten Ponorogo","Kabupaten Probolinggo","Kabupaten Sampang","Kabupaten Sidoarjo","Kabupaten Situbondo","Kabupaten Sumenep","Kabupaten Trenggalek","Kabupaten Tuban","Kabupaten Tulungagung","Kota Batu","Kota Blitar","Kota Kediri","Kota Madiun","Kota Malang","Kota Mojokerto","Kota Pasuruan","Kota Probolinggo","Kota Surabaya"],
    Yogyakarta: ["Kabupaten Bantul","Kabupaten Gunungkidul","Kabupaten Kulon Progo","Kabupaten Sleman","Kota Yogyakarta"],
    Bali: ["Kabupaten Badung","Kabupaten Bangli","Kabupaten Buleleng","Kabupaten Gianyar","Kabupaten Jembrana","Kabupaten Karangasem","Kabupaten Klungkung","Kabupaten Tabanan","Kota Denpasar"],
    NusaTenggaraBarat: ["Kabupaten Bima","Kabupaten Dompu","Kabupaten Lombok Barat","Kabupaten Lombok Tengah","Kabupaten Lombok Timur","Kabupaten Lombok Utara","Kabupaten Sumbawa","Kabupaten Sumbawa Barat","Kota Bima","Kota Mataram"],
    NusaTenggaraTimur: ["Kabupaten Alor","Kabupaten Belu","Kabupaten Ende","Kabupaten Flores Timur","Kabupaten Kupang","Kabupaten Lembata","Kabupaten Malaka","Kabupaten Manggarai","Kabupaten Manggarai Barat","Kabupaten Manggarai Timur","Kabupaten Nagekeo","Kabupaten Ngada","Kabupaten Rote Ndao","Kabupaten Sabu Raijua","Kabupaten Sikka","Kabupaten Sumba Barat","	Kabupaten Sumba Barat Daya","Kabupaten Sumba Tengah","Kabupaten Sumba Timur","Kabupaten Timor Tengah Selatan","Kabupaten Timor Tengah Utara","Kota Kupang"],
    KalimantanBarat: ["Kabupaten Bengkayang","Kabupaten Kapuas Hulu","Kabupaten Kayong Utara","Kabupaten Ketapang","Kabupaten Kubu Raya","Kabupaten Landak","Kabupaten Melawi","Kabupaten Mempawah","Kabupaten Sambas","Kabupaten Sanggau","Kabupaten Sekadau","Kabupaten Sintang","Kota Pontianak","Kota Singkawang"],
    KalimantanTimur: ["Kabupaten Berau","Kabupaten Kutai Barat","Kabupaten Kutai Kartanegara","	Kabupaten Kutai Timur","Kabupaten Mahakam Ulu","Kabupaten Paser","Kabupaten Penajam Paser Utara","Kota Balikpapan","Kota Bontang","Kota Samarinda"],
    KalimantanTengah: ["Kabupaten Barito Selatan","Kabupaten Barito Timur","Kabupaten Barito Utara","Kabupaten Gunung Mas","Kabupaten Kapuas","Kabupaten Katingan","Kabupaten Kotawaringin Barat","Kabupaten Kotawaringin Timur","Kabupaten Lamandau","Kabupaten Murung Raya","Kabupaten Pulang Pisau","Kabupaten Sukamara","Kabupaten Seruyan","Kota Palangka Raya"],
    KalimantanSelatan: ["Kabupaten Balangan","Kabupaten Banjar","Kabupaten Barito Kuala","Kabupaten Hulu Sungai Selatan","Kabupaten Hulu Sungai Tengah","Kabupaten Hulu Sungai Utara","Kabupaten Kotabaru","Kabupaten Tabalong","Kabupaten Tanah Bumbu","Kabupaten Tanah Laut","Kabupaten Tapin","Kota Banjarbaru","Kota Banjarmasin"],
    KalimantanUtara: ["	Kabupaten Bulungan","Kabupaten Malinau","Kabupaten Nunukan","Kabupaten Tana Tidung","Kota Tarakan"],
    SulawesiBarat: ["Kabupaten Majene","Kabupaten Mamasa","Kabupaten Mamuju","Kabupaten Mamuju Tengah","Kabupaten Pasangkayu","Kabupaten Polewali Mandar"],
    SulawesiTengah: ["Kabupaten Banggai","Kabupaten Banggai Kepulauan","Kabupaten Banggai Laut","Kabupaten Buol","Kabupaten Donggala","Kabupaten Morowali","Kabupaten Morowali Utara","Kabupaten Parigi Moutong","Kabupaten Poso","Kabupaten Sigi","Kabupaten Tojo Una-Una","Kabupaten Tolitoli","Kota Palu"],
    SulawesiSelatan: ["Kabupaten Bantaeng","Kabupaten Barru","Kabupaten Bone","Kabupaten Bulukumba","Kabupaten Enrekang","Kabupaten Gowa","Kabupaten Jeneponto","Kabupaten Kepulauan Selayar","Kabupaten Luwu","Kabupaten Luwu Timur","Kabupaten Luwu Utara","Kabupaten Maros","Kabupaten Pangkajene dan Kepulauan","Kabupaten Pinrang","Kabupaten Sidenreng Rappang","Kabupaten Sinjai","Kabupaten Soppeng","Kabupaten Takalar","Kabupaten Tana Toraja","Kabupaten Toraja Utara","Kabupaten Wajo","Kota Makassar","Kota Palopo","Kota Parepare"],    
    SulawesiTenggara: ["Kabupaten Bombana","Kabupaten Buton","Kabupaten Buton Selatan","Kabupaten Buton Tengah","Kabupaten Buton Utara","Kabupaten Kolaka","Kabupaten Kolaka Timur","Kabupaten Kolaka Utara","Kabupaten Konawe","Kabupaten Konawe Kepulauan","Kabupaten Konawe Selatan","Kabupaten Konawe Utara","Kabupaten Muna","Kabupaten Muna Barat","Kabupaten Wakatobi","Kota Bau-Bau","Kota Kendari"],
    SulawesiUtara: ["Kabupaten Bolaang Mongondow","Kabupaten Bolaang Mongondow Selatan","Kabupaten Bolaang Mongondow Timur","Kabupaten Bolaang Mongondow Utara","Kabupaten Kepulauan Sangihe","Kabupaten Kepulauan Siau Tagulandang Biaro","Kabupaten Kepulauan Talaud","Kabupaten Minahasa","Kabupaten Minahasa Selatan","Kabupaten Minahasa Tenggara","Kabupaten Minahasa Utara","Kota Bitung","Kota Kotamobagu","Kota Manado","Kota Tomohon"],
    MalukuUtara: ["Kabupaten Halmahera Barat","Kabupaten Halmahera Tengah","Kabupaten Halmahera Selatan","Kabupaten Halmahera Utara","Kabupaten Kepulauan Sula","Kabupaten Pulau Morotai","Kabupaten Pulau Taliabu","Kota Ternate","Kota Tidore Kepulauan"],
    Maluku: ["Kabupaten Buru","Kabupaten Buru Selatan","Kabupaten Kepulauan Aru","Kabupaten Maluku Barat Daya","Kabupaten Maluku Tengah","Kabupaten Maluku Tenggara","Kabupaten Kepulauan Tanimbar","Kabupaten Seram Bagian Barat","Kabupaten Seram Bagian Timur","Kota Ambon","Kota Tual"],
    PapuaBarat: ["Kabupaten Fakfak","Kabupaten Kaimana","Kabupaten Manokwari","Kabupaten Manokwari Selatan","Kabupaten Maybrat","Kabupaten Pegunungan Arfak","Kabupaten Raja Ampat","Kabupaten Sorong","Kabupaten Sorong Selatan","Kabupaten Tambrauw","Kabupaten Teluk Bintuni","Kabupaten Teluk Wondama","Kota Sorong"],
    Papua: ["Kabupaten Asmat","Kabupaten Biak Numfor","Kabupaten Boven Digoel","Kabupaten Deiyai","Kabupaten Dogiyai","Kabupaten Intan Jaya","Kabupaten Jayapura","Kabupaten Jayawijaya","Kabupaten Keerom","Kabupaten Kepulauan Yapen","Kabupaten Lanny Jaya","Kabupaten Mamberamo Raya","Kabupaten Mamberamo Tengah","Kabupaten Mappi","Kabupaten Merauke","Kabupaten Mimika","Kabupaten Nabire","Kabupaten Nduga","Kabupaten Paniai","Kabupaten Pegunungan Bintang","Kabupaten Puncak","Kabupaten Puncak Jaya","Kabupaten Sarmi","Kabupaten Supiori","Kabupaten Tolikara","Kabupaten Waropen","Kabupaten Yahukimo","Kabupaten Yalimo","Kota Jayapura"],
    Gorontalo: ["Kabupaten Boalemo","Kabupaten Bone Bolango","Kabupaten Gorontalo","Kabupaten Gorontalo Utara","Kabupaten Pohuwato","Kota Gorontalo"],
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
