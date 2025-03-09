import{_ as a,c as i,o as n,ae as e}from"./chunks/framework.Dh1jimFm.js";const E=JSON.parse('{"title":"Latex 入门","description":"","frontmatter":{},"headers":[],"relativePath":"tools/latex.md","filePath":"tools/latex.md"}'),t={name:"tools/latex.md"};function l(p,s,h,k,r,d){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="latex-入门" tabindex="-1">Latex 入门 <a class="header-anchor" href="#latex-入门" aria-label="Permalink to &quot;Latex 入门&quot;">​</a></h1><h3 id="什么是-latex" tabindex="-1">什么是 LaTeX <a class="header-anchor" href="#什么是-latex" aria-label="Permalink to &quot;什么是 LaTeX&quot;">​</a></h3><p>LaTeX（读作/ˈlɑːtɛx/或/ˈleɪtɛx/）是一个让你的文档看起来更专业的排版系统，而不是文字处理器。它尤其适合处理篇幅较长、结构严谨的文档，并且十分擅长处理公式表达。它是免费的软件，对大多数操作系统都适用。</p><p>LaTeX 基于 TeX（Donald Knuth 在 1978 年为数字化排版设计的排版系统）。TeX 是一种电脑能够处理的低级语言，但大多数人发现它很难使用。LaTeX 正是为了让它变得更加易用而设计的。目前 LaTeX 的版本是 LaTeX 2e。</p><p>如果你习惯于使用微软的 Office Word 处理文档，那么你会觉得 LaTeX 的工作方式让你很不习惯。Word 是典型的「所见即所得」的编辑器，你可以在编排文档的时侯查看到最终的排版效果。但使用 LaTeX 时你并不能方便地查看最终效果，这使得你专注于内容而不是外观的调整。</p><p>一个 LaTeX 文档是一个以 <code>.tex</code> 结尾的文本文件，可以使用任意的文本编辑器编辑，比如 Notepad，但对于大多数人而言，使用一个合适的 LaTeX 编辑器会使得编辑的过程容易很多。在编辑的过程中你可以标记文档的结构。完成后你可以进行编译——这意味着将它转化为另一种格式的文档。它支持多种格式，但最常用的是 PDF 文档格式。</p><h3 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h3><p>对于 Windows 用户，你需要下载 TeX Live 或 MikTeX。国内用户可以使用 <a href="https://mirrors.tuna.tsinghua.edu.cn/" target="_blank" rel="noreferrer">清华大学 TUNA 镜像站</a>，请点击页面右侧的「获取下载链接」按钮，并选择「应用软件」标签下的「TeX 排版系统」即可下载 TeX Live 或 MikTeX 的安装包，其中 TeX Live 的安装包是一个 ISO 文件，需要挂载后以管理员权限执行 <code>install-tl-advanced.bat</code>。</p><p>对于 macOS 用户，清华大学 TUNA 镜像站同样提供 MacTeX 和 macOS 版 MikTeX 的下载。</p><p>对于 Linux 用户，如果使用 TeX Live，则同样下载 ISO 文件，执行 <code>install-tl</code> 脚本；如果使用 MikTeX，则按照 <a href="https://miktex.org/download#unx" target="_blank" rel="noreferrer">官方文档</a> 进行安装。</p><p>当然也可以使用在线编辑器 <a href="https://overleaf.com" target="_blank" rel="noreferrer">overleaf</a> ，节省环境配置的时间。</p><h3 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick Start&quot;">​</a></h3><p>打开编辑器，新建文件，输入以下内容：</p><div class="language-latex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">latex</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\\documentclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">article</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">% 这里是导言区</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{document}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Hello, world!</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{document}</span></span></code></pre></div><p><code>\\documentclass</code> 命令必须出现在每个 LaTeX 文档的开头。花括号内的文本指定了文档的类型。<strong>article</strong> 文档类型适合较短的文章，比如期刊文章和短篇报告。其他文档类型包括 <strong>report</strong>（适用于更长的多章节的文档，比如博士生论文），<strong>proc</strong>（会议论文集），<strong>book</strong> 和 <strong>beamer</strong>。方括号内的文本指定了一些选项——示例中它设置纸张大小为 A4，主要文字大小为 12pt。</p><p><code>\\begin{document}</code> 和 <code>\\end{document}</code> 命令将你的文本内容包裹起来。任何在 <code>\\begin{documnet}</code> 之前的文本都被视为前导命令，会影响整个文档。任何在 <code>\\end{document}</code> 之后的文本都会被忽视。</p><ul><li>Windows 下如何编译 Latex 文档</li></ul><p>按下 <strong>Save</strong> 按扭；<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="ightarrow"> 在 <strong>Libraries&gt;Documents</strong> 中新建一个名为 <strong>LaTeX course</strong> 文件夹；<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="ightarrow"> 将你的文档命名为 <strong>Doc1</strong> 并将其保存为 <strong>TeX document</strong> 放在这个文件夹中。</p><p>将不同的 LaTeX 文档放在不同的目录下，在编译的时候组合多个文件是一个很好的想法。确保 typeset 菜单设置为了 <strong>xeLaTeX</strong>。<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="ightarrow"> 点击 <strong>Typeset</strong> 按扭。</p><p>这时你的源文件会被转换为 PDF 文档，这需要花费一定的时间。在编译结束后，TeXworks 的 PDF 查看器会打开并预览生成的文件。PDF 文件会被自动地保存在与 TeX 文档相同的目录下。</p><h4 id="添加文档标题与章节" tabindex="-1">添加文档标题与章节 <a class="header-anchor" href="#添加文档标题与章节" aria-label="Permalink to &quot;添加文档标题与章节&quot;">​</a></h4><p><code>\\maketitle</code> 命令可以给文档创建标题。你需要指定文档的标题。如果没有指定日期，就会使用现在的时间，作者是可选的。</p><p>在 <code>\\begin{document}</code> 和 命令后紧跟着输入以下文本：</p><div class="language-latex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">latex</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{My First Document}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\author</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{My Name}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\today</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\maketitle</span></span></code></pre></div><p>如果需要的话，你可能想将你的文档分为章节（Sections）和小节（Subsections），对应的指令包括：</p><ul><li><code>\\section{...}</code></li><li><code>\\subsection{...}</code></li><li><code>\\subsubsection{...}</code></li></ul><p>相关的一个例子是：</p><div class="language-latex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">latex</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\section</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Introduction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is the introduction.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\section</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Methods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\subsection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Stage 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">The first part of the methods.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\subsection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Stage 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">The second part of the methods.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\section</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Results</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Here are my results.</span></span></code></pre></div><p>现在文档就变成这样了：</p><div class="language-latex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">latex</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\\documentclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[a4paper,12pt]{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">article</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{document}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{My First Document}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\author</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{My Name}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\today</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\maketitle</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\section</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Introduction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is the introduction.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\section</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Methods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\subsection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Stage 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">The first part of the methods.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\subsection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Stage 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">The second part of the methods.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\section</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Results</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Here are my results.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{document}</span></span></code></pre></div>`,30)]))}const c=a(t,[["render",l]]);export{E as __pageData,c as default};
