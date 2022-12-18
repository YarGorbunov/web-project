<script setup lang="ts">
let name:string;
let phone:string;
let mail:string;
let comment:string;
function submit(e:Event) {
    e.preventDefault();
    let response = fetch('https://formcarry.com/s/dvkN9arcD', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({"name": name, "phone": phone, "mail": mail, "comment": comment})
    });
    let nameField = document.getElementById("form-name") as HTMLInputElement;
    nameField.value = "";
    let phoneField = document.getElementById("form-phone") as HTMLInputElement;
    phoneField.value = "";
    let mailField = document.getElementById("form-mail") as HTMLInputElement;
    mailField.value = "";
    let commentField = document.getElementById("form-comment") as HTMLInputElement;
    commentField.value = "";
    let checkbox = document.getElementById("form-checkbox") as HTMLInputElement;
    checkbox.checked = false;
}
</script>

<template>
<form class="footer-form" @submit="submit" method="post">
    <input type="text" placeholder="Ваше имя" name="name" v-model="name" required id="form-name">
    <input type="tel" placeholder="Телефон" name="phone" v-model="phone" required id="form-phone">
    <input type="email" placeholder="E-mail" name="mail" v-model="mail" required id="form-mail">
    <textarea placeholder="Ваш комментарий" name="comment" v-model="comment" required id="form-comment"></textarea>
    <div class="footer-form-checkbox-wrapper">
        <input type="checkbox" name="agreement" required id="form-checkbox">
        <label class="footer-form-checkbox-label">Отправляя заявку, я даю согласие на обработку своих персональных данных</label>
    </div>
    <input type="submit" value="СВЯЖИТЕСЬ С НАМИ!">
</form>
</template>

<style scoped>
input {
    width: calc(100% - 33px);
    border: #585757 1.5px solid;
    padding: 15px;
    margin: 3px auto;
    background-color: #00000000;
    font-family: Montserrat-Regular;
    border-radius: 5px;
    font-size: 12px;
    color: white;
}

input:focus-visible {
    border: white 1.5px solid;
    outline: none;
}

input::placeholder, textarea::placeholder {
    color: white;
}

input[type=checkbox] {
    width: auto;
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    padding: 10px;
}

input[type=checkbox]:checked {
    background-image: url(../../public/galochka-form.svg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
}

textarea {
    width: calc(100% - 33px);
    border: #585757 1.5px solid;
    padding: 15px;
    margin: 3px auto;
    background-color: #00000000;
    font-family: Montserrat-Regular;
    border-radius: 5px;
    font-size: 12px;
    resize: vertical;
    color: white;
    height: 100px;
}

.footer-form-checkbox-label {
    color: #9e9ea0;
    font-size: 10px;
}

.footer-form-checkbox-wrapper {
    display: flex;
    flex-direction: row;
    gap: 3%;
    margin-bottom: 5px;
}

input[type=submit] {
    border-color: #F14D34;
    background-color: #F14D34;
    color: white;
    width: 100%;
    cursor: pointer;
}

@media screen and (min-width:911px) {
    .footer-form {
        z-index: 2;
        position: relative;
    }

    input {
        font-size: 14px;
    }

    textarea {
        font-size: 14px;
    }

    .footer-form-checkbox-label {
        font-size: 12px;
    }

    .footer-form-checkbox-wrapper {
        align-items: center;
    }
}
</style>