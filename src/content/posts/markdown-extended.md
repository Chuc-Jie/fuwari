---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '在 Fuwari 中了解更多关于 Markdown 的功能'
image: ''
tags: [演示, 示例, Markdown, Fuwari]
category: '示例'
draft: false 
---

## GitHub Repository Cards
你可以添加链接到 GitHub 仓库的动态卡片，在页面加载时，仓库信息会从 GitHub API 获取。

::github{repo="Fabrizz/MMM-OnSpotify"}

使用代码创建一个 GitHub 仓库卡片 `::github{repo="<owner>/<repo>"}`.

```markdown
::github{repo="saicaca/fuwari"}
```

## Admonitions

支持以下类型的警告: `note` `tip` `important` `warning` `caution`

:::note
突出用户在浏览时也应注意的信息。
:::

:::tip
可选信息，帮助用户更成功。
:::

:::important
用户成功所必需的关键信息。
:::

:::warning
由于潜在风险，用户必须立即关注的关键内容。
:::

:::caution
某个行为可能带来的负面后果。
:::

### Basic Syntax

```markdown
:::note
突出用户在浏览时也应注意的信息。
:::

:::tip
可选信息，帮助用户更成功。
:::
```

### Custom Titles

警告的标题可以自定义。

:::note[MY CUSTOM TITLE]
这是一条带有自定义标题的笔记。
:::

```markdown
:::note[MY CUSTOM TITLE]
这是一条带有自定义标题的笔记。
:::
```

### GitHub Syntax

> [!TIP]
> [The GitHub syntax](https://github.com/orgs/community/discussions/16925) is also supported.

```
> [!NOTE]
> GitHub 语法也受支持。

> [!TIP]
> GitHub 语法也受支持。
```

### Spoiler

你可以在文本中添加剧透。文本还支持 **Markdown** 语法。

内容 :spoiler[已隐藏 **ayyy**]!

```markdown
内容 :spoiler[已隐藏 **ayyy**]!

```