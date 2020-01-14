function doit() {

    const url = 'https://www.breakingbadapi.com/api/';
    let artist = document.getElementById('artist').value;
    let imgDiv = document.getElementById('img');
    let rightDiv = document.getElementById('info');

    imgDiv.innerHTML = '';
    rightDiv.innerHTML = '';

    let newUrl = url.concat('characters?name=' + artist);
    let ul = document.createElement('ul');

    fetch(newUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for(let key in data[0]) {
                let li = document.createElement('li');
                let span = document.createElement('span');
                if(key === 'img') {
                    let image = document.createElement('img');
                    image.style.width = '300px';
                    image.src = `${data[0][key]}`;
                    imgDiv.append(image);
                    continue;
                }
                span.innerHTML = `<b>${key}</b> : ${data[0][key]}`;
                li.append(span);
                ul.append(li);
                rightDiv.appendChild(ul);

            }


            /*let li = document.createElement('li');
            let span = document.createElement('span');
            if(`${key}` === 'img') {
                img.src = `${data[0][key]}`;
                li.append(img);
                ul.append(li);
                continue;
            }

            span.innerHTML = `<b>${key}</b> : ${data[0][key]}`;
            li.append(span);
            ul.append(li);*/
        })
}
