# How to use this console messages

* OPEN YOUR BROWSER
* RIGHT CLICK
* INSPECT ELEMENT
* GO TO CONSOLE
* WELL DONE

***

<strong>SOURCE CODE:</strong>

```javascript
var reset = "\x1b[0m";

var magicConsole = {
    error: function(string) {
        console.error("\x1b[31m" + "ERROR:\t" + string + reset);
    },
    warning: function(string) {
        console.warn("\x1b[33m" + "WARNING:\t" + string + reset);
    },
    success: function(string){
        console.info("\x1b[32m" + "SUCCESS:\t" + string + reset);
    },
    magenta: function(string){
        console.log("\x1b[35m" + "MAGENTA:\t" + string + reset)
    }
}
```

Credit:
<strong>Lui Fensmark Nielsen</strong>
<br>
Date: <strong>Oct. 22, 2020</strong>
