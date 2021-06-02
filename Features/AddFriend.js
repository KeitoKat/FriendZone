// SAMPLE: const newFriend = {name: "Kate", timezone: "GTM+7", contact: "github.com/KeitoKat"};

// DATA ARRAY
let friends = [];

// HANDLER FUNCTIONS
const addFriend = (e) => {
  // prevent reload
  e.preventDefault();

  // update info
  let friend = {
                color: document.getElementById("set-color-identity").value,
                name: document.getElementById("set-name").value,
                timezone: document.getElementById("set-timezone-offset").value,
                // contact: document.getElementById("set-contact").value
              };

  // push info to friends array
  friends.push(friend);

  // reset value
  document.querySelector('form').reset();

  // save to storage (API) !!!
}

console.log(friends)
document.addEventListener('DOMContentLoaded', ()=>
{
  document.getElementById("btn").addEventListener('click', addFriend);
})