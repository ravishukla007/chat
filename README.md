
 5 Min setup for chat
 
 ```js
$ npm install rs-chat
```

 ```js
var chat = require('chat')(app);

chat.init({
  host     : 'localhost',
  user     : 'user',
  password : 'password',
  database : 'database'
});

```

 ```js
CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `toId` int(11) NOT NULL,
  `msg` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `read_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

```



 ```js
 <link rel="stylesheet" type="text/css" href="static/css/rs-chat.min.css">
	<script type="text/javascript" src="static/js/socket.io.js"></script>

```


 ```js

RSChat.init({
  userId: '1', // logged in user id
  name: 'ravi shukla', // logged in user name
});

```


Open chat box
 ```js
RSChat.start('user_id', 'username')
```



