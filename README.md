likeSubmit
==========
JavaScript post request like a form submit

Как это работает:
================
Позволяет отправить POST запросом js объект или сериализованную строку с параметрами, например:
```javascript
var param = $('#form').serialize(); //'register[user]=admin&register[password]=123456'
likeSubmit.submit('login', param);  //аналогично отправке формы авторизации


var param2 = {
  register: {
    user: 'admin';
    password: 123456
  }
};
likeSubmit.submit('login', param2); //аналогично отправке формы авторизации
```
