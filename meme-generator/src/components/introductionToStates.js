    // other exercise (introduction to states)
    // https://v2.scrimba.com/learn-react-c0e/~02b
    /*
    Challenge: complete the function below
    Given a name, return "Good <timeOfDay>, <name>!" depending
    on the current time of day.

    4 am - 11:59 am, timeOfDay = "morning"
    12 pm - 4:59 pm: timeOfDay = "afternoon"
    5 pm - 7:59 pm: timeOfDay = "evening"
    8 pm - 3:59 am: timeOfDay = "night"

    E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

    Hint: you can get the current time of day by using: 

    const date = new Date()
    const hours = date.getHours()
    */

    const date = new Date();
    const hours = date.getHours();

    function greeting(name) {
        let timeOfDay;

        if (hours >= 4 && hours <= 11){
            timeOfDay = "morning";
        }
        else if (hours >= 12 && hours <= 16){
            timeOfDay = "afternoon";
        }
        else if (hours >= 17 && hours <= 19
        ){
            timeOfDay = "evening";
        }
        else if (hours >= 20 && hours <= 3.9){
            timeOfDay = "night";
        }
        console.log(`Good ${timeOfDay}, ${name}`);
    };
    greeting("Bob");
    // - - - - -