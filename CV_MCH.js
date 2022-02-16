const masinfo = document.getElementById('informacion');
const menosinfo = document.getElementById('informacion2');

masinfo.addEventListener('click', barra);

function barra(){    
    document.getElementById('listaizq').classList.remove('ocultar');
    document.getElementById('informacion2').classList.remove('ocultar');
    document.getElementById('informacion').classList.add('ocultar');         
};

menosinfo.addEventListener('click', barra2);

function barra2(){    
    document.getElementById('listaizq').classList.add('ocultar');
    document.getElementById('informacion').classList.remove('ocultar');
    document.getElementById('informacion2').classList.add('ocultar');         
};

const contact = document.getElementById('contactar');

contact.addEventListener('click', datos);

function datos(){    
    alert("Móvil: 635575224")
    alert("Email: micoher@gmail.com")        
};

const discord = document.getElementById('discord');

discord.addEventListener('click', usuario);

function usuario(){    
    alert("Nombre de usuario: Cotaaa#0434")
            
};