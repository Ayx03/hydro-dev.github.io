(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{505:function(e,r,t){"use strict";t.r(r);var s=t(2),a=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"反向代理-ssl-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反向代理-ssl-配置"}},[e._v("#")]),e._v(" 反向代理 / SSL 配置")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("若使用反向代理，请注意将 Hydro 设置的 X-Host header 配置正确（参照下方样例配置）。"),t("br"),e._v("\nX-Forwarded-Host 配置错误会导致用户无法登录等问题。(CsrfTokenError)"),t("br"),e._v("\nX-Forwarded-For 配置错误会导致无法记录用户IP。")]),e._v(" "),t("p",[e._v("使用 "),t("code",[e._v("hydrooj cli system set server.xhost x-forwarded-host")]),e._v(" 指定自定义 Host header。")]),e._v(" "),t("p",[e._v("若您使用 Nginx，请注意配置 WebSocket 协议的反向代理。")])]),e._v(" "),t("p",[e._v("Hydro 支持使用 Caddy, HaProxy 等工具进行反向代理，"),t("a",{attrs:{href:"https://github.com/hydro-dev/Hydro/tree/master/examples/reverse_proxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("此处"),t("OutboundLink")],1),e._v(" 提供了一些配置样例。")]),e._v(" "),t("p",[e._v("Hydro 推荐您使用 "),t("a",{attrs:{href:"https://caddyserver.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Caddy"),t("OutboundLink")],1),e._v("。以下为样例 Caddyfile。\n提示：如果您的服务器位于国内，则需要进行备案后才能使用 80 和 443 端口。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("hydro.ac {\n  reverse_proxy http://localhost:8888 {\n    header_up x-forwarded-host hydro.ac\n  }\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])])])}),[],!1,null,null,null);r.default=a.exports}}]);