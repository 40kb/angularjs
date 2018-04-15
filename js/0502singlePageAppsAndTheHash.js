/**
 * <a href="#bookmark">go to bookmark</a>
 * ...
 * ...
 * <div id="bookmark">this is bookmark</div>
 */

// 整个page表示为document
// bookmark -- 表示这个document的一个部分(bookmark部分)
//
// 加上这个#
// #bookmark -- fragment identifier
// #bookmark 表示的是document的一个fragment(bookmark fragment)

// 然而browser事件中有一个叫'hashchange'
window.addEventListener('hashchange', function() {
  console.log('hash changed!: ' + window.location.hash);
})

// 即使#bookmark在document中不存在
// 我们同样也能拿到hash的值 -- window.location.hash
//
// 这样的话你可以随意放你想要的值在fragment identifier里面
// fragment identifier是string你可以放长得像目录结构的string进去
//
// 例如：/bookmark/math/...
// 这些fragment在document里面不是真的存在，但是我们可以让它看起来像存在一样
// 这样的话每当hashchange的时候能拿到fragment的值
// 我们可以根据拿到不同的值来做不同的事情
window.addEventListener('hashchange', function() {
  console.log('hash changed!: ' + window.location.hash);

  if (window.location.hash === '#bookmark/1') {
    console.log('page 1 is cool')
  }
  if (window.location.hash === '#bookmark/2') {
    console.log('page 2 is cool')
  }
  if (window.location.hash === '#bookmark/3') {
    console.log('page 3 is cool')
  }

});

// 这个时候browser URL没有跳转去reload整个页面
// 而且这些fragment也没有真正的存在document中，browser也不会定位到那里
// 而我们可以通过JS来根据不同的fragment的值来做相应的事情
// 这个idea是SPA的fundamental key!

// 同时angular把这些wrap起来提供了给你 -- $location
// 可以让你很轻易的去build SPA
