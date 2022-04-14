
// DEFINITION OF MAP IN JS
/*  Map is a collection of elements where each element is stored as a Key, value pair.
    Map object can hold both objects and primitive values as either key or value. 
    When we iterate over the map object it returns the key, value pair in the same order as inserted.
    A Map has a property that represents the size of the map. */

// CREATING A MAP
    /* We can create a JavaScript Map by:
        Passing an Array to new Map()
        Create a Map and use Map.set() 

        Example1:
        const fruits = new Map([
            ["apples", 500],
            ["bananas", 300],
            ["oranges", 200]
        ]);

        Example2:
        //create a map
        const fruits = new Map();

        // Set Map Values
        fruits.set("apples", 500);
        fruits.set("bananas", 300);
        fruits.set("oranges", 200);
    */


    //FIVE EXAMPLE OF MAP METHODS

   /*  
        keys()	Returns an iterator object with the keys in a Map
        values()	Returns an iterator object of the values in a Map
        clear()	Removes all the elements from a Map
        delete()	Removes a Map element specified by a key
        get()	Gets the value for a key in a Map

*/