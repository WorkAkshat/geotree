// Simulate fetching data from the backend
function fetchEventData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const eventData = [
                { date: "01 Jan 2024", info: "Information about the event on this date." },
                { date: "02 Jan 2024", info: "Details about another event on this date." },
                { date: "03 Jan 2024", info: "Details about the event on 03 Jan 2024." },
                { date: "04 Jan 2024", info: "Details about the event on 04 Jan 2024." },
                { date: "05 Jan 2024", info: "Details about the event on 05 Jan 2024." }
            ];
            resolve(eventData);
        }, 1000); // Simulate network delay
    });
}

function createTimeline(events) {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = ''; // Clear any existing events

    events.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event';
        eventElement.innerHTML = `
            <div class="date">${event.date}</div>
            <div class="info">${event.info}</div>
        `;
        timeline.appendChild(eventElement);

        // Calculate car position between date and info
        const carPosition = (index + 0.5) * eventElement.offsetHeight;
        const carIcon = document.getElementById('carIcon');
        carIcon.style.top = `${carPosition}px`;
    });

    // Adjust the car animation based on the number of events
    const carIcon = document.getElementById('carIcon');
    const eventHeight = 60; // Adjust this value if needed based on your CSS
    const animationDuration = events.length * 2; // 2 seconds per event, adjust as needed

    carIcon.style.animation = `moveCar ${animationDuration}s linear forwards`;
    carIcon.style.height = `${events.length * eventHeight}px`;

    // If there are events, stop the animation at the bottom
    if (events.length > 0) {
        const lastEvent = timeline.lastChild;
        const lastEventPosition = lastEvent.offsetTop + lastEvent.offsetHeight;
        const carStopDelay = animationDuration - 2; // Stop the animation 2 seconds before reaching the last event

        setTimeout(() => {
            carIcon.style.top = `${lastEventPosition}px`;
            carIcon.style.animation = 'none'; // Stop the animation
        }, carStopDelay * 1000); // Convert seconds to milliseconds
    }
}

// Fetch and display the event data
fetchEventData().then(createTimeline);
