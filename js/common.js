let stateEle = document.getElementById('state-change');
if(localStorage.getItem('user') != null){
    stateEle.innerHTML = `<a class="nav-link text-white px-3" id="logout">
Logout
                    </a>`;
}


let user = localStorage.getItem('user');
if(user != null) {
    let logoutEle = document.getElementById('logout');
    logoutEle.addEventListener('click', function () {
        localStorage.removeItem('user');
        window.location.href = './login.html';
    });
}






