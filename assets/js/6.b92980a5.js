(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{448:function(t,e,a){"use strict";a.r(e);var o=a(0),s=a(378),n=a(306),i=a(308),r=a(309),h=a(379),l=a(311);o.a.use(s.a);var c=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],u={components:{Navbar:i.a,Sidebar:r.a,Contributing:h.a,Footer:l.a},data:function(){return{isSidebarOpen:!1,swUpdateEvent:null}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length>1},sidebarItems:function(){return Object(n.n)(this.$page,this.$route,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll),this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{getMsg:function(){return c[Math.floor(Math.random()*c.length)]},toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},onSWUpdated:function(t){this.swUpdateEvent=t}}},d=(a(376),a(377),a(43)),b=Object(d.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{class:{"--fluid":t.shouldShowSidebar},on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("main",{staticClass:"main-content"},[a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),t.shouldShowNavbar?a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2):t._e(),t._v(" "),a("div",{staticClass:"home"},[a("div",{staticClass:"page"},[a("article",{staticClass:"container"},[t._t("top"),t._v(" "),a("h1",[t._v("Page not found")]),t._v(" "),a("blockquote",[t._v(t._s(t.getMsg()))]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("Take me home.")]),t._v(" "),a("p",[t._v("In the meantime you can look at the following pages:")]),t._v(" "),a("Content",{attrs:{custom:!1}}),t._v(" "),t._t("bottom")],2)])])],1),t._v(" "),a("Footer",{class:{"--with-sidebar":t.shouldShowSidebar}})],1)}),[],!1,null,null,null);e.default=b.exports}}]);