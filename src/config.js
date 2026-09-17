export const navigationLinks = [
    { title: '首页', url: '/', icon: 'mdi-home' },
    { title: '关于', url: '/about', icon: 'mdi-account' },
    { title: '友链', url: '/friends', icon: 'mdi-account-group' },
    { title: '博客', url: 'https://blog.gaein.cn/', icon: 'mdi-post' },
];

export const homeContent = [
    {
        title: 'GAEIN.CN',
        content_list: [
            'Gaein nidb 的个人网站，搭建于 2017 年，记录和分享有趣的事情以及编程技术。',
            '这里主要存放个人介绍、站点入口和朋友们的网站。',
        ],
    },
];

export const aboutContent = [
    {
        title: '关于我',
        content_list: [
            '你好，我是 Gaein nidb，一名计算机专业学生。',
            '平时喜欢编程、折腾新技术，也会记录生活中的有趣见闻。',
        ],
        timeline: [
            {
                icon: 'mdi-flag',
                color: 'green',
                title: '2017',
                content: '个人网站 gaein.cn 上线。',
            },
            {
                icon: 'mdi-code-tags',
                color: 'blue',
                title: '持续更新',
                content: '继续学习和分享编程技术，偶尔也记录生活。',
            },
        ],
    },
];

export const aboutInfo = {
    title: '信息',
    content: [
        {
            title: '联系与站点',
            content: [
                { title: '个人网站', content: 'https://www.gaein.cn/' },
                { title: '电子邮箱', content: 'mail@gaein.cn' },
            ],
        },
        {
            title: '技术方向',
            content: [
                { title: '开发', content: '关注 Web 开发、C# 与 .NET。' },
                { title: '兴趣', content: '喜欢研究实用工具和有趣的新技术。' },
            ],
        },
    ],
};

export const friendLinks = [
    {
        avatar: 'https://img.cdn.gaein.cn/avatar/128x.webp',
        title: 'Gaein nidb',
        description: '记录生活与编程技术。',
        url: 'https://www.gaein.cn/',
    },
];

export const errorLinks = navigationLinks.slice(0, 3);

export const errorMessages = {
    400: { msg: '请求格式不正确', details: '服务器无法理解这次请求，请检查提交的内容。' },
    401: { msg: '需要身份验证', details: '请先登录或提供有效的身份凭据。' },
    403: { msg: '没有访问权限', details: '你没有权限查看这个页面。' },
    404: { msg: '页面没有找到', details: '这个地址不存在，或者页面已经被移动。' },
    408: { msg: '请求超时', details: '服务器等待了太久，请稍后重试。' },
    429: { msg: '请求过于频繁', details: '操作速度有些快，请稍等片刻再试。' },
    500: { msg: '服务器内部错误', details: '服务器遇到了一些问题，请稍后再来。' },
    502: { msg: '网关响应异常', details: '上游服务暂时没有正确响应。' },
    503: { msg: '服务暂不可用', details: '网站正在维护或暂时繁忙，请稍后重试。' },
    504: { msg: '网关响应超时', details: '上游服务响应时间过长，请稍后重试。' },
};

export const defaultErrorMessage = {
    msg: '未知的 HTTP 状态码',
    details: '没有找到这个状态码的详细说明。',
};
