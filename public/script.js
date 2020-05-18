fetch('api/user/all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let users = data;
        for (let i in users) {
            //document.querySelector('#all_users').innerHTML = users[i].id
            let p = document.createElement('p')
            p.innerHTML = `id: ${users[i].id} | First name: ${users[i].firstName} | Last name: ${users[i].lastName}`
            p.setAttribute('class', 'user_generator')
            document.querySelector('#all_users').appendChild(p)

            let a_red = document.createElement('a')
            a_red.setAttribute('href', `/api/user/redactor/${users[i].id}`)
            a_red.innerHTML=`Change ${users[i].firstName} ${users[i].lastName}`
            p.appendChild(a_red)

            let a_del = document.createElement('a')
            a_del.setAttribute('href', `/api/user/delete/${users[i].id}`)
            a_del.innerHTML=`Delete ${users[i].firstName} ${users[i].lastName}`
            p.appendChild(a_del)

            let a_note = document.createElement('a')
            a_note.setAttribute('href', `/api/user/notes/${users[i].id}`)
            a_note.innerHTML=`Notes`
            p.appendChild(a_note)

        }
    });

    setTimeout(() => {
        if (document.getElementsByClassName('user_generator').length>0) {
            let a_all_dell = document.createElement('a')
            a_all_dell.setAttribute('href', '/api/user/delete/all')
            a_all_dell.innerHTML=`Delete all users`
            document.querySelector('#all_users').appendChild(a_all_dell)
        }
    }, 100);


