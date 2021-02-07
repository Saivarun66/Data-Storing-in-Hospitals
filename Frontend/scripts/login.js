$("#login").click(async () => {
    let UserDetails = {
        Username: document.getElementById('username').value,
        Password: document.getElementById('password').value
    }

    let f = 0;
    if (UserDetails.Username.length != 0 && UserDetails.Password.length != 0) {
        await $.post('/logindata', UserDetails, (data, status) => {

            if (status == "success" && data.result == true) {
                console.log(data.token);
                sessionStorage.setItem("key", data.token);
                window.location.replace('/AdminPage')
            } else {
                f = 1;
            }
        })
    }
    if (f == 1 || UserDetails.Username.length == 0 || UserDetails.Password.length == 0) {

        if (f == 1) {
            let html = "<div class=\"alert alert-danger\" role=\"alert\"> Please enter a Valid Username and Password</div>"
            let w = document.querySelector('.container')
            w.insertAdjacentHTML('beforebegin', html);
            setTimeout(() => {
                document.querySelector('.alert-danger').remove();
            }, 3000);
        } else {
            let html = "<div class=\"alert alert-danger\" role=\"alert\"> Please enter a Valid Username and Password</div>"
            let w = document.querySelector('.container')
            w.insertAdjacentHTML('beforebegin', html);
            setTimeout(() => {
                document.querySelector('.alert-danger').remove();
            }, 3000);
        }
    }

})