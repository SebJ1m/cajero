class Billete
{
    constructor(v,c)
    {
        this.valor=v;
        this.cantidad=c;
    }
}

function entregarDinero()
{
    for(var bi of caja)
        if(dinero>0)
        {
            div=Math.floor(dinero/bi.valor)
            if(div>bi.cantidad)
            {
                papeles=bi.cantidad;
            }
            else
            {
                papeles=div;
            }
            entregado.push(new Billete(bi.valor,papeles))
            dinero= dinero - (bi.valor*papeles)
        }
        if(dinero>0)
        {
            alert("soy un cajero pobre no tengo tanto dinero :c")
        }
}

var caja =[]
var entregado = []

var caja = []
var entregado = []
caja.push(new Billete(50,3));
caja.push(new Billete(20,2));
caja.push(new Billete(10,2));

var dinero=1000;
var div = 0;
var papeles= 0;

b= document.getElementById("boton")
b.addEventListener("click",entregarDinero)

