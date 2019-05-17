Scripting
(The document is in Chinese during beta testing)
从 Surge Mac 3.2.0 开始，可以使用 JavaScript 来对 response body 进行修改。配置如下

[Script] http-response .* script-path=anti-spoiler.js 
每一行配置分为三个部分，第一部分为脚本类型，目前仅支持 ‘http-response’； 第二部分为针对请求 URL 的正则表达式； 第三部分为参数表，使用半角逗号分隔，参数有：
   •  script-path：JS 脚本的路径，可以是 URL、相对路径或绝对路径（仅限 macOS），必填。
   •  script-update-interval：JS 脚本的更新间隔，仅当使用 URL 时生效，选填，默认值为 24 小时。
   •  max-size：最大允许进行修改的 body 大小，单位为字节，选填，默认值为 524288 (512KB)。
由于进行 script 修改会需要 Surge 先将 response body 完全下载后再进行处理，如果遇到了较大的数据将导致内存占用量暴增，Surge iOS 受系统内存限制在该情况下极易被直接终止。
当返回的数据长度超过 max-size 设定值后，Surge 将放弃对该请求执行脚本并回退到 passthrough 模式。
编写脚本
Surge 会向 JSVM 上下文传入以下全局变量：
   •  body[String]: 原始 response body
   •  status[Number]: HTTP 状态码
   •  method[String]: HTTP 请求方法
   •  url[String]: URL 地址
Surge 将使用脚本的最后一行运行结果作为返回值，返回值约定如下：
   •  String 类型: 将使用该结果作为新的 response body
   •  Null: 终止该请求
   •  undefined: 不对请求进行修改
一个简单的样例

var obj = JSON.parse(body); // 对 response body 进行 JSON 解析得到 Object obj['surge'] = 'OK'; // 增加 'surge' 字段 JSON.stringify(obj); // 进行 JSON 编码并作为结果返回 
另一个样例，将全文查找所有的文字进行反剧透https://gist.github.com/Blankwonder/72fcdd46d1d9148f5461c6b59d859551
其他
   •  受 JavaScript 语言限制，目前仅支持对 UTF-8 编码的 response body 执行脚本，如果 response body 的二进制数据无法进行 UTF-8 解码，将跳过脚本直接返回。
   •  默认情况下，每次执行脚本时将使用一个干净的 JVM 上下文，如果需要可配置

[General] shared-jvm-context=true 
该模式下所有脚本将共享上下文，可以使用全局变量共享数据。
   •  可使用 console.log 将日志输出到 Surge 的日志中，方便调试。
   •  Dashboard 中抓到的 response header 和 response body 为修改后的结果，在 Notes 中可看到脚本的执行情况。