function build_nav(nav_list) {
    let nav = document.querySelector('header nav');
    const heading = document.querySelector('h1');

    nav_list.forEach(item => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        if (heading.textContent == 'My Coding Journal') {
            a.href = `views/${item}.html`;
        } else {
            a.href = `${item}.html`;
        }
        a.textContent = item.toUpperCase();

        li.appendChild(a);
        nav.appendChild(li);
    });
}

function build_contents_table() {
    const sections = document.querySelectorAll('h2');

    let table = document.querySelector('#contents-table');

    sections.forEach(item => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = `#${item.id}`;
        a.text = item.textContent;

        li.appendChild(a);
        table.appendChild(li);
    });
}

const nav = ['css', 'flutter', 'html', 'javascript', 'python', 'react_native', 'react', 'sql']

build_nav(nav);

build_contents_table();
