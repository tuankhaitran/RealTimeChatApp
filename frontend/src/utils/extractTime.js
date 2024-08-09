function facebookStyleDatetime(inputDatetime) {
    const now = new Date();
    const differenceInMilliseconds = now - inputDatetime;
    const differenceInMinutes = Math.floor(differenceInMilliseconds / 1000 / 60);
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const differenceInDays = Math.floor(differenceInHours / 24);

    if (differenceInMinutes < 1) {
        return "Just now";
    } else if (differenceInMinutes < 60) {
        return `${differenceInMinutes} minutes ago`;
    } else if (differenceInHours < 24 && now.getDate() === inputDatetime.getDate()) {
        return `${differenceInHours} hours ago`;
    } else if (differenceInDays < 2 && now.getDate() - inputDatetime.getDate() === 1) {
        return `Yesterday at ${inputDatetime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
    } else if (differenceInDays < 7) {
        return `${inputDatetime.toLocaleDateString('en-US', { weekday: 'long' })} at ${inputDatetime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
    } else if (now.getFullYear() === inputDatetime.getFullYear()) {
        return `${inputDatetime.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} at ${inputDatetime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
    } else {
        return `${inputDatetime.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at ${inputDatetime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
    }
}
export default facebookStyleDatetime