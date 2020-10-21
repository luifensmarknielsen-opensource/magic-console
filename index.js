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

magicConsole.error("This is a error message");
magicConsole.warning("This is a warning message");
magicConsole.success("This is a success message");
magicConsole.magenta("This is a magenta colored message");

export default magicConsole;