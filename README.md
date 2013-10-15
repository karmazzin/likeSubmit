#likeSubmit
JavaScript post request like a form submit

##Как это работает:
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
##Methods:
function(path, params, method)
path: string - устанавливает адрес, по которому отправляется запрос (аналогично action в форме)
params: string | object - принимает сериализованную строку или объект для отправки
method: string - устанавливает метод для отправки, по-умолчанию 'POST'