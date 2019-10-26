<template>
  <div id="MainFooter">
    <footer id="footer" class="dark">
      <div class="footer-wrap">
        <a-row>
          <a-col :lg="6" :sm="24" :xs="24">
            <div class="footer-center">
              <h2 class="Txt-Primary">Curriculumn</h2>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design">Feedback</a>
              </div>
              <div>
                <a href="http://pro.ant.design">Help Develop</a>
              </div>
              <div>
                <a href="http://mobile.ant.design">Facilitators</a>
              </div>

              <div>
                <a
                  target="_blank "
                  href="https://github.com/websemantics/awesome-ant-design"
                >Awesome Ant Design</a>
              </div>
              <div>
                <a target="_blank " href="http://ant-design.gitee.io/">Math Deep Dive</a>
              </div>
            </div>
          </a-col>
          <a-col :lg="6" :sm="24" :xs="24">
            <div class="footer-center">
              <h2 class="Txt-Primary">Extra courses</h2>
              <div>
                <span>-</span>
                Development
              </div>
              <div>
               Math Resources
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/dvajs/dva-cli"
                >dva-cli</a> -
                Language
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
              <h2 class="Txt-Primary">Teaching Materials</h2>
              <div>
                <a href="/changelog">Why Math</a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ant-design/ant-design/wiki/FAQ"
                >Wide Resourses</a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gitter.im/ant-design/ant-design"
                >Math in Medecine</a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gitter.im/ant-design/ant-design-english"
                >Math in Physics</a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://new-issue.ant.design/"
                >Stronomy</a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ant-design/ant-design/issues"
                >Computing</a>
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
                4034 Students
              </h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/">AntV</a>
                <span>-</span>
                Course Releasese
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">Egg</a>
                <span>-</span>
                Terms & Conditions
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <Row class="bottom-bar">
        <a-col lg="{4}" sm="{24}" />
        <a-col lg="{20}" sm="{24}">
          <span style="margin-right: 12px">Copyright © Math Spectra</span>
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
  background-color: #001529;
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
