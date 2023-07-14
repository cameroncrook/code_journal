function build_nav(nav_list) {
    let nav = document.querySelector('header nav');

    nav_list.forEach(item => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = `views/${item}.html`;
        a.textContent = item.toUpperCase();

        li.appendChild(a);
        nav.appendChild(li);
    });
}

const nav = ['css', 'flutter', 'html', 'javascript', 'python', 'react_native', 'react', 'sql']

build_nav(nav);
