<template>
  <div>
    <a-row type="flex" align="middle" justify="center">
      <a-col :span="8" class="Out-Form-H">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <div class="Out-Form-Info">
            <h1>Contact us!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum cumque illo ab repellat exercitationem obcaecati.</p>
          </div>
          <a-form-item>
            <a-input
              v-decorator="[
          'email',
          { rules: [{ required: true, message: 'Please input your email!' }] },
        ]"
              placeholder="Email"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
              type="password"
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
            >Remember me</a-checkbox>
            <a class="login-form-forgot" href>Forgot password</a>
            <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>Or
            <a href>register now!</a>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>
<style lang="scss">
.Out-Form-Info {
  h1 {
    font-size: 2rem;
    font-weight: lighter;
    text-align: center;
    color: #52e3b8;
  }
  p {
    font-weight: lighter;
    text-align: center;
  }
}
.Out-Form-H {
  background: rgba(#52e3b8, 0.1);
  padding: 20px 2rem;
  border-radius: 4px;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>