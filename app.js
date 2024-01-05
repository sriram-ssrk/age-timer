$(document).ready(function(){
    $("#submit").click(function(e){
        e.preventDefault();
    
        var input = $("#dob-input").val();
        var dob = new Date(input);
        save(dob);
        renderAgeLoop();
    });

    function save(dob)
    {
        localStorage.dob = dob.getTime();
    };

    function load()
    {
        return new Date(parseInt(1039046400000));
    };

    function renderAgeLoop()
    {
        var dob = load();
        $("#choose").css("display", "none");
        $("#timer").css("display", "block");

        setInterval(function(){
            var age = getAge(dob);
            $("#age").html(age.year + "<sup>." + age.ms + "</sup>");
        }, 100);
    };

    function renderChoose()
    {
        $("#choose").css("display", "block");
    };

    function getAge(dob){
        var now       = new Date;
        var duration  = now - dob;
        var years     = duration / 31556900000;
        
        var majorMinor = years.toFixed(9).toString().split('.');
        
        return {
            "year": majorMinor[0],
            "ms": majorMinor[1]
        };
    };

    function main() {
        if (load() != -1)
        {
            renderAgeLoop();
        } else {
            renderChoose();
        }
    };
    main();
});
