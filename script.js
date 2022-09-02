const getData = async() => {
    const myurl = `https://jsonplaceholder.typicode.com/users`;
    const res = await fetch(myurl);
    const data = await res.json();
    singelData(data)
}

const singelData = (data) => {
    const maindiv = document.getElementById('maincard');
    for (const singel of data) {
        const createNew = document.createElement('div');
        const addClass = createNew.classList.add('col');
        const addClassMargin = createNew.classList.add('mb-2');
        createNew.innerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${singel.name}</h5>
          <p class="card-text">${singel.email}</p>
          <button type="button" onclick="openModal(${singel.id})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          See Details
        </button>
        </div>
        </div>
        `;
        maindiv.appendChild(createNew);
        console.log(singel.id)
    }
}

function openModal(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => innerdata(data));

    function innerdata(data) {
        const name = document.querySelector('.name');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const mname = document.getElementById('mname');
        const street = document.getElementById('street');
        const suite = document.getElementById('suite');
        const city = document.getElementById('city');
        const zipcode = document.getElementById('zipcode');
        const lat = document.getElementById('lat');
        const lng = document.getElementById('lng');
        const phone = document.getElementById('phone');
        const website = document.getElementById('website')

        mname.innerText = data.name;
        name.innerText = data.name;
        username.innerText = `@${data.username}`;
        email.innerText = data.email;
        street.innerHTML = data.address.street;
        suite.innerHTML = data.address.suite;
        city.innerHTML = data.address.city;
        zipcode.innerHTML = data.address.zipcode;
        lat.innerHTML = data.address.geo.lat;
        lng.innerHTML = data.address.geo.lng;
        phone.innerHTML = data.phone;
        website.innerText = data.website;
        // console.log(modal);
    }
}



getData()