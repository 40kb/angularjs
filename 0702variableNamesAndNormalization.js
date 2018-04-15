// Normalize:
// to make consistent to a standard
// specifically we are dealing with 'text normalization',
// or making strings of text consistent to a standard


/**
 * 在你view里面定了像下面的这个component
 * <search-result result-link-href="#"></search-result>
 */

// 但是在JS里面去把'result-link-href'去命名为variable的时候会出错!
// 因为 '-' 在JS里面作为减号，是一个operator
var result-link-href = '#';

// 就需要用JS developer都赞同的比较'统一'的做法用：
var resultLinkHref = '#';

// angular遵循了这种做法!
// 会把view里面的 result-link-href
// 和变量 resultLinkHref '连接起来'