var td = document.getElementById('name');

// browser will throw the event when i press the keyboard
td.addEventListener('keypress', function(event) {
  console.log('Pressed!');
});

// event loop
// basic it's say: wait here and the wait event throw

// 在JavaScript或者jQuery里面你需要手动的把这些事件attach在某些元素上面
// 但在Angular里面它会帮你做了这些事情/步骤