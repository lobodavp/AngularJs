// Модель
var model = "Hello world";

// AngularJS прилоежние состоит из одного или нескольких модулей.
// angular.module - создание нового angularJS модуля.
// первый параметр - имя модуля для создания или получения
// второй мараметр - Набор модулей, от которых будет зависить создаваемый модуль. Если параметр указан, то новый модуль будет создан.
// https://docs.angularjs.org/api/ng/function/angular.module

// Создаём модуль
var App = angular.module("App", []);

// Контроллер
// В AngularJS переменные которые начинаются с символа $ являются встроенными элементами фрэймворка.
// $scope - используется для передачи данных в представление.
// .controller - метод создающий контроллер.
// первый параметр - имя контроллера (<Name>Ctrl соглашение по именованию контроллеров)
// второй параметр - функция контроллера
App.controller("HelloWorldCtrl", function ($scope) { //первый контроллер
    $scope.message = model;
    // скоуп - изначально пустой объект, куда мы добавляем свойства и методы, чтобы html разметка могла вывести наш объект

    // Поведение / Behavior
    $scope.clickHandler = function () { // берёт значение свойства текст на скоупе и записывает в мессадже
        $scope.message = $scope.text; // значение свойства скоупа text записывается из input, если будет что-то введено
    }
});
App.controller('AppCtrl', function($scope){ //второй контроллер, массив объектов
    $scope.items = [{name:'Item 1', value:'value 1', property1:"Test 1" },
        {name:'Item 2', value:'value 2', property1:"Test 2"},
        {name:'Item 3', value:'value 3', property1:"Test 3"},
        {name:'Item 4', value:'value 4', property1:"Test 4"}];
    $scope.url = "table.html"; // используем url для подключения html через директиву ng-include
    $scope.tableView = "table.html"; // используем для подключения html при нажатии кнопки через директиву ng-click
    $scope.listView = "list.html"; // используем для подключения html через поведение при нажатии кнопки и директивы ng-click
    $scope.url = $scope.tableView; // используем для подключения html через поведение при нажатии кнопки и директивы ng-click
//поведение
    $scope.showList = function (){ // добавляем поведение при выборе варианта загрузки под управлнем директивы ng-click
        $scope.url = $scope.listView;
    };
    $scope.showTable = function (){ // добавляем поведение при выборе варианта загрузки под управлнем директивы ng-click
        $scope.url = $scope.tableView;
    };
});
App.controller('SelectCtrl', function($scope){ //третий контроллер
    $scope.items = ['Item 1','Item 2', 'Item 3','Item 4','Item 5','Item 6'];
    $scope.selected = 'Item 1'; //выбранное по умолчанию  значение массива для  <select> <options>
});
App.controller('SelectObjectCtrl', function($scope){ //четвертый контроллер, массив объектов
    $scope.items = [{prop1:'Item 1', prop2:1 },
        {prop1:'Item 2', prop2:2},
        {prop1:'Item 3', prop2:3},
        {prop1:'Item 4', prop2:4}];
        $scope.selected = $scope.items[0]; //выбранное по умолчанию  значение массива для <select> <options>
});
App.controller('SwitchCtrl', function($scope){ //пятый контроллер, массив объектов, используем директиву switch
    $scope.items = [{name:'Item 1', value: 10 },
        {name:'Item 2', value: 2},
        {name:'Item 3', value: 31},
        {name:'Item 4', value: 45}];
    $scope.options = [{display: "Таблица", value: "table"}, // свойство value носит служебное значение, исп в логике приложения
        {display: "Список", value: "list"},
        {display: "Список с маркерами", value: "budges"}];
    $scope.mode = $scope.options[0]; //выбранное по умолчанию  значение массива
});
App.controller('DirectCtrl', function($scope){ //шестой контроллер
    $scope.hideElem1 = false;
    $scope.hideElem2 = false;
    $scope.hideElem3 = false;
    $scope.showElem4 = false;
    $scope.showElem5 = false;
    $scope.showElem6 = false;
    $scope.removeElem7 = false;
    $scope.removeElem8 = false;
    $scope.removeElem9 = false;
});
App.controller('StyleCtrl', function($scope) { //седьмой контроллер
    $scope.selectedClass = "lightGreen";
    $scope.classNames = [{displayName: "Light Green", value: "lightGreen"},
        {displayName: "Light Blue", value: "lightBlue"},
        {displayName: "Light Coral", value: "lightCoral"}];
    $scope.clickHandler = function () {
        $scope.classNames = "test-div lightGreen"; // для свойства classNames устанавливаем строкой, состоящую из двух классов
    };
    $scope.clickHandler1 = function () {
        $scope.classNames1 = ["test-div", "lightGreen"]; // для свойства classNames устанавливаем массивом строковых
                                                        //значений, состоящим из двух классов
    };
    $scope.styleObjBool = { // устпнпвливаем стили объектом, содержащим стили
        color: false, // когда изменится чекбоксом на тру - привяжется свойство к стилю элемента
        border: false,
        size: false
    };
    $scope.styleObjString = {
        color: "red",
        border: "1px solid green",
        padding: "10px",
        marginTop: "20px"
            };
    $scope.items = ["item1","item2","item3","item4","item5","item6"];
    $scope.class1 = "green";
    $scope.class2 = "red";
});
App.controller('EventCtrl', function($scope) { // восьмой контроллер
    $scope.items = [{name: "ng-blur", apply: "Атрибут класс", description: "Событие blur, которое срабатывает, когда элемент теряет фокус"},
        {name: "ng-change", apply: "Атрибут класс", description: "Событие change, которое срабатывает, когда в элементе form меняется значение"},
        {name: "ng-click", apply: "Атрибут класс", description: "Событие click, которое срабатывает, когда выполняется клик по элементу"},
        {name: "ng-copy", apply: "Атрибут класс", description: "Событие copy, которое срабатывает при копировании(ctrl+c)"},
        {name: "ng-cut", apply: "Атрибут класс", description: "Событие cut, которое срабатывает при вырезании (ctrl+x)"},
        {name: "ng-paste", apply: "Атрибут класс", description: "Событие paste, которое срабатывает при вставке (ctrl+v) "},
        {name: "ng-dblclick", apply: "Атрибут класс", description: "Событие dblclick, которое срабатывает при двойном клике по элементу"},
        {name: "ng-focus", apply: "Атрибут класс", description: "Событие focus, которое срабатывает, когда элемент получает фокус"},
        {name: "ng-keydown", apply: "Атрибут класс", description: "Событие keydown, которое срабатывает, когда клавиша зажата"},
        {name: "ng-keypress", apply: "Атрибут класс", description: "Событие keypress, которое срабатывает после keydown"},
        {name: "ng-keyup", apply: "Атрибут класс", description: "Событие keyup, которое срабатывает, когда клавиша отпущена"},
        {name: "ng-mousedown", apply: "Атрибут класс", description: "Событие mousedown, которое срабатывает, когда кнопка мыши нажата"},
        {name: "ng-mouseenter", apply: "Атрибут класс", description: "Событие mouseenter, которое срабатывает, когда курсор попадает в определенную область"},
        {name: "ng-mouseleave", apply: "Атрибут класс", description: "Событие mouseleave, которое срабатывает, когда курсор покидает область элемента"},
        {name: "ng-mousemove", apply: "Атрибут класс", description: "Событие mousemove, которое срабатывает, когда курсор перемещается по поверхности элемента"},
        {name: "ng-mouseover", apply: "Атрибут класс", description: "Событие mouseover, которое срабатывает, когда курсор находится над элементом"},
        {name: "ng-mouseup", apply: "Атрибут класс", description: "Событие mouseup, которое срабатывает, когда клавиша мыши отпущена"},
        {name: "ng-submit", apply: "Атрибут класс", description: "Событие submit, которое срабатывает, когда в элементе form была нажата кнопка Submit"}
    ];
    $scope.type; // пока только объявляем, значение сейчас undefined
    $scope.handleEvent = function(event){ // принимает объект, который сгенерирован в результате возникновения события
        console.log(event); // выводим в консоль, чтобы просмотреть свойства
        $scope.type = event.type; // из объекта события event извлекаем тип события и записываем в одноименное свойство скоупа,
        // которое объявили выше, это значение будет отображаться в диве
    };
    $scope.clickHandler = function (color) {
alert(color);
    };
});
App.controller('FormCtrl', function($scope){ // девятый контроллер
    $scope.dataValue = false;
    $scope.tasks = [
        {action: "Task 1", complete: false},
        {action: "Task 2", complete: true},
        {action: "Task 3", complete: false},
        {action: "Task 4", complete: true}
    ];
    $scope.counter = 0;
    $scope.change = function(){ //задаем поведение, при вызове увеличивает счетчик на единицу
        $scope.counter++;
    };
});
App.controller('Form1Ctrl', function($scope){ // десятый контроллер
    $scope.tasks = [
        {action: "Task 1", complete: false, priority: "Normal"},
        {action: "Task 2", complete: true, priority: "Normal"},
        {action: "Task 3", complete: false, priority: "Normal"},
        {action: "Task 4", complete: true, priority: "Normal"}
    ];
    $scope.addTask = function (task) { // angular.isDefined - функция, которая позволяет проверить наличие данных
        if (angular.isDefined(task) && //проверяем наличие созданного в результате пользовательского ввода объекта task,
                                        // т.е. если данные введены, возвращает true
        angular.isDefined(task.action) && // проверяем наличие данных свойств action и priority в создаваемом объекте task
        angular.isDefined(task.priority)) { //после проверки на наличие свойства priority создаанного объекта, допуускаем к
                                                // добавлению значений свойств в массив объектов tasks:
        $scope.tasks.push({
            action: task.action, // копируем нужные свойства из формы ввода(если не будем копировать - тогда сможем работать только
                                //с тем объектом, который создается) и методом push добавляем скопированный объект в массив объектов tasks,
                                    // созданный объект появляется в массиве и соответственно генерируется в таблице
            priority: task.priority,
            complete: false
        });
        }
        else alert("Заполните все поля формы"); // если не все поля заполнены выведем сообщение
    };
});
App.controller('FormValidCtrl', function($scope){ // Валидация формы, одиннадцатый контроллер
    $scope.addNewUser = function (userDetails) { // получаем данные из пользовательского ввода и формирауем свойство message,
                                                 // которое будем отображать в пользовательском интерфейсе
        $scope.message = userDetails.name + " ( company: " +userDetails.userCompany + " ) (" + userDetails.email + ") (" + userDetails.agreed + " )";
    };
    $scope.message = "Ready"; // начальное значение свойства
    $scope.getError = function(error) {
        if (angular.isDefined(error)) {
            if (error.required){
                return "Поле не должно быть пустым";
            } else if (error.email) {
                return "Введите правильный email";
            }
        }
    };
    $scope.requireValue = true; // эти два свойства используем при использовании атрибутов при валидации элемента формы
    $scope.matchPattern = new RegExp("[a-z]"); // задаем регулярное выражение
// свойства ниже, используем для валидации формы после нажатии кнопки submit
    $scope.addNewUser1 = function (userDetails, isvalid) {
        if (isvalid) {  // проверяем валидность формы, опираясь на isvalid
            $scope.message = userDetails.name + " ( company: " +userDetails.userCompany + " ) (" + userDetails.email + ") (" + userDetails.agreed + " )";
        } else {
            $scope.message = "Error"; // если форма не валидна, записываем в свойство message сообщение об ошибке
            $scope.showError = true; // показывает в случае ошибки, если значение true и дивы под управлением директиы ng-show
                                    //с соответствующим выражениями привязок станут видимыми
        }
    };
    $scope.getError1 = function(error){ // для многих элементов форм ошибки могут быть одинаковые, чтобы избавиться от
                                        // дублирования кода используем метод, подобный getError
      if (angular.isDefined(error)) {
          if (error.required) {
              return "Поле не должно быть пустым";
          } if (error.email) {
              return "Введите правильный email";
          }
      }
    };
});