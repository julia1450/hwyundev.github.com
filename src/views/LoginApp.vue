<template>
	<div class="login-wrapper">
		<form class="login-form">
			<router-link :to="{ path: '/' }"><div class="logo"></div></router-link>
			<div class="input-wrapper">
				<label class="form-group">
					<input type="text" placeholder="아이디" />
					<button class="btn-clear">
						<font-awesome-icon
							:icon="['fa', 'backspace']"
							:style="{ color: '#ccc', verticalAlign: 'middle' }"
							title="about"
						/>
					</button>
				</label>
				<label class="form-group">
					<input type="password" placeholder="비밀번호 " />
					<button class="btn-clear">
						<font-awesome-icon
							:icon="['fa', 'backspace']"
							:style="{ color: '#ccc', verticalAlign: 'middle' }"
							title="about"
						/>
					</button>
				</label>
			</div>
			<button class="btn login-btn">LOG IN</button>
		</form>
	</div>
</template>

<script>
export default {
	name: "LoginApp",
}
</script>

<style>
.logo {
	width: 53px;
	height: 41px;
	background-image: url("~@/assets/img/hyevlog-logo.png");
	background-repeat: no-repeat;
	background-size: contain;
}
.login-wrapper {
	background-color: #f8f4fe;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
.login-form {
	box-sizing: border-box;
	box-shadow: 0px 4px 8px #ccbae28e;
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: 400px;
	height: 300px;
	background-color: #fff;
	padding: 0 40px;
	border-radius: 5px;
}
.input-wrapper {
	margin-top: 34px;
	width: 100%;
	font-size: 13px;
}
.form-group {
	display: flex;
	align-items: center;
	width: 100%;
	position: relative;
}
.form-group + .form-group {
	margin-top: 20px;
}
.form-group input {
	flex: 1;
	height: 34px;
	line-height: 34px;
	padding: 0 10px;
	border-radius: 5px;
	border: 1px solid #ccbae2d3;
}
.form-group input:focus {
	/* outline-offset: -2px; */
	outline-color: #ccbae2d3;
}
.btn-clear {
	background-color: transparent;
	position: absolute;
	top: 8px;
	right: 4px;
	border: none;
}
.form-label {
	width: 100px;
}
.login-btn {
	width: 100%;
	margin-top: 34px;
	background-color: #b194d4;
	color: white;
	font-weight: 600;
}
</style>
