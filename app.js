const data = [
    {
        name: 'Jon Falcon',
        age: 31,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'male',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Pat Haxley',
        age: 41,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }


];


const profiles = profileIterator(data);

//Call 1st profile

nextProfile();

//Next Events

document.getElementById('next').addEventListener('click', nextProfile);

//Next Profile Display

function nextProfile(){
    const currentProfile = profiles.next().value;
  

    if(currentProfile != undefined){
        document.getElementById('profile-display').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item"> Name: ${currentProfile.name} </li>
            <li class="list-group-item"> Age: ${currentProfile.age} </li>
            <li class="list-group-item"> Location: ${currentProfile.location} </li>
            <li class="list-group-item"> Preference: ${currentProfile.gender}  looking for ${currentProfile.lookingfor}</li>   
        </ul>
        `;

        document.getElementById('image-display').innerHTML = `
            <img src="${currentProfile.image}">
        `;

    } else {
        //No More Profiles
        window.location.reload();
    }


}

//Profie Iterator

function profileIterator(profiles)  {
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false} :
            {done: true}
            
        }
    };
}