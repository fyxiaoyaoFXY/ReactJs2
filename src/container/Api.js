import React, { Component } from 'react'

export default class api extends Component {
    render() {
        return (
            <div>
                <div className='title'>
                    <h4>主页  /   API</h4>
                    <div className='line'></div>
                </div>
                <div className="main">
                    <p>以下 api 路径均以 <a href="https://cnodejs.org/api/v1 ">https://cnodejs.org/api/v1 </a>为前缀</p>
                    <p>update 2019-03-21: 涉及发帖和发评论的接口都已经下线了，太多人为了测试客户端乱发帖了。</p>
                    <h1>主题</h1>
                    <div className='line1'></div>
                    <h3>get /topics 主题首页</h3>
                    <div className='line1'></div>
                    <p>接收 get 参数</p>
                    <ul>
                        <li>page Number 页数</li>
                        <li>tab String 主题分类。目前有 ask share job good</li>
                        <li>limit Number 每一页的主题数量</li>
                        <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                    </ul>
                    <p>示例：<a href="/api/v1/topics">/api/v1/topics</a></p>
                    <h3>get /topic/:id 主题详情</h3>
                    <div className='line1'></div>
                    <p>接收 get 参数</p>
                    <ul>
                        <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                        <li>accesstoken String 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，
                            才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。</li>
                    </ul>
                    <p>示例：<a href="/api/v1/topic/5433d5e4e737cbe96dcef312">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>
                    <h1>主题收藏</h1>
                    <div className='line1'></div>
                    <h3>post /topic_collect/collect 收藏主题</h3>
                    <div className='line1'></div>
                    <p>接收 post 参数</p>
                    <ul>
                        <li>accesstoken String 用户的 accessToken</li>
                        <li>topic_id String 主题的id</li>
                    </ul>
                    <p>返回值示例</p>
                    <div className="demo">{"success"}</div>
                    <h3>post /topic_collect/de_collect 取消主题</h3>
                    <div className='line1'></div>
                    <p>接收 post 参数</p>
                    <ul>
                        <li>accesstoken String 用户的 accessToken</li>
                        <li>topic_id String 主题的id</li>
                    </ul>
                    <p>返回值示例</p>
                    <div className="demo">{"success"}</div>
                    <h3>get /topic_collect/:loginname 用户所收藏的主题</h3>
                    <div className='line1'></div>
                    <p>示例：<a href="/api/v1/topic_collect/alsotang">/api/v1/topic_collect/alsotang</a></p>
                    <h1>用户</h1>
                    <div className='line1'></div>
                    <h3>get /user/:loginname 用户详情</h3>
                    <div className='line1'></div>
                    <p>示例：<a href="/api/v1/user/alsotang">/api/v1/user/alsotang</a></p>
                    <h3>post /accesstoken 验证 accessToken 的正确性</h3>
                    <div className='line1'></div>
                    <p>接收 post 参数</p>
                    <ul>
                        <li>accesstoken String 用户的 accessToken</li>
                    </ul>
                    <p>如果成功匹配上用户，返回成功信息。否则 403。</p>
                    <p>返回值示例</p>
                    <div className="demo">success, true, loginname, req.user.loginname, id,req.user.id, avatar_url,req.user.avatar_url</div>
                    <h1>消息通知</h1>
                    <div className='line1'></div>
                    <h3>get /message/count 获取未读消息数</h3>
                    <div className='line1'></div>
                    <p>接收 get 参数</p>
                    <ul>
                        <li>accesstoken String</li>
                    </ul>
                    <p>返回值示例</p>
                    <div className="demo"> data: 3 </div>
                    <h3>get /messages 获取已读和未读消息</h3>
                    <div className='line1'></div>
                    <p>接收 get 参数</p>
                    <ul>
                        <li>accesstoken String</li>
                        <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                    </ul>
                    <p>返回值示例</p>
                    <h1>知识点</h1>
                    <div className='line1'></div>
                    <p>1.如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。 
                        建议各移动端应用使用手机扫码的形式登录，验证使用 /accesstoken 接口，
                        登录后长期保存 accessToken。</p>

                </div>
            </div>
        )
    }
}
