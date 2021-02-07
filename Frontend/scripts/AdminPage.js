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
$("#hospitaldetails").click(()=>{
    $.get('/AllHospitals',(data,status)=>{
        if(status=="success")
        {
            let k="<table class=\"table\"><thead> <th scope=\"col\">Hospital ID</th><th scope=\"col\">Hospital Name</th><th scope=\"col\">Location</th></tr> </thead><tbody>"
            
            for(let i=0;i<data.length;i++)
            {
                k=k+"<tr> <td>"+data[i].hosp_id+"</td><td>"+data[i].hosp_name+"</td><td>"+data[i].location+"</td></tr>"
            }
            k=k+"</tbody></table>"
            document.querySelector('.tables').innerHTML=k
        }
            
    })
})
$("#medicine").click(()=>{
    $.get('/AllMedicine',(data,status)=>{
        if(status=="success")
        {
            let k="<table class=\"table\"><thead> <th scope=\"col\">Medicine ID</th><th scope=\"col\">Medicine Name</th><th scope=\"col\">Price</th> <th scope=\"col\">Code</th> <th scope=\"col\">Manufacture Date</th><th scope=\"col\">Expiry Date</th></tr> </thead><tbody>"
            
            for(let i=0;i<data.length;i++)
            {
                k=k+"<tr> <td>"+data[i].med_id+"</td><td>"+data[i].med_name+"</td><td>"+data[i].price+"</td><td>"+data[i].code+"</td><td>"+data[i].mfg_date+"</td><td>"+data[i].exp_date+"</td></tr>"
            }
            k=k+"</tbody></table>"
            document.querySelector('.tables').innerHTML=k
        }
    })
})
$("#doctor").click(()=>{
    $.get('/Alldoctor',(data,status)=>{
        if(status=="success")
        {
            let k="<table class=\"table\"><thead> <th scope=\"col\">Doctor ID</th><th scope=\"col\">Doctor Name</th><th scope=\"col\">Qualification</th> <th scope=\"col\">Doctor Type</th> <th scope=\"col\">City</th><th scope=\"col\">Department ID</th></tr> </thead><tbody>"
            
            for(let i=0;i<data.length;i++)
            {
                k=k+"<tr> <td>"+data[i].doc_id+"</td><td>"+data[i].doc_name+"</td><td>"+data[i].qual+"</td><td>"+data[i].city+"</td><td>"+data[i].doc_type+"</td><td>"+data[i].dep_i+"</td></tr>"
            }
            k=k+"</tbody></table>"
            document.querySelector('.tables').innerHTML=k
        }
    })
})