$(".signupbtn").click(async () => {
    console.log(1)
    var userdata = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      username: document.getElementById('username').value
    }
    //console.log(userdata)
    if (userdata.name.length != 0 && userdata.email.length != 0 && userdata.password.length != 0 && userdata.username.length != 0) {
      await $.post('/signupdata', userdata, (data, status) => {
        if (status == "success") {
          if (data.name != "MongoError") {
            window.location.replace('/')
          }
        }
      })
    } else {
      let html = "<div class=\"alert alert-danger\" role=\"alert\"> Please fill the required fields</div>"
      let w = document.querySelector('.container')
      w.insertAdjacentHTML('beforebegin', html);
      setTimeout(() => {
        document.querySelector('.alert-danger').remove();
      }, 3000);
    }
  })