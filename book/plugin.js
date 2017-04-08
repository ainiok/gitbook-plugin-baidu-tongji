require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
        config.baidu = config.baidu || {};
        var hm = document.createElement('script');
        hm.src = '//hm.baidu.com/hm.js?' + config.baidu.token;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(hm, s);
    });
});
