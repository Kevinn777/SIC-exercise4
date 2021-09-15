let data = "";

async function getData() {
    let response = await fetch("https://api.github.com/users/kevinn777")
    response = await response.json()
    // console.log(response.login);
    let image = document.getElementById("image");
    let nama = document.getElementById("nama");
    let id = document.getElementById("id");
    let github = document.getElementById("github-link");
    let following = document.getElementById("following");
    let followers = document.getElementById("followers");
    image.src = response.avatar_url;
    nama.innerHTML = response.login;
    id.innerHTML = `My ID : ${response.id}`;
    github.innerHTML = `My Link Github : ${response.html_url}`;
    following.innerHTML = `Following : ${response.following}`;
    followers.innerHTML = `Followers : ${response.followers}`;

    data = response;
    return response;
}
getData();