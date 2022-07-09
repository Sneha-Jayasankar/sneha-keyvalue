function ValidateEmail(inputText) {
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mail)) {
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}


document.getElementById('forms').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const d = Array.from(formData.entries()).reduce((memo, [key, value]) => ({
    ...memo,
    [key]: value,
  }), {});
    str = JSON.stringify(d);
    console.log(str);
});


function debounce(func, timeout = 300){
    let timerid;
    return (...args) => {
      clearTimeout(timerid);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  function saveInput(){
    console.log('Clicked');
  }
  const processChange = debounce(() => saveInput());


  function changecolor()
  {
    document.getElementById("act").style.backgroundColor = "grey";
  }