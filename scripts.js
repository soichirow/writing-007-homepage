
    document.addEventListener('DOMContentLoaded', function () {
            const membersData = [
    {
        name: 'HiroCom777',
    twitter: 'https://twitter.com/Hirocom7772',
    blog: 'https://hirocom777.hatenadiary.org/',
    role: '講師',
    image: 'image/hirocom.jpg'
                },
    {
        name: 'おおさき',
    twitter: 'https://twitter.com/massa_potato',
    blog: 'https://labo.agrifeel.net/',
    note: 'https://note.com/agrifeel_labo',
    role: 'TA',
    image: 'image/oosaki.png'
                },
    {
        name: 'Yoko Mori',
    twitter: 'https://twitter.com/moripro3',
    blog: 'https://moripro.net/',
    role: 'ホスト',
    image: 'image/mori.png'
                },
    {
        name: 'Sayumi Fukushima',
    twitter: 'https://twitter.com/sayumifu',
    note: 'https://note.com/ichihuku/',
    role: '受講生',
    image: 'image/ichihuku.jpg'
                },
    {
        name: '綿木伸允',
    twitter: 'https://twitter.com/watakkie',
    note: 'https://note.com/nobuyoshi_wataki',
    role: '受講生',
    image: 'image/wataki.jpg'
                },
    {
        name: 'Mitsuhiro Hotta',
    twitter: 'https://twitter.com/Hotta3216',
    note: 'https://note.com/hotta3216/',
    role: '受講生',
    image: 'image/hotta.jpg'
                },
    {
        name: '良大 今泉',
    role: '受講生',
    image: 'image/imaizumi.png'
                },
    {
        name: 'そういちろう',
    twitter: 'https://twitter.com/black777cat',
    blog: 'https://so.sha-box.com/',
    note: 'https://note.com/black777cat',
    role: '受講生',
    image: 'image/soichiro.jpg'
                }
    ];


    const membersContainer = document.getElementById('members');

            membersData.forEach(member => {
                const memberElement = document.createElement('div');
    memberElement.classList.add('member', 'mb-3', 'col-md-4');
    if (member.image) {
                    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const imageElement = document.createElement('img');
    imageElement.src = member.image;
    imageElement.alt = `アイコン ${member.name}`;
    imageElement.classList.add('profile-img'); // CSSクラスを適用

    imgContainer.appendChild(imageElement);
    memberElement.appendChild(imgContainer);
                }


    const nameElement = document.createElement('h5');
    nameElement.textContent = `${member.name} (${member.role})`;
    memberElement.appendChild(nameElement);

    const detailsElement = document.createElement('div');
    detailsElement.classList.add('details');

    if (member.twitter) {
        detailsElement.innerHTML += `<p>Twitter: <a href="${member.twitter}" target="_blank">Twitter</a></p>`;
                }
    if (member.blog) {
        detailsElement.innerHTML += `<p>Blog: <a href="${member.blog}" target="_blank">Blog</a></p>`;
                }
    if (member.note) {
        detailsElement.innerHTML += `<p>Note: <a href="${member.note}" target="_blank">Note</a></p>`;
                }

    memberElement.appendChild(detailsElement);
    membersContainer.appendChild(memberElement);
            });
        });
