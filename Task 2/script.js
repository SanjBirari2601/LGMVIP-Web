const data = [
    {
        id: 1,
        name: 'Sanjana Birari',
        email: 'Sanjana.bluth@reqres.in',
        image: 'https://th.bing.com/th/id/OIP.slCWmB0bRN9NeVQJvFmwbwEwDN?w=182&h=123&c=7&r=0&o=5&dpr=1.25&pid=1.7'
    },
    {
        id: 2,
        name: 'Atharva Birari',
        email: 'Atharva.bluth@reqres.in',
        image: 'https://reqres.in/img/faces/1-image.jpg'
    }
]

function userIterator(profiles)
{
    let nextIndex=0;
    return {
        next: function()
        {
            return nextIndex < profiles.length ? {value: profiles[nextIndex++],done: false} : {done: true}
        }
    };
}
const candidates = userIterator(data);
nextUser();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextUser);

function nextUser()
{
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined)
    {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item"> User ID : ${currentCandidate.id}</li>
        <li class="list-group-item"> User Name : ${currentCandidate.name}</li>
        <li class="list-group-item">Email : ${currentCandidate.email}</li>
        </ul>`;
    }
    else
    {
        alert('End of Users');
        window.location.reload();
    }
}