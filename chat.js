document.getElementById('general_form').addEventListener("submit", function (e) {
    e.preventDefault();

    let dialog = document.querySelector('#dialog');
    let textUser = document.getElementById('entry_field');
    //console.log(textUser.value.replace(/\n/g, '<br/>'));
    //проверка на пробелы, если ок то выполняеться код отрисовки сообщения
    if (textUser.value.trim().length === 0) {
        document.getElementById("entry_field").value = "";
        alert("You will try to send an empty message");
    } else {
        // добавляет каждый раз по новому сообщеннию, не трогая старые смс
        let divMsg2 = document.createElement('div');
        divMsg2.className = "msg2";
        dialog.append(divMsg2);

        let divTxt = document.createElement('div');
        divTxt.id = "txt";
        divTxt.textContent = textUser.value;
        divMsg2.append(divTxt);

        let img = document.createElement('img');
        img.className = "avatar2";
        img.src = "pic/avatar_2.jpg";

        let divPic = document.createElement('div');
        divPic.id = "avatar2_pic";
        divPic.innerHTML = "<img class=\"avatar2\" src=\"pic/avatar_2.jpg\"> ";
        divMsg2.append(divPic);

        //вариант с перерисовкой каждый раз всего чата
        //фикс тегов, распознает как тескт
        /*    let divTxt = document.createElement('div');
            divTxt.id = "txt";
            divTxt.textContent = textUser.value;

            let firstMsg = dialog.innerHTML;
            let allMsg = `${firstMsg}
            <div class="msg2">
                <div id="txt">${divTxt.innerHTML}</div>
                <div id="avatar2_pic">
                    <img class="avatar2" src="pic/avatar_2.jpg">
                </div>
            </div>`;

            dialog.innerHTML = allMsg;*/

        //скролл в самый низ
        let scrollEnd_Y = window.document.querySelector('#dialog').scrollHeight;
        window.document.querySelector('#dialog').scrollTo(0, scrollEnd_Y);

        //очистка строки после ввода
        document.getElementById("entry_field").value = "";
    }
})