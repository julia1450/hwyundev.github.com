<template>
    <section class="section section--contact">
        <h1 class="section-title">contact</h1>
        <div class="contact-wrap">
            <div>
                <div class="form-control"><input type="text" name="sender" id="sender" placeholder="이름을 입력해주세요"></div>
                <div class="form-control form-inline">
                    <select class="inline-item w-30p" v-model="selectedSenderType">
                        <option value="개인">개인</option>
                        <option value="회사">회사</option>
                    </select>
                    <input class="inline-item w-left" type="text" name="company" id="company" placeholder="회사명을 입력해주세요" :disabled="selectedSenderType==='개인'">
                </div>
                <div class="form-control"><input type="text" name="subject" id="subject" placeholder="제목을 입력해주세요"></div>
            </div>
            <div class="form-control"><input type="text" name="message" id="message" placeholder="메세지를 입력해주세요"></div>
        </div>
        <button class="send-btn">send</button>
    </section>
</template>

<script>
export default {
    name: "Contact",
    data() {
        return {
            selectedSenderType: "개인"
        }
    }
}
</script>

<style scoped>
.contact-wrap {
    margin: 0 10px;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.contact-wrap > div {
    width: 30%;
    min-width: 310px;
    padding: 0 5px;
    height: 100%;
}
.contact-wrap > div:last-child {
    margin-right: 0;
}

.contact-wrap .form-control:last-child {
    margin-bottom: 0;
}
.form-control {
    margin-bottom: 10px;
    height: calc(100% / 3 - 10px);
}
.form-control > input {
    width: 100%;
    box-sizing: border-box;
    height: 34px;
    border: 2px solid #e6e6e6;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px #e6e6e6;
}
.form-control > select {
    border: 2px solid #e6e6e6;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px #e6e6e6;
}
.form-control.form-inline {
    display: flex;
    width: 100%;
}

.inline-item.w-30p {
    width: 30%;
    margin-right: 5px;
}

.inline-item.w-left {
    flex: 1;
}

input[name=message] {
    height: calc(34px * 3 + 20px);
}
input:disabled {
    cursor: not-allowed;
}

input::-webkit-input-placeholder {
  color: #bbbbbb;
}
input:-ms-input-placeholder {
  color: #bbbbbb;
}
textarea::-webkit-input-placeholder {
  color: #bbbbbb;
}
textarea:-ms-input-placeholder {
  color: #bbbbbb;
}

.send-btn {
    height: 34px;
    width: 70px;
    margin-top: 20px;
    background-color: #e6e6e6;
    border: none;
    border-radius: 5px;
}

@media all and (max-width: 659px) {
    input[name="message"] {
        margin-top: 10px;
    }
    .contact-wrap > div {
        width: 90%;
    }
}
</style>