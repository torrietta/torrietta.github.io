<template>
  <a-row type="flex" align="middle" justify="center">
    <a-col :span="15" :push="3" class="Out-Form-H">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <div class="Out-Form-Info">
          <h4>Log in back!</h4>
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
  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    color: #52e3b8
  }
  p {
    font-weight: 400;
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