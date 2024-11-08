function submit()
{
    birthdate = document.getElementById("birthdate");
    birthyear = birthdate.value; // 2024-06-23
    birthyear = birthyear.slice(0, 4);
    age = 2024 - parseInt(birthyear);
    if (age > 0)
    {
        p = document.getElementById("age-text");
        p.innerHTML = "Your age is " + age.toString() + " years old"
    }
}