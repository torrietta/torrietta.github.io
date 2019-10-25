<template>
  <div id="MainFooter">
    <footer id="footer" class="dark">
      <div class="footer-wrap">
        <a-row>
          <a-col :lg="6" :sm="24" :xs="24">
            <div class="footer-center">
              <h2 class="Txt-Primary">Ant Design</h2>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design">GitHub</a>
              </div>
              <div>
                <a href="http://pro.ant.design">Ant Design Pro</a>
              </div>
              <div>
                <a href="http://mobile.ant.design">Ant Design Mobile</a>
              </div>
              <div>
                <a href="http://ng.ant.design">NG-ZORRO</a>
                <span>-</span>
                Ant Design of Angular
              </div>
              <div>
                <a
                  target="_blank "
                  href="https://github.com/websemantics/awesome-ant-design"
                >Awesome Ant Design</a>
              </div>
              <div>
                <a target="_blank " href="http://ant-design.gitee.io/">国内镜像站点 🇨🇳</a>
              </div>
            </div>
          </a-col>
          <a-col :lg="6" :sm="24" :xs="24">
            <div class="footer-center">
              <h2 class="Txt-Primary">资源链接</h2>
              <div>
                <a href="http://scaffold.ant.design">Scaffolds</a>
                <span>-</span>
                脚手架市场
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva">dva</a> - 应用框架
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/dvajs/dva-cli"
                >dva-cli</a> -
                开发工具
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://motion.ant.design"
                >Ant Motion</a>
                <span>-</span>
                设计动效
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://library.ant.design/"
                >AntD Library</a>
                <span>-</span>
                Axure 部件库
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://ux.ant.design">Ant UX</a>
                <span>-</span>
                页面逻辑素材
              </div>
            </div>
          </a-col>
          <a-col :lg="6" :sm="24" :xs="24">
            <div class="footer-center">
              <h2 class="Txt-Primary">社区</h2>
              <div>
                <a href="/changelog">更新记录</a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ant-design/ant-design/wiki/FAQ"
                >常见问题</a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gitter.im/ant-design/ant-design"
                >在线讨论 (中文)</a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gitter.im/ant-design/ant-design-english"
                >在线讨论 (English)</a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://new-issue.ant.design/"
                >报告 Bug</a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ant-design/ant-design/issues"
                >讨论列表</a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://stackoverflow.com/questions/tagged/antd"
                >StackOverflow</a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://segmentfault.com/t/antd"
                >SegmentFault</a>
              </div>
            </div>
          </a-col>
          <a-col :lg="6" :sm="24" :xs="24">
            <div class="footer-center">
              <h2>
                <img
                  class="title-icon"
                  src="/assets/logo.png"
                  alt
                />
                更多产品
              </h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/">AntV</a>
                <span>-</span>
                数据可视化
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">Egg</a>
                <span>-</span>
                企业级 Node 开发框架
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <Row class="bottom-bar">
        <a-col lg="{4}" sm="{24}" />
        <a-col lg="{20}" sm="{24}">
          <span
            style="line-height: '16px'; padding-right: 12; marginRight: 11; border-right: '1px solid rgba(255, 255, 255, 0.55)'"
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >隐私权政策</a>
          </span>
          <span style="margin-ight: 24">
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >权益保障承诺书</a>
          </span>
          <span style="margin-right: 12px">ICP 证浙 B2-2-100257</span>
          <span style="margin-right: 12px">Copyright © 蚂蚁金融服务集团</span>
        </a-col>
      </Row>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="less" scoped>
.Txt-Primary {
  color: #52e3b8;
}
// @import "~antd/lib/style/themes/default.less";
@border-color: rgba(229, 231, 235, 100);
@padding-space: 144px;
@site-text-color: #314659;
footer.dark {
  background-color: #000;
  color: rgba(255, 255, 255, 0.65);
  a {
    color: rgba(255, 255, 255, 0.9);
  }
  h2 {
    color: #52e3b8;
    & > span {
      color: #52e3b8;
    }
  }
  .bottom-bar {
    border-top: 1px solid #52e3b8;
    overflow: hidden;
    display: block;
  }
}

footer {
  border-top: 1px solid @border-color;
  clear: both;
  font-size: 14px;
  background: #fff;
  position: relative;
  z-index: 100;
  color: @site-text-color;
  box-shadow: 0 1000px 0 1000px #fff;
  .ant-row {
    text-align: center;
    .footer-center {
      display: inline-block;
      text-align: left;
      > h2 {
        font-size: 16px;
        margin: 0 auto 24px;
        font-weight: 500;
        position: relative;

        > .title-icon {
          width: 27px;
          margin-right: 16px;
        }
        > .anticon {
          font-size: 16px;
          position: absolute;
          left: -22px;
          top: 3px;
          color: #aaa;
        }
      }
      > div {
        margin: 12px 0;
      }
    }
  }
  .footer-wrap {
    position: relative;
    padding: 86px @padding-space 93px @padding-space;
  }
  .bottom-bar {
    border-top: 1px solid @border-color;
    text-align: center;
    padding: 16px @padding-space;
    margin: 0;
    line-height: 32px;
    a {
      color: rgba(255, 255, 255, 0.65);
      &:hover {
        color: #fff;
      }
    }
    .translate-button {
      text-align: left;
    }
  }
}
</style>
