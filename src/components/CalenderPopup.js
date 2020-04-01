import React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

let events = [
    {

    }
]

const localizer = momentLocalizer(moment)
const CalenderPopup = props => (


    <div>
        <Calendar
            localizer={localizer}
            events={settingDate(props.location.state.activityPeriod)}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            defaultDate={new Date(2020, 1, 1)}
        />
    </div>
)

function settingDate(data) {
    let events = [];
    data.map(obj => {
        let tempObj = {};

        for (let j = 0; j < Object.keys(obj).length; j++) {
            let temp = []
            let x = ''
            let keyVal = Object.keys(obj);
            for (let i = 0; i < obj[Object.keys(obj)[j]].length; i++) {
                if (obj[keyVal[j]][i] !== ' ') {
                    x += obj[keyVal[j]][i]
                }
                else if (x.length === 3) {
                    switch (x) {
                        case 'Jan':
                            x = 0;
                            break;
                        case 'Feb':
                            x = 1;
                            break;
                        case 'Mar':
                            x = 2;
                            break;
                        case 'Apr':
                            x = 3;
                            break;
                        case 'May':
                            x = 4;
                            break;
                        case 'Jun':
                            x = 5;
                            break;
                        case 'Jul':
                            x = 6;
                            break;
                        case 'Aug':
                            x = 7;
                            break;
                        case 'Sep':
                            x = 8;
                            break;
                        case 'Oct':
                            x = 9;
                            break;
                        case 'Nov':
                            x = 10;
                            break;
                        case 'Dec':
                            x = 11;
                            break;
                    }
                    temp.push(parseInt(x));
                    x = ''
                    continue;
                }
                else if (obj[Object.keys(obj)[j]].length !== i + 1 && x !== '') {
                    temp.push(parseInt(x));
                    x = ''
                    continue;
                }
            }
            if (x !== '') {
                if (x.slice(-2) === 'PM') {
                    temp.push(parseInt(x.slice(-6, -4).trim()) + 12)
                }
                else {
                    temp.push(parseInt(x.slice(-7, -4).trim()))
                }
                temp.push(parseInt(x.slice(-4, -2)))
            }

            if (j === 0) {
                tempObj['start'] = new Date(...temp)
            }
            else {
                tempObj['end'] = new Date(...temp)
            }
        }
        events.push(tempObj)
    })
    console.log(events)
    return events;
}
export default CalenderPopup
