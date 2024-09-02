export const convertUnixToTime = (unixTimeStamp) => {
    const milliSeconds = unixTimeStamp * 1000; //convert to milliseconds
    const date = new Date(milliSeconds);
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    
    return `${hours}:${formattedMinutes} ${ampm}`;
}
