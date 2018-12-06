
## Getting started ##

### Get a copy of the plugin ###

You can fork or download the plugin from GitHub, or you can install it through npm.
 
```js
$ npm install rs-chat
```

### Setup for nodejs ###

```js
var app = require('http')
var chat = require('chat')(app);

chat.init({
  host     : 'localhost',
  user     : 'user',
  password : 'password',
  database : 'database'
});

```

### Create table ### 

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


### Load the required files ### 

Inside the page's head tag include the CSS file.

```js
<link rel="stylesheet" type="text/css" href="static/css/rs-chat.min.css">
```

In the page's footer, just before </body>, include the required JavaScript files.

```js
<link rel="stylesheet" type="text/css" href="static/css/rs-chat.min.css">	<script type="text/javascript" src="static/js/socket.io.js"></script>

```

### Instantiate the chat plugin ### 

```js
<script type="text/javascript">
  RSChat.init({
    userId: '1', // logged in user id
    name: 'ravi shukla', // logged in user name
  });
</script>
```


### Call the below function to open chat box ### 

```js
RSChat.start('user_id', 'username')
```



