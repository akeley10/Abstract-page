document.addEventListener('DOMContentLoaded',()=>{
const menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener('click',()=>{
        document.body.classList.toggle('menu-visible');
})
const search = document.getElementById('search-results');
const searchInformation = document.getElementById('search-information');
let params = new URLSearchParams(location.search);
var query = params.get('query');
search.innerHTML = "Results about the word " + query;
if(query === "Abstract" || query === 'Using Abstract'){
    searchInformation.innerHTML = 'Abstract lets you manage, version, and document your designs in one place.';
}else if(query === 'Manage' || query === "Manage your account"){
    searchInformation.innerHTML = 'Configure your account settings, such as your email, profile details, and password.';
}else if(query === 'organizations' || query === "teams" || query === "projects" || query === "work"){
    searchInformation.innerHTML = 'Use Abstract organizations, teams, and projects to organize your people and your work.';
}else if(query === 'billing' || query === "subscriptions" || query === "payment" || query === "pay"){
    searchInformation.innerHTML = 'Change subscriptions and payment details.';
}else if(query === 'Authenticate' || query === "configure"){
    searchInformation.innerHTML = 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.';
}else if(query === 'support'){
    searchInformation.innerHTML = 'Get in touch with a human.';
}else{
    searchInformation.innerHTML = 'not results about the word ' + query;

}

});
