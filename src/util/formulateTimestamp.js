export default function _formulateTimeStamp(timestamp) {
    date = timestamp.substring(5,7) + '/' + timestamp.substring(8,10) + '/' + timestamp.substring(0,4);

    if(timestamp.substring(11,13) < 12) {
        time = timestamp.substring(11,16) + ' AM';
    } else if (timestamp.substring(11,13) > 12 && timestamp.substring(11,13) != 24) {
        time = (timestamp.substring(11,13)-12) + timestamp.substring(13,16) + ' PM';
    } else {
        if(timestamp.substring(11,13) == 12) {
            time = timestamp.substring(11,16) + ' PM';
        } else if(timestamp.substring(11,13) == 24) {
            time = (timestamp.substring(11,13)-12) + timestamp.substring(13,16) + ' AM';
        }
    }

    return date + ', ' + time;
}