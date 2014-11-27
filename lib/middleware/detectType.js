/**
 * @file 默认的类型检测
 * @author treelite(c.xinle@gmail.com)
 */

module.exports = function (req, res, next) {
    if (!res.type()) {
        res.type(req.xhr ? 'json' : 'html');
    }
    next();
};