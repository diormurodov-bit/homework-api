console.log('Axios подключен');


const container = document.querySelector('.posts-list');

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
        const posts = response.data;

        const first10 = posts.slice(0, 10);

        let html = '';

        first10.forEach(function(post) {
            html += `
                <div class="post-card">
                    <span>Пост №${post.id}</span>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });

        container.innerHTML = html;

        document.querySelector('.info').innerText =
            `Показано ${first10.length} из ${posts.length}`;
    })
    .catch(function(error) {
        console.log('Ошибка:', error);
    });
