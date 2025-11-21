---
title: Markdown示例
published: 2023-10-01
description: Markdown博客文章的一个简单示例。
tags: [Markdown, Blogging, 演示]
category: 示例
draft: false
---

# h1标题

段落之间用空行隔开。

第2段。_Italic_、**粗体**和`monospace`。逐项列表
看起来像：

- 这个
- 那个
- 另一个

请注意 --- 不考虑星号 --- 实际文本
内容从中的4列开始。

> 区块引号是
> 这样写的。
> 
> 它们可以跨越多个段落，
> 如果你愿意的话。

使用3个破折号表示em破折号。使用2个破折号表示范围（例如，“这就是全部”
第12-14章“）。三个点…将转换为省略号。
支持Unicode。 ☺

## h2标题

这是一个编号的列表：

1. 第一项
2. 第二项
3. 第三项

再次注意实际文本是如何从（4个字符）中的4列开始的
从左侧）。下面是一个代码示例：

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

正如你可能猜到的，缩进4个空格。顺便说一句，而不是
如果愿意，可以使用分隔块缩进块：

```
define foobar() {
    print "Welcome to flavor country!";
}
```

（这使得复制和粘贴更容易）。您可以选择标记
Pandoc的分隔块用于语法突出显示它：

```python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
```

### h3标题

现在是嵌套列表：

1. 首先，获取这些成分：

    - carrots
    - celery
    - lentils

2. 煮一些水。

3. 将所有内容倒入锅中并遵循
    这个算法：

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Footnote text goes here.

表格可以如下所示：

尺寸材料颜色

---

9棕色皮革
10天然麻帆布
11透明玻璃

Table: Shoes, their sizes, and what they're made of

(The above is the caption for the table.) Pandoc also supports
multi-line tables:

---

keyword text

---

red Sunsets, apples, and
other red or reddish
things.

green Leaves, grass, frogs
and other things it's
not easy being.

---

A horizontal rule follows.

---

Here's a definition list:

apples
: Good for making applesauce.
oranges
: Citrus!
tomatoes
: There's no "e" in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each
term/definition pair to spread things out more.)

Here's a "line block":

| Line one
| Line too
| Line tree

and images can be specified like so:

[//]: # (![example image]&#40;./demo-banner.png "An exemplary image"&#41;)

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$

$$
\begin{equation*}
\pi
=3.1415926535
 \;8979323846\;2643383279\;5028841971\;6939937510\;5820974944
 \;5923078164\;0628620899\;8628034825\;3421170679\;\ldots
\end{equation*}
$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.
