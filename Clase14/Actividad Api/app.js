


// URL base de la API para estudiantes
const API_URL = "https://68bdc06b227c48698f854c69.mockapi.io/api/users";

//Referencias al DOM
const form = document.getElementById("userForm");
const userTable = document.getElementById("userTable");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");

//variable global
let editUserId = null;


//Obtener y mostrar usuarios

async function getUsers() {
    try{
        const response = await fetch(API_URL);
        if(!response.ok)throw new Error (`Error HTTP: ${response.status}`)
        const users = await response.json();
        renderUsers(users);//llama a la funcion
    } catch (error) {
        console.log ("Error al obtener usuarios:", error);
    }
}

// Muestra los usuarios en la tabla del DOM
function renderUsers(users) {
    if(users.length === 0) {
userTable.innerHTML = '<tr><td colspan="6">No hay datos para mostrar.</td></tr>';
return;
}

userTable.innerHTML = ""; //limpia la tabla 
users.forEach (({id, name, avatar, country, phone}) => {
const tr = document.createElement("tr");

        tr.innerHTML = `
        <td>${id}</td>
        <td>
        <figure class="image is-48x48">
          <img class="is-rounded" 
          src="${avatar || 'https://placehold.co/48x48'}" 
          alt="avatar" onerror="this.src='https://placehold.co/48x48'">
        </figure>
        </td>
        <td>${name}</td>
        <td>${country}</td>
        <td>${phone}</td>
        <td>
        <button class="button is-small is-warning" onclick="editUser('${id}')">Editar</button>
        <button class="button is-small is-danger" onclick="deleteUser('${id}')">Eliminar</button>
        </td>
        `;
        userTable.appendChild(tr);
    });
}

//Crear o actualizar usuario

form.addEventListener("submit", async (e)=> {
    e.preventDefault(); 

    //captura los valores de los inputs

     const name = document.getElementById("name").value;
     const avatar = document.getElementById("avatar").value;
     const country = document.getElementById("country").value;
     const phone = document.getElementById("phone").value;

    
    const newUser = { name, avatar, country, phone };


     try {
        if (editUserId){
            //si hay un ID > estamos editando > hacemos PUT
            await fetch (`${API_URL}/${editUserId}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newUser),
            });
        }else{
            //si NO hay ID > estamos creando > POST
            await fetch(API_URL, {
                method: "POST",
                headers:{"Content-Type" : "application/json" },
                body:JSON.stringify(newUser),
            });
        }

        //Reset estado
        editUserId = null;
        form.reset();//limpia el form
        submitBtn.textContent = "Crear";
        cancelBtn.classList.add("is-hidden");
        //refrescar la tabla una vez
        getUsers();
    
     } catch (error) {
        console.log("Error al guardar usuario:", error);
     }   
     });

     //Editar usuario
     async function editUser(id){

        try {
            const response = await fetch(`${API_URL}/${id}`);
            const user = await response.json();
            
            document.getElementById("name").value = user.name;
            document.getElementById("avatar").value = user.avatar;
            document.getElementById("country").value = user.country
            document.getElementById("phone").value = user.phone;

            editUserId = id; //guardamos el id para usarlo en el submit
            submitBtn.textContent = "Actualizar";


        } catch (error) {
            console.log("Error al obtener usuario para editar:", error);
        }
     } 

     //Eliminar usuario
     async function deleteUser(id){
        if(!confirm("¿Seguro que deseas elminar este usuario?")) return;
        try {
            await fetch (`${API_URL}/${id}`, {method: "DELETE"});
            getUsers();
        } catch (error){
            console.log("Error al eliminar usuario:", error);
        }
     }
     
// Hacer accesibles las funciones globalmente
window.editUser = editUser;
window.deleteUser = deleteUser;
     
//Inicializar
getUsers();

