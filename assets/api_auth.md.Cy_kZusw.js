import{_ as t,c as a,o as s,a2 as i}from"./chunks/framework.CmeiYqq3.js";const c=JSON.parse('{"title":"用户相关接口","description":"","frontmatter":{},"headers":[],"relativePath":"api/auth.md","filePath":"api/auth.md"}'),e={name:"api/auth.md"},l=i(`<h1 id="用户相关接口" tabindex="-1">用户相关接口 <a class="header-anchor" href="#用户相关接口" aria-label="Permalink to &quot;用户相关接口&quot;">​</a></h1><h2 id="用户注册" tabindex="-1">用户注册 <a class="header-anchor" href="#用户注册" aria-label="Permalink to &quot;用户注册&quot;">​</a></h2><h4 id="请求url" tabindex="-1">请求URL <a class="header-anchor" href="#请求url" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/auth/register </code></li></ul><h4 id="请求方式" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>POST</li></ul><h4 id="请求头" tabindex="-1">请求头 <a class="header-anchor" href="#请求头" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>&quot;content-type&quot;: &quot;application/json&quot;,</code></li></ul><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">email</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>邮箱</td></tr><tr><td style="text-align:left;">password</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>密码</td></tr><tr><td style="text-align:left;">code</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>验证码</td></tr></tbody></table><h4 id="返回示例" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="备注" tabindex="-1">备注 <a class="header-anchor" href="#备注" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p><h2 id="账号密码登录" tabindex="-1">账号密码登录 <a class="header-anchor" href="#账号密码登录" aria-label="Permalink to &quot;账号密码登录&quot;">​</a></h2><h4 id="请求url-1" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-1" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/auth/login </code></li></ul><h4 id="请求方式-1" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-1" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>POST</li></ul><h4 id="请求头-1" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-1" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>&quot;content-type&quot;: &quot;application/json&quot;,</code></li></ul><h4 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">email</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>邮箱</td></tr><tr><td style="text-align:left;">password</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>密码</td></tr><tr><td style="text-align:left;">captchaId</td><td style="text-align:left;">否</td><td style="text-align:left;">string</td><td>人机验证ID</td></tr></tbody></table><h4 id="返回示例-1" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-1" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><p>登录成功返回值</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;refreshToken&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>连续登录失败三次会返回值</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;captchaId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;需要人机验证&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="返回参数说明" tabindex="-1">返回参数说明 <a class="header-anchor" href="#返回参数说明" aria-label="Permalink to &quot;返回参数说明&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">token</td><td style="text-align:left;">string</td><td>请求使用的token，1小时内有效</td></tr><tr><td style="text-align:left;">refreshToken</td><td style="text-align:left;">string</td><td>刷新token用的token，7天内有效</td></tr></tbody></table><h4 id="备注-1" tabindex="-1">备注 <a class="header-anchor" href="#备注-1" aria-label="Permalink to &quot;备注&quot;">​</a></h4><ol><li>同一邮箱连续登录失败三次会返回需要人机验证，此时需要等待30分钟或者调用人机验证接口并通过滑块验证才可以继续登录。</li><li>登录成功会在Cookie中添加<code>user_id</code>和<code>user_id_md5</code>，其中Cookie中的内容暂时没有在后端使用，如需使用请自行修改相关代码。</li></ol><h2 id="邮箱验证登录" tabindex="-1">邮箱验证登录 <a class="header-anchor" href="#邮箱验证登录" aria-label="Permalink to &quot;邮箱验证登录&quot;">​</a></h2><h4 id="请求url-2" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-2" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/auth/login/email </code></li></ul><h4 id="请求方式-2" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-2" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>POST</li></ul><h4 id="请求头-2" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-2" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>&quot;content-type&quot;: &quot;application/json&quot;,</code></li></ul><h4 id="参数-2" tabindex="-1">参数 <a class="header-anchor" href="#参数-2" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">email</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>邮箱</td></tr><tr><td style="text-align:left;">code</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>验证码</td></tr><tr><td style="text-align:left;">captchaId</td><td style="text-align:left;">否</td><td style="text-align:left;">string</td><td>人机验证ID</td></tr></tbody></table><h4 id="返回示例-2" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-2" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><p>登录成功返回值</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;refreshToken&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>连续登录失败三次会返回值</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;captchaId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;需要人机验证&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="返回参数说明-1" tabindex="-1">返回参数说明 <a class="header-anchor" href="#返回参数说明-1" aria-label="Permalink to &quot;返回参数说明&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">token</td><td style="text-align:left;">string</td><td>请求使用的token，1小时内有效</td></tr><tr><td style="text-align:left;">refreshToken</td><td style="text-align:left;">string</td><td>刷新token用的token，7天内有效</td></tr></tbody></table><h4 id="备注-2" tabindex="-1">备注 <a class="header-anchor" href="#备注-2" aria-label="Permalink to &quot;备注&quot;">​</a></h4><ol><li>同一邮箱连续登录失败三次会返回需要人机验证，此时需要等待30分钟或者调用人机验证接口并通过滑块验证才可以继续登录。</li><li>登录成功会在Cookie中添加<code>user_id</code>和<code>user_id_md5</code>，其中Cookie中的内容暂时没有在后端使用，如需使用请自行修改相关代码。</li></ol><h2 id="更新token" tabindex="-1">更新TOKEN <a class="header-anchor" href="#更新token" aria-label="Permalink to &quot;更新TOKEN&quot;">​</a></h2><h4 id="请求url-3" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-3" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/auth/updateToken </code></li></ul><h4 id="请求方式-3" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-3" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>POST</li></ul><h4 id="请求头-3" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-3" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>&quot;content-type&quot;: &quot;application/json&quot;,</code></li></ul><h4 id="参数-3" tabindex="-1">参数 <a class="header-anchor" href="#参数-3" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">refreshToken</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>RefreshToken</td></tr></tbody></table><h4 id="返回示例-3" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-3" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><p>成功返回值</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;refreshToken&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>token失效</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="返回参数说明-2" tabindex="-1">返回参数说明 <a class="header-anchor" href="#返回参数说明-2" aria-label="Permalink to &quot;返回参数说明&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">token</td><td style="text-align:left;">string</td><td>请求使用的token，1小时内有效</td></tr><tr><td style="text-align:left;">refreshToken</td><td style="text-align:left;">string</td><td>刷新token用的token，7天内有效</td></tr></tbody></table><h4 id="备注-3" tabindex="-1">备注 <a class="header-anchor" href="#备注-3" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>无</p><h2 id="退出登录" tabindex="-1">退出登录 <a class="header-anchor" href="#退出登录" aria-label="Permalink to &quot;退出登录&quot;">​</a></h2><h4 id="请求url-4" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-4" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>Authorization&#39;: token </code></li><li><code>/api/v1/auth/logout </code></li></ul><h4 id="请求方式-4" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-4" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>POST</li></ul><h4 id="请求头-4" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-4" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>&quot;content-type&quot;: &quot;application/json&quot;,</code></li></ul><h4 id="参数-4" tabindex="-1">参数 <a class="header-anchor" href="#参数-4" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">refreshToken</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>RefreshToken</td></tr></tbody></table><h4 id="返回示例-4" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-4" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><p>成功返回值</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="备注-4" tabindex="-1">备注 <a class="header-anchor" href="#备注-4" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>该接口会把RefreshToken失效并清除Cookie</p><h2 id="清除cookie" tabindex="-1">清除Cookie <a class="header-anchor" href="#清除cookie" aria-label="Permalink to &quot;清除Cookie&quot;">​</a></h2><h4 id="请求url-5" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-5" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/auth/clearCookie </code></li></ul><h4 id="请求方式-5" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-5" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>POST</li></ul><h4 id="请求头-5" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-5" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>&quot;content-type&quot;: &quot;application/json&quot;,</code></li></ul><h4 id="参数-5" tabindex="-1">参数 <a class="header-anchor" href="#参数-5" aria-label="Permalink to &quot;参数&quot;">​</a></h4><p>无</p><h4 id="返回示例-5" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-5" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><p>无</p><h4 id="备注-5" tabindex="-1">备注 <a class="header-anchor" href="#备注-5" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>该接只清除Cookie，对RefreshToken没有影响</p><h2 id="修改密码验证" tabindex="-1">修改密码验证 <a class="header-anchor" href="#修改密码验证" aria-label="Permalink to &quot;修改密码验证&quot;">​</a></h2><h4 id="请求url-6" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-6" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/auth/resetpwdCheck </code></li></ul><h4 id="请求方式-6" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-6" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>POST</li></ul><h4 id="参数-6" tabindex="-1">参数 <a class="header-anchor" href="#参数-6" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">email</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>邮箱</td></tr><tr><td style="text-align:left;">captchaId</td><td style="text-align:left;">否</td><td style="text-align:left;">string</td><td>人机验证ID</td></tr></tbody></table><h4 id="返回示例-6" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-6" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><p>未进行人机验证返回值</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;captchaId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;需要人机验证&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>成功返回值</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="备注-6" tabindex="-1">备注 <a class="header-anchor" href="#备注-6" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>需要先进行人机验证，验证通过后可修改密码</p><p>v1.0.2之前为<code>GET</code>请求，请求参数为 <code>?eamil=用户邮箱&amp;captchaId=人机验证滑块ID</code></p><h2 id="修改密码" tabindex="-1">修改密码 <a class="header-anchor" href="#修改密码" aria-label="Permalink to &quot;修改密码&quot;">​</a></h2><h4 id="请求url-7" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-7" aria-label="Permalink to &quot;请求URL&quot;">​</a></h4><ul><li><code>/api/v1/auth/modifyPwd </code></li></ul><h4 id="请求方式-7" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-7" aria-label="Permalink to &quot;请求方式&quot;">​</a></h4><ul><li>POST</li></ul><h4 id="请求头-6" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-6" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><ul><li><code>&quot;content-type&quot;: &quot;application/json&quot;,</code></li></ul><h4 id="参数-7" tabindex="-1">参数 <a class="header-anchor" href="#参数-7" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">email</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>邮箱</td></tr><tr><td style="text-align:left;">password</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>新密码</td></tr><tr><td style="text-align:left;">code</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>邮箱验证码</td></tr><tr><td style="text-align:left;">captchaId</td><td style="text-align:left;">否</td><td style="text-align:left;">string</td><td>人机验证滑块ID</td></tr></tbody></table><h4 id="返回示例-7" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-7" aria-label="Permalink to &quot;返回示例&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><h4 id="备注-7" tabindex="-1">备注 <a class="header-anchor" href="#备注-7" aria-label="Permalink to &quot;备注&quot;">​</a></h4><p>需要先调用<a href="#修改密码验证">修改密码验证</a>接口</p>`,123),n=[l];function h(d,o,p,r,k,u){return s(),a("div",null,n)}const g=t(e,[["render",h]]);export{c as __pageData,g as default};
