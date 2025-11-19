---
title: 基于Ollama本地部署DeepSeek模型的API开发实践
published: 2025-03-09
description: '通过Flask框架构建自定义AI接口，实现本地部署模型的流式交互'
image: ''
tags: [Ollama, DeepSeek, Python, Flask, API开发]
category: '实践'
draft: false 
---


## 思考
自从上次用Ollama本地部署了DeepSeek后，我就想能不能自己做个API，然后自己使用？
然后就开始瞎琢磨，琢磨出了以下内容。


## API代码展示

这里用了```deepseek-r1:1.5b```作为示例。

```python

from flask import Flask, request, jsonify
import requests

app = Flask(__name__)
OLLAMA_API = "http://localhost:11434/api/generate"

def query_deepseek(prompt, model="deepseek-r1:1.5b", stream=False):
    headers = {"Content-Type": "application/json"}
    data = {
        "model": model,
        "prompt": prompt,
        "stream": stream
    }
    try:
        response = requests.post(OLLAMA_API, headers=headers, json=data)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        return {"error": str(e)}

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    prompt = data.get("prompt", "")
    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400
    result = query_deepseek(prompt)
    if "error" in result:
        return jsonify(result), 500
    return jsonify({"response": result.get("response", "")})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

```

## 处理发问和回答代码展示

```python

import requests
import json

def call_deepseek(prompt, model="deepseek-r1:1.5b"):
    url = "http://localhost:11434/api/generate"
    headers = {"Content-Type": "application/json"}
    data = {
        "model": model,
        "prompt": prompt,
        "stream": True  # 保持流式输出
    }

    full_response = ""
    try:
        response = requests.post(url, headers=headers, json=data, stream=True)
        response.raise_for_status()
      
        for line in response.iter_lines():
            if line:
                chunk = json.loads(line.decode('utf-8'))
                # 处理Unicode转义字符
                text = chunk['response'].encode('utf-8').decode('unicode_escape')
                full_response += text
              
    except Exception as e:
        return f"Error: {str(e)}"
  
    return full_response

# 测试调用
if __name__ == "__main__":
    response = call_deepseek("你好，介绍一下你自己")
    print("完整回复：\n", response)

```

## 回顾
目前代码有很多槽点，不过因为我所学不多，暂时就这样子吧

### 目前进度如下：
已完成以下关键步骤：

1. 本地模型部署：通过Ollama成功运行DeepSeek-1.5B模型
2. API基础调用：验证了通过cURL直接调用 ```http://localhost:11434/api/generate``` 接口的可行性
3. 初步响应获取：已获得模型的分块流式响应（streaming response）

咨询了DeepSeek，了解到下一步操作:
1. 处理流式响应（关键步骤）
2. 客户端测试
3. 完善API功能
4. 部署准备

后面再来了。。。