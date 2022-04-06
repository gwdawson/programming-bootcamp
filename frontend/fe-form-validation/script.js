document.addEventListener("submit", (event) => {
  const formData = {
    firstName: event.target[0].value,
    lastName: event.target[1].value,
    username: event.target[2].value,
    avatar: event.target[3].value,
  };

  if (/[^a-z]/i.test(formData.firstName)) {
    let element = document.querySelector("#error");
    event.preventDefault();
    element.classList.remove("display-none");
    element.innerText = "First Name must only contain letters";
  }
  //
  else if (/[^a-z]/i.test(formData.lastName)) {
    let element = document.querySelector("#error");
    event.preventDefault();
    element.classList.remove("display-none");
    element.innerText = "Last Name must only contain letters";
  }
  //
  else if (/[^a-z0-9]/i.test(formData.username)) {
    let element = document.querySelector("#error");
    event.preventDefault();
    element.classList.remove("display-none");
    element.innerText = "username must only contain letters and numbers";
  }
  //
  // else if (
  //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //     formData.avatar
  //   )
  // ) {
  //   console.log(formData.avatar);
  //   let element = document.querySelector("#error");
  //   event.preventDefault();
  //   element.classList.remove("display-none");
  //   element.innerText = "test";
  // }
  //
  else {
    if (formData.username.length < 5) {
      let element = document.querySelector("#error");
      event.preventDefault();
      element.classList.remove("display-none");
      element.innerText = "username must be atleast 6 characters";
    }
    element.classList.add("display-none");
  }
});
