
const LastHowManyYears = 15;
export default {
    LAUNCH_YEARS_OPTIONS : function(){
        let options = []
        let year = new Date().getFullYear()
        for(var i=0;i<LastHowManyYears;i++){
            options.push({
                label : `In ${year - i}`,
                value : year - i
            })
        }
        return options;
    }(),
    LANDING_STATUS_OPTIONS : [
        {
            label :"Landing Succeed",
            value : true,
        },
        {
            label :"Landing Failed",
            value : false,
        }
    ],
    LAUNCH_STATUS_OPTIONS: [
        {
            label :"Launch Succeed",
            value : true,
        },
        {
            label :"Launch Failed",
            value : false,
        }
    ]
};