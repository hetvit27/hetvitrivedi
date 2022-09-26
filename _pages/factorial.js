function factorial()
{
    var n = document.getElementById("num").value;
    var i, f=1;
    if(n < 0)
    {
        document.getElementById("fact").innerHTML = "error!";
    }
    else
    {
        for(i=1; i<=n; i++) f *= i;
        document.getElementById("fact").innerHTML = f;
    }
    
}