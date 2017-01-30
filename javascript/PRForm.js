function validasiForm()
{
var jper =formsim.jenispermohonan;
var msim =formsim.memilikisim; 
var simdim =formsim.simdimiliki; 
var nosim =formsim.nomorsim;
var sdiminta =formsim.simdiminta;
var naleng =formsim.namalengkap;
var jk =formsim.jeniskelamin;
var kw =formsim.kewarganegaraan;
var wa =formsim.warganegaraasing;
var nopas =formsim.nomorpaspor;
var tglter =formsim.tanggalterbit;
var tgl =formsim.tanggal;
var bln =formsim.bulan;
var thn =formsim.tahun;    
    
if(jenispermohonan (jper)){
    if (memilikisim(msim,tidak,pernah)){
        if (simdimiliki (simdim)){
            if (nomorsim(nosim)){
                if (simdiminta (sdiminta)){
                    if (namalengkap(naleng)){
                        if (jeniskelamin(jk,P,L)){
                        
                            if (kewarganegaraan(kw,WNI,WNA)){
                                if (warganegaraasing (wa)){
                                    If (nomorpaspor(nopas,7)){
                                        // belum bikin function tgl terbit
                                        if ()
                                    }
                                }
                                
                            }
                     
                            
                        }
                    }
                }
                
            }
        }
    }
}
    return false;
}


/*ini jenis validasinya  harus pilih salah satu.maka valid  dalam form ada 3 bagian yang harus divalidasi dengan jenis ini 1.jenis permohonan 2.sim yang pernah dimiliki golongan 3. pilih negara asal*/
/*----- 1------*/
function jenispermohonan (jper)
{
    if (jper.value == "default")
{
    alert ('Pilih jenis permohonan sim');jper.focus(); return false;
}
    else
{
    return true;
}
}

/* ----- sampai disini----*/

/*----- 2------*/
function simdimiliki (simdim)
{
    if (simdim.value == "default")
{
    alert ('Pilih Golongan SIM yang pernah dimiliki');simdim.focus(); return false;
}
    else
{
    return true;
}
}

/* ----- sampai disini----*/

/*----- 3------*/
function warganegaraasing (wa)
{
    if (wa.value == "default")
{
    alert ('Pilih Negara Asal');wa.focus(); return false;
}
    else
{
    return true;
}
}

/* ----- sampai disini----*/

/*ini validasinya diperlukan dan hanya memerlukan angka saja */

function nomorsim(nosim)
{
    var numbers =/^[0-9]+$/; if(nosim.value.match(numbers))
{
return true;
}
    else
{
            alert ('Nomor SIM terdiri dari angka saja');nosim.focus();
            return false;
}
}
/* ----- sampai disini----*/

/*ini validasinya diperlukan dan hanya memerlukan huruf saja */

function namalengkap(naleng)
{
    var letters =/^[A-Za-z]+$/; if(naleng.value.match(letters))
{
return true;
}
    else
{
            alert ('Isi dengan nama lengkap Anda');nosim.focus();
            return false;
}
}
/* ----- sampai disini----*/


/*ini validasinya diperlukan dengan memerlukan huruf dan angka (alphanumeric) */

function nomorpaspor(nopas,7)
{
    var nopas_len =/^[A-Z0-9]+$/.length; if(nopas_len=7.value.match(letters))
{
return true;
}
    else
{
            alert ('Nomor Paspor terdiri atas 7 digit dengan Huruf kapital dan Angka');nopas.focus();
            return false;
}
}
/* ----- sampai disini----*/

/*ini validasinya  radio type */
// ----1 gender---//
function jeniskelamin(jk,P,L)
{
    x=0;
    if (P.checked)
{
    x++;     
        }
{
alert ("Pilih P/L");
    jk.focus();
    return false
}
    else
        {
            alert ('Sebutkan Jenis Kelamin');
            window.location.reload()
            return true;}
        }
    
    //----2 wna/wni ----//
    
    
    
function kewarganegaraan(kw,WNI,WNA) {
    x=0; if (WNI.checked)
        {
            x++;
        }
    {alert ("Sebutkan Kewarganegaraan");kw.focus ();
     return false}
}
    else {
        return true;
    }
/* ----- sampai disini----*/

/* ini validasi ya dan tidak kepemilikan sim*/
function memilikisim(msim,tidak,pernah)
{
    x=0;
    if (tidak.checked)
{
    x++;     
        }
{
alert ("Pilih Tidak/Pernah memiliki sim");
    msim.focus();
    return false
}
    else
        {
            alert ('Formulir telah disi');
            window.location.reload()
            return true;}
        }

    // checklist validation//
function (simdiminta (sdiminta)) {
    if (document.simdiminta.checked == false){
       alert ("Pilih Golongan SIM yang diminta");
    return false; 
    }
    else{
        return true;
    }
}  

    
// coba yang tangall
    
function (tanggalterbit(tglter,tgl,bln,thn)) {
    if(tgl && bln && thn.selected == true){
    return true;
    }
    else {
        alert ("isi tanggal, bulan, dan tahun paspor dikeluarkan");
        return false;
    }
}   