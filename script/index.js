    function getMessage() {
        const TOKEN = "5554826181:AAGPlREo5j3H_pBv24nXVCOAax4DyfsJI78"

        const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

        const CHAT_ID = "-1001553607313"

        const name = document.querySelector('#first'),
            number = document.querySelector('#second'),
            email = document.querySelector('#third'),
            country = document.querySelector('#fourth'),
            comment = document.querySelector('#fifth'),
            button = document.querySelector('.message__content-button'),
            secName = document.querySelector('#name'),
            revMessage = document.querySelector('#review'),
            footButton = document.querySelector('.footer__content-button'),
            success = document.querySelectorAll('.alert')


        button.addEventListener('click', function (e) {
            e.preventDefault()

            let message = `<b>Заявка с сайта</b>\n`;
            message += `<b>Отправитель: </b> ${name.value}\n`
            message += `<b>Номер: </b> ${number.value}\n`
            message += `<b>Почта: </b> ${email.value}\n`
            message += `<b>Страна: </b> ${country.value}\n`
            message += `<b>Комментарии: </b> ${comment.value}\n`

            axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            })
                .then((res) => {
                    name.value = ""
                    number.value = ""
                    email.value = ""
                    country.value = ""
                    comment.value = ""
                    success[1].innerHTML = 'Сообщение успешно отправлено'
                    success[1].style.display = 'block'
                })
                .catch((err) => {
                    console.warn(err);
                })
        })
        footButton.addEventListener('click', (e) => {
            e.preventDefault()

            let review = `<b>Отзыв с сайта </b>\n`
            review += `<b>Имя: </b>${secName.value}\n`
            review += `<b>Отзыв: </b>${revMessage.value}\n`

            axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: review
            })
                .then((res) => {
                    secName.value = ""
                    revMessage.value = ""
                    success[0].innerHTML = 'Сообщение успешно отправлено'
                    success[0].style.display = 'block'
                })
                .catch((err) => {
                    console.warn(err);
                })
                .finally(() => {
                    setTimeout(() => {
                        success[0].style.display = 'none'
                    }, 15000);
                })
        })



    }
    getMessage()    