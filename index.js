const generateCard = () => {
  const nameField = document.getElementById("name");
  const clgField = document.getElementById("college");
  const locationField = document.getElementById("location");

  if (nameField.value && clgField.value && locationField.value) {
    document.getElementById("name-val").innerHTML = nameField.value;
    document.getElementById("college-val").innerHTML = clgField.value;
    document.getElementById("location-val").innerHTML = locationField.value;
    document.getElementById('card').style.display='block'
  }
  else{
    if(!nameField.value){
        nameField.classList.add('invalid');
    }
    if(!clgField.value){
        clgField.classList.add('invalid');
    }
    if(!locationField.value){
        locationField.classList.add('invalid');
    }
  }
};
