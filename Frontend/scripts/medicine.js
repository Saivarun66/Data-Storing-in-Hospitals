if(sessionStorage.getItem("key")==null)
{
    window.location.replace('/')
}
$("#logout").click(()=>{
    if(sessionStorage.getItem("key"))
    {
        sessionStorage.removeItem("key")
        window.location.replace('/')
    }
})
$('#submit').click(() => {
    let medicine = {
        id: document.getElementById('med_id').value,
        name: document.getElementById('med_name').value,
        price: document.getElementById('price').value,
        code: document.getElementById('code').value,
        mfgdate: document.getElementById('mfg-date').value,
        expdate: document.getElementById('exp-date').value
    }
    $.post('/MedicineDetails', medicine, (data, status) => {
        if (status == "success") {
            window.location.replace('/MedicinePage');
        }
    })
})
$('#home').click(() => {
    console.log(1)
    window.location.replace('/AdminPage')
})